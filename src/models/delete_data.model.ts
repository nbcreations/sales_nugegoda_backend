import DefaultResponse from '../utils/DefaultResponse';
import tableControl from '../json/tableControl.json';
import db from "../config/db";
import logger from '../config/logger';
import product from './product.model';

const delete_data_previous_check = async (number:number, tableName: string, resultId:number, authUserId: number, authUserRole: number) => {
    if (number === 1) {
        return check_user_role(resultId);
    } else if (number === 2) {
        return update_stock(resultId);
    } else if (number === 3) {
        
    }
    return DefaultResponse.errorFormat("006");
}


const delete_data = async ( tableId: number, resultId:number, authUserId: number, authUserRole:number ) => {

    try {

        let tblKey = tableId.toString();
        // Check if the tblKey exists in the tableControl
        if ( !tableControl[tblKey as keyof typeof tableControl] ) {
            return DefaultResponse.errorFormat("000", "This table id does not exist");
        }
        // Check if the deleteAccess exists in the tableControl[tblKey]
        if ( !tableControl[tblKey as keyof typeof tableControl]["deleteAccess"] ) {
            return DefaultResponse.errorFormat("000", "This table does not have delete access");
        }
        // Check if the table exists in the tableControl[tblKey]
        if ( !tableControl[tblKey as keyof typeof tableControl]["table"] ) {
            return DefaultResponse.errorFormat("000", "No table found");
        }
        let tableName = tableControl[tblKey as keyof typeof tableControl]["table"];
        // Check if the authUserRole exists in the tableControl[tblKey]["deleteAccess"]
        let roleKey = authUserRole.toString();
        let deleteAccess = tableControl[tblKey as keyof typeof tableControl]["deleteAccess"]
        if ( !deleteAccess[roleKey as keyof typeof deleteAccess ] ) {
            return DefaultResponse.errorFormat("000", "You have no delete access");
        }
        // Previous function call
        let data = deleteAccess[roleKey as keyof typeof deleteAccess ];
        if ( data["check" as keyof typeof data ] ) {
            let checkNo = data["check" as keyof typeof data ];
            let previousCheck = await delete_data_previous_check(checkNo, tableName, resultId, authUserId, authUserRole);
            if (!previousCheck.status) {
                return previousCheck;
            }
        }

        let result  = await db.query("DELETE FROM `"+tableName+"` WHERE `id`=?", [resultId]);
        if(!result.status) {
            result = await db.query("UPDATE `"+tableName+"` SET status = 2 WHERE `id`=?", [resultId]);
            return DefaultResponse.successFormat("222");
        }
        if(result.status) {
            return DefaultResponse.successFormat("200");
        }
        return result;


    } catch ( err ) {
        logger.error( err );
        DefaultResponse.errorFormat("500");
    }
    
};

const check_user_role = async ( resultId: number ) => {

    try {

        let result = await db.query(`SELECT user.id FROM user WHERE (role = ? || role = ?) && id = ? `, [ 2, 3, resultId]);
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
const update_stock = async ( resultId: number ) => {

    try {

        let result = await db.query(`SELECT product, qty FROM order_item WHERE order_id = ? `, [resultId]);
        if (!result.status) {
            return result;
        }
        if(result.data.length === 0) {
            return DefaultResponse.errorFormat("200");
        }
        await Promise.all(result.data.map(async (obj:{product:number, qty:number}) => {
            result = await product.product_stock_increase(obj.qty, obj.product);
            return obj;
        }));
        return DefaultResponse.successFormat("200");

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

export default {
    delete_data,
    check_user_role
}