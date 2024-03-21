import orderBill from "../models/order_bill.model";
import product from "../models/product.model";
import orderItem from "../models/order_item.model";
import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {order_bill_add_data, order_bill_list_data, order_bill_view_data, order_bill_to_pay_list_data} from "../config/types/order_bill";

const order_bill_add = async ( data: order_bill_add_data ) => {

    try {

        let result;
        let error = '';
        // Item validation
        await Promise.all(data.items.map(async (obj, index) => {
            result = await product.product_status_check(obj.id);
            if(!result){
                error = `Item "${obj.product_id}" is not available`;
            }
            result = await product.product_stock_check(obj.id, obj.quantity);
            if(!result){
                error = `Item "${obj.product_id}" quantity is not available`;
            }
            return obj;
        }));
        if (error !== "") {
            return DefaultResponse.errorFormat("000", error);
        }

        // Order bill add
        result = await orderBill.order_bill_add( data.date, data.customerName, data.email, data.phone, data.address, data.authUserId );
        if(!result.status) {
            return result;
        }
        let orderBillId = result.data.insertId;

        // Order items add
        await Promise.all(data.items.map(async (obj, index) => {
            result = await orderItem.order_item_add(orderBillId, obj.id, obj.price, obj.quantity, data.authUserId);
            if(result.status){
                await product.product_stock_decrease(obj.quantity, obj.id)
            }
            return obj;
        }));

        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const order_bill_list = async ( data: order_bill_list_data ) => {

    try {

        let result;
        result = await orderBill.order_bill_list(  );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const order_bill_view = async ( data: order_bill_view_data ) => {

    try {

        let result;
        result = await orderBill.order_bill_view( data.id );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const order_bill_to_pay_list = async ( data: order_bill_to_pay_list_data ) => {

    try {

        let result;
        result = await orderBill.order_bill_to_pay_list(  );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

export default {
    order_bill_add,
    order_bill_list,
    order_bill_view,
    order_bill_to_pay_list
}