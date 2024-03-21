import db from "../config/db";
import DefaultResponse from '../utils/DefaultResponse';
import multer from "multer";
import fileUpload from "../utils/fileUpload";
import { Response } from "express";
import { ExtendedRequest } from "../config/types";
import authorize from "../utils/authorize";
import logger from '../config/logger';

let comment = {
    "1" : {
        "description": "product image upload"
    },
    "2" : {
        "description": "listing category image upload"
    },
    "3" : {
        "description": "listing feature image upload"
    },
    "4" : {
        "description": "listing add by supplier image upload"
    },
    "5" : {
        "description": "listing add by admin image upload"
    },
    "6" : {
        "description": "listing services admin image upload"
    },
    "7" : {
        "description": "listing services supplier image upload"
    },
    "8" : {
        "description": "Profile picturer upload"
    }
}

const image_add    = async ( req: ExtendedRequest, res: Response ) => {

    fileUpload.image(req, res, async (err) => {
        // Check if file is set && if file has errors
        if ( req.file === undefined ) {
            if ( err === undefined ) {
                DefaultResponse.error(res, "017");
                return;
            } else {
                logger.error(err)
                DefaultResponse.error(res, "000", err.message);
                return;
            }
        }

        if (err instanceof multer.MulterError) {
            if ( err.code === "LIMIT_UNEXPECTED_FILE" ) {
                DefaultResponse.error(res, "000", 'Unexpected field ' + err.field);
                return;
            }
        } else if (err) {
            DefaultResponse.error(res, "018");
                return;
        }

        /**
         * @detail
         * Input validation (Optional)
        */

        try{

            /**
             * @detail
             * Process
             * await fileUpload.deleteFileFromS3("images/image_1698743209494.png"); // Delete file from S3
             */
            if ( req.body.resultId === undefined ) req.body.resultId = 0;

            /**
             * @detail
             * Authorization
             */
            let authData = authorize('file', 'image_add', req);
            if (!authData.status) {
                DefaultResponse.error(res, '403');
                return;
            }
            let authUserId = authData.data.user;    // Authorized user id
            let authUserRole = authData.data.role;  // Authorized user role
            

            if ( req.body.imageId == 1 && authUserRole == 1 ) { 

                
                let result  = await db.query("SELECT img_url FROM product_sub_category WHERE id = ? && status != 403", [req.body.resultId]);

                if ( !result.status ) {
                    logger.error(result); // :)3v
                    DefaultResponse.error(res, "500");
                    return;
                }

                if ( result.data.length > 0 ) {
                    // if(result.data[0].feature_image_url !== "" && result.data[0].feature_image_url !== null) {
                    //     const url = new URL(result.data[0].image_url);
                    //     const path = url.pathname;
                    //     await fileUpload.deleteFileFromS3(path.substring(1, path.length)); // Delete previous file from S3
                    // }

                    let fileUploaded = (req.file as any).location;
                    
                    result  = await db.query("UPDATE product_sub_category SET img_url = ? WHERE id = ? && status != 403", [fileUploaded, req.body.resultId]);

                    if ( !result.status ) {
                        logger.error(result); // :)3v
                        DefaultResponse.error(res, "500");
                        return;
                    }
                    DefaultResponse.success(res, "200", {
                        filename : fileUploaded
                    });
                    return;

                } else {
                    DefaultResponse.error(res, "006");
                    return;
                }


            }else {
                DefaultResponse.error(res, "006");
                return;
            }

        } catch (err){
            logger.error(err); // :)3v
            DefaultResponse.error(res, "500");
            return;
        }
    
    });

}

export default {
    image_add
}