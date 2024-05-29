import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';

const bank_add = async ( name: string, authUserId: number ) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
    
        let result = await db.query('INSERT INTO `bank`(name, status, added_by, added_time) VALUES (?, ?, ?, ?)', [name, 1, authUserId, currentDateTime]);

        if (result.status) {
            return DefaultResponse.successFormat("200", {
                insertId: result.data.insertId
            });
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const bank_edit = async ( name: string, authUserId: number, id: number ) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
    
        let result = await db.query('UPDATE `bank` SET name = ?, updated_by = ?, updated_time = ? WHERE id = ? ', [name, authUserId, currentDateTime, id]);

        if (result.status) {
            return DefaultResponse.successFormat("200");
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const bank_list = async (  ) => {

    try {

        let result = await db.query(`SELECT bank.id, bank.name, bank.status, bank.added_by, bank.added_time, bank.updated_by, bank.updated_time
        FROM bank ORDER BY bank.id DESC`, [ ]);
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const bank_view = async ( id: number ) => {

    try {

        let result = await db.query(`SELECT bank.id, bank.name, bank.status, bank.added_by, bank.added_time, bank.updated_by, bank.updated_time
        FROM bank
        WHERE bank.id = ? `, [ id]);
        if (!result.status) {
            return result;
        }
        if(result.data.length === 0) {
            return DefaultResponse.errorFormat("404");
        }
        return DefaultResponse.successFormat("200", result.data[0]);

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const bank_active_list = async (  ) => {

    try {

        let result = await db.query(`SELECT bank.id, bank.name
        FROM bank
        WHERE bank.status = ?  ORDER BY bank.name ASC`, [ 1]);
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

export default {
    bank_add,
    bank_edit,
    bank_list,
    bank_view,
    bank_active_list
}