export interface bank_add_data {    name: string;    authUserId: number;    authUserRole: number;}
export interface bank_edit_data {
    id: number;
    name: string;
    authUserId: number;
    authUserRole: number;
}
export interface bank_view_data {
    id: number;
    authUserId: number;
    authUserRole: number;
}
export interface bank_list_data {
    authUserId: number;
    authUserRole: number;
}
export interface bank_active_list_data {
    authUserId: number;
    authUserRole: number;
}