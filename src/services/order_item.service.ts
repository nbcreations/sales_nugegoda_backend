import orderItem from "../models/order_item.model";
import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {order_item_add_data} from "../config/types/order_item";

const order_item_add = async ( data: order_item_add_data ) => {

    try {

        let result;
        result = await orderItem.order_item_add( data.orderId, data.product, data.price, data.qty, data.authUserId );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

export default {
    order_item_add
}