export interface order_payment_add_data {    orderId: number;
    amount: number;
    type: number;
    authUserId: number;
    authUserRole: number;
}
export interface order_payment_history_data {
    orderId: number;
    authUserId: number;
    authUserRole: number;
}