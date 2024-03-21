export interface product_add_data {    name: string;    stock: number;    price: number;    type: number;    category: number;    authUserId: number;
    authUserRole: number;
}
export interface product_category_list_data {
    authUserId: number;
    authUserRole: number;
}
export interface product_type_list_data {
    authUserId: number;
    authUserRole: number;
}
export interface product_add_data {
    name: string;
    size: string;
    color: string;
    stock: number;
    price: number;
    type: number;
    category: number;
    subCategory: number;
    authUserId: number;
    authUserRole: number;
}
export interface product_add_data {
    name: string;
    size: string;
    color: string;
    stock: number;
    price: number;
    productId: string;
    type: number;
    category: number;
    subCategory: number;
    authUserId: number;
    authUserRole: number;
}
export interface product_edit_data {
    id: number;
    size: string;
    color: string;
    name: string;
    stock: number;
    price: number;
    productId: string;
    type: number;
    category: number;
    subCategory: number;
    authUserId: number;
    authUserRole: number;
}
export interface product_list_data {
    authUserId: number;
    authUserRole: number;
}
export interface product_view_data {
    id: number;
    authUserId: number;
    authUserRole: number;
}
export interface product_sales_list_data {
    sub_category: number;
    authUserId: number;
    type: number;
    authUserRole: number;
}