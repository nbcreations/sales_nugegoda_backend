export interface user_login_data {    email: string;
    password: string;
    authUserId: number;
    authUserRole: number;
}
export interface user_check_data {
    authUserId: number;
    authUserRole: number;
}