import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';

const card_discount_add = async ( bank: number, cardType: number, discountType: number, amount: number, validDateStart: string, validDateEnd: string, authUserId: number ) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
    
        let result = await db.query('INSERT INTO `card_discount`(bank, card_type, discount_type, amount, valid_date_start, valid_date_end, status, added_by, added_time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [bank, cardType, discountType, amount, validDateStart, validDateEnd, 1, authUserId, currentDateTime]);

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

const card_discount_edit = async ( bank: number, cardType: number, discountType: number, amount: number, validDateStart: string, validDateEnd: string, authUserId: number, id: number ) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
    
        let result = await db.query('UPDATE `card_discount` SET bank = ?, card_type = ?, discount_type = ?, amount = ?, valid_date_start = ?, valid_date_end = ?, updated_by = ?, updated_time = ? WHERE id = ? ', [bank, cardType, discountType, amount, validDateStart, validDateEnd, authUserId, currentDateTime, id]);

        if (result.status) {
            return DefaultResponse.successFormat("200");
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const card_discount_list = async (  ) => {

    try {

        let result = await db.query(`SELECT card_discount.id, card_discount.bank, card_discount.card_type, card_discount.discount_type, card_discount.amount, card_discount.valid_date_start, card_discount.valid_date_end, card_discount.status, card_discount.added_by, card_discount.added_time, card_discount.updated_by, card_discount.updated_time, bank.name as bank_name
        FROM
        card_discount
        INNER JOIN bank ON bank.id = card_discount.bank
        ORDER BY card_discount.id DESC`, [ ]);
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const card_discount_view = async ( id: number ) => {

    try {

        let result = await db.query(`SELECT card_discount.id, card_discount.bank, card_discount.card_type, card_discount.discount_type, card_discount.amount, card_discount.valid_date_start, card_discount.valid_date_end, card_discount.status, card_discount.added_by, card_discount.added_time, card_discount.updated_by, card_discount.updated_time, bank.name as bank_name
        FROM card_discount
        INNER JOIN bank ON bank.id = card_discount.bank
        WHERE card_discount.id = ? `, [ id]);
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

export default {
    card_discount_add,
    card_discount_edit,
    card_discount_list,
    card_discount_view
}