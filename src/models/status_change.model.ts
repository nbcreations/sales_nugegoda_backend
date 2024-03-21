import DefaultResponse from '../utils/DefaultResponse';
import tableControl from '../json/tableControl.json';
import { DateTime } from 'luxon';
import db from "../config/db";
import logger from '../config/logger';

const status_change_previous_check = async (number:number, status:number, tableName: string, resultId:number, authUserId: number, authUserRole: number) => {
    if (number === 1) {
        return check_user_role(resultId);
    } else if (number === 2) {
        return listing_approve_time_change(resultId, status);
    } else if (number === 3) {
        
    }
    return DefaultResponse.errorFormat("006");
}

const status_change = async ( tableId: number, resultId:number, status:number, authUserId: number, authUserRole:number ) => {

    try {

        let tblKey = tableId.toString();
        // Check if the tblKey exists in the tableControl
        if ( !tableControl[tblKey as keyof typeof tableControl] ) {
            return DefaultResponse.errorFormat("000", "This table id does not exist");
        }
        // Check if the statusAccess exists in the tableControl[tblKey]
        if ( !tableControl[tblKey as keyof typeof tableControl]["statusAccess"] ) {
            return DefaultResponse.errorFormat("000", "This table does not have delete access");
        }
        // Check if the table exists in the tableControl[tblKey]
        if ( !tableControl[tblKey as keyof typeof tableControl]["table"] ) {
            return DefaultResponse.errorFormat("000", "No table found");
        }
        let tableName = tableControl[tblKey as keyof typeof tableControl]["table"];
        // Check if the authUserRole exists in the tableControl[tblKey]["statusAccess"]
        let roleKey = authUserRole.toString();
        let statusAccess = tableControl[tblKey as keyof typeof tableControl]["statusAccess"]
        if ( !statusAccess[roleKey as keyof typeof statusAccess ] ) {
            return DefaultResponse.errorFormat("000", "You have no delete access");
        }
        // Status access Obj
        let data = statusAccess[roleKey as keyof typeof statusAccess ];
        // Check Status Availability
        if ( data["status" as keyof typeof data ] ) {
            let statusArr = typeof data["status" as keyof typeof data] === "object" ? data["status" as keyof typeof data] as number[] : [];
            if (!statusArr.includes(status)) {
                return DefaultResponse.errorFormat("403");
            }
        }
        // Previous function call
        if ( data["check" as keyof typeof data ] ) {
            let checkNo: number = typeof data["check" as keyof typeof data] === "number" ? data["check" as keyof typeof data] as unknown as number : 0;
            let previousCheck = await status_change_previous_check(checkNo, status, tableName, resultId, authUserId, authUserRole);
            if (!previousCheck.status) {
                return previousCheck;
            }
        }

        let result = await db.query("UPDATE `"+tableName+"` SET status = ? WHERE `id`=?", [status, resultId]);
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

const listing_approve_time_change = async ( resultId: number, status: number ) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
        let result = await db.query(`UPDATE listing SET updated_time = ? WHERE id = ?`, [ currentDateTime, resultId]);
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
    status_change,
    check_user_role
}