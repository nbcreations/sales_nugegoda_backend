export interface card_discount_add_data {    bank: number;    cardType: number;    discountType: number;
    amount: number;
    validDateStart: string;
    validDateEnd: string;
    authUserId: number;
    authUserRole: number;
}
export interface card_discount_edit_data {
    id: number;
    bank: number;
    cardType: number;
    discountType: number;
    amount: number;
    validDateStart: string;
    validDateEnd: string;
    authUserId: number;
    authUserRole: number;
}
export interface card_discount_view_data {
    id: number;
    authUserId: number;
    authUserRole: number;
}
export interface card_discount_list_data {
    authUserId: number;
    authUserRole: number;
}