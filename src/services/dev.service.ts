import dev from "../models/dev.model";
import DefaultResponse from "../utils/DefaultResponse";
import {sql_run_data} from "../config/types/dev";

const sql_run = async ( data: sql_run_data ) => {

    try {

        let result;
        result = await dev.sql_run( data.query );
        return result;

    } catch (err) {
        console.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

export default { 
    sql_run
}