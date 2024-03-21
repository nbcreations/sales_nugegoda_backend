import orderPayment from "../models/order_payment.model";
import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {order_payment_add_data, order_payment_history_data} from "../config/types/order_payment";

const order_payment_add = async ( data: order_payment_add_data ) => {

    try {

        let result;
        result = await orderPayment.order_payment_add( data.orderId, data.amount, data.type, data.authUserId );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const order_payment_history = async ( data: order_payment_history_data ) => {

    try {

        let result;
        result = await orderPayment.order_payment_history( data.orderId );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

export default {
    order_payment_add,
    order_payment_history
}