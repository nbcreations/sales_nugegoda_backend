import multer from 'multer';
import path from 'path';
import axios from 'axios';
import pickBy from 'lodash/pickBy';
import multerS3 from 'multer-s3';
import logger from '../config/logger';
import config from '../config/config';
import DefaultResponse from '../utils/DefaultResponse';
import { S3 } from '@aws-sdk/client-s3';

function checkFileType(file: Express.Multer.File, cb: (error: any, result: boolean) => void, Allowed: RegExp, mimetype?: boolean) {
    // Check ext
    const extname = Allowed.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    if(!mimetype) {
        mimetype = Allowed.test(file.mimetype);
    }
    if (mimetype && extname) {
        cb(null, true);
    } else {
        cb({ status: false, message: 'This file type is not allowed' }, false);
    }
}

const s3Client = () => {
    const credentials = process.env.S3_ACCESS_KEY_ID
        ? {
            accessKeyId: config.s3.accessKey,
            secretAccessKey: config.s3.secretIKey,
        }
        : undefined;

    const options = pickBy(
        {
            region: config.s3.region,
            credentials,
        },
        Boolean
    );

    const client = new S3(options);
    return client;
}

const image = multer({
    storage: multerS3({
        s3: s3Client() as S3, // Cast to S3
        bucket: 'nbc-storage',
        key: function (
            _req: Express.Request,
            file: Express.Multer.File,
            cb: (error: any, key: string) => void
        ) {
            cb(null, `images/${file.originalname}-${Date.now()}-${path.extname(file.originalname).toLowerCase()}`);
        },
    }),
    fileFilter: function (
        _req: Express.Request,
        file: Express.Multer.File,
        cb: (error: any, result: boolean) => void
    ) {
        checkFileType(file, cb, /jpeg|jpg|webp|png|svg|gif|avif/);
    },
}).single('image');



const getObjectVersionId = async (fileName: string) => {
    const s3 = s3Client(); // Get an S3 client instance
  
    const params = {
      Bucket: 'nbc-storage',
      Prefix: fileName,
    };
  
    try {
      const response = await s3.listObjectVersions(params);
      if (response.Versions) {
        // Iterate through the versions to find the one you want
        for (const version of response.Versions) {
          // Check if the version's Key matches the file name
          if (version.Key === fileName) {
            return version.VersionId;
          }
        }
      }
      return null; // Return null if the object/version is not found
    } catch (err) {
      logger.error('Error listing object versions in S3:', err);
      return null;
    }
};

export default {
    image
}