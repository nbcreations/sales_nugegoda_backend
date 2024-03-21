export interface product_sub_category_add_data {    name: string;    imgUrl: string;    category: number;    authUserId: number;    authUserRole: number;
}
export interface product_sub_category_list_data {
    authUserId: number;
    authUserRole: number;
}
export interface product_sub_category_edit_data {
    id: number;
    name: string;
    imgUrl: string;
    category: number;
    authUserId: number;
    authUserRole: number;
}
export interface product_sub_category_view_data {
    id: number;
    authUserId: number;
    authUserRole: number;
}
export interface product_sub_category_select_data {
    category_Id: number;
    authUserId: number;
    authUserRole: number;
}
export interface product_sub_category_sales_list_data {
    category: number;
    authUserId: number;
    type: number;
    authUserRole: number;
}