import bcrypt from "bcrypt";
import config from './../config/config';
import jwt from 'jsonwebtoken';
import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';

const user_login = async ( email:string, password:string ) => {

    password = await bcrypt.hash( password, config.pass_salt ); // Hash the password
    
    let result  = await db.query('SELECT user.id, user.role FROM user WHERE user.email = ? && user.password = ? && user.status = 1', [email, password]);

    // If error in sql query
    if ( !result.status ) {
        return result;
    }

    // If wrong password
    if ( result.data.length === 0 ) {
        return DefaultResponse.errorFormat('001')
    }

    const accessToken = jwt.sign(
        { user: result.data[0].id, role: result.data[0].role },
        config.jwt_access_key,
        {
            expiresIn: parseInt(config.jwt_a_max_age),
        }
    );

    return DefaultResponse.successFormat("200", {
        accessToken: accessToken,
        role: result.data[0].role
    });

};

export default {
    user_login
}