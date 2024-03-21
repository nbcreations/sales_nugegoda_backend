import { PoolConnection } from 'mysql2';
import config from './config';
import mysql2 from 'mysql2/promise'; // Use the promise-based API

const pool = mysql2.createPool({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
});

const query = async (sql: string, params: any[]) => {

    let responseBody: { status: boolean; message?: string, data?: any } = {
        status: true
    };

    try {

        const connection = await pool.getConnection();
        try {
            const results = await connection.execute(sql, params);
            responseBody.data = results[0];
            return responseBody;
        } catch (queryErr) {
            responseBody.status = false;
            let queryErrObj = typeof queryErr === "object" && queryErr!== null  ? queryErr : {errNo:0};
            let errNo = queryErrObj['errno' as keyof typeof queryErrObj];
            if(errNo === 1062){
                const sqlMessage = queryErrObj['sqlMessage' as keyof typeof queryErrObj];
                const columnName = /for key '(\w+)'/.exec(sqlMessage)?.[1] || "";
                responseBody.message = `This "${columnName}" is already exists`;
                return responseBody;
            }
            
            console.error('Error executing query', queryErr);
            responseBody.message = 'Something went wrong';
            return responseBody;
        } finally {
            connection.release(); // Always release the connection, even if an error occurred
        }

    } catch (err) {

        console.error('Error getting database connection', err);
        responseBody.status = false;
        responseBody.message = 'Something went wrong';
        return responseBody;

    }

};

export default { query };
