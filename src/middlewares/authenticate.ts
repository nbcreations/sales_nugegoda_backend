import DefaultResponse from '../utils/DefaultResponse';
import { Response, NextFunction, Request } from 'express';
import { ExtendedRequest } from '../config/types';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import db from "../config/db";


const authenticate = async (req: ExtendedRequest, res: Response, next: NextFunction) => {
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) { // 'Bearer' with capital 'B'
            const token = req.headers.authorization.split(' ')[1];

            if (token == null) {
                DefaultResponse.error(res, '401');
                return;
            }

            const check = new Promise<{ status: boolean; data?: any }>((resolve) => {
                jwt.verify(token, config.jwt_access_key, (err: any, data: any) => {
                    if (err) {
                        resolve({
                            status: false,
                        });
                    } else {
                        resolve({
                            status: true,
                            data: data,
                        });
                    }
                });
            });

            const data = await check;

            if (!data.status) {
                DefaultResponse.error(res, '401');
                return;
            }

            // Get data and check user is true
            const result = await db.query(
                `
                SELECT user.password
                FROM user
                WHERE user.status = 1 && user.id = ? && user.role = ?`,
                [data.data.user, data.data.role]
            );

            if (!result.status) {
                DefaultResponse.error(res, '500');
                return;
            }

            if (!result.data || result.data.length === 0) {
                DefaultResponse.error(res, '403');
                return;
            }

            data.data.name = result.data[0].name;
            data.data.auth = result.data[0].auth;

            req.authorization = {
                data,
            };
            next();
        } else {
            DefaultResponse.error(res, '401');
        }
    } catch (err) {
        return DefaultResponse.error(res, '500');
    }
};

export {
    authenticate
};
