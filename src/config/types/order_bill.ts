interface order_bill_items {    id: number;    name: string;    price: number;
    quantity: number;
    product_id: string;
}
export interface order_bill_add_data {
    date: string;
    customerName: string;
    email: string;
    phone: string;
    address: string;
    authUserId: number;
    authUserRole: number;
    items: order_bill_items[];
}
export interface order_bill_list_data {
    authUserId: number;
    authUserRole: number;
}
export interface order_bill_view_data {
    id: number;
    authUserId: number;
    authUserRole: number;
}
export interface order_bill_to_pay_list_data {
    authUserId: number;
    authUserRole: number;
}