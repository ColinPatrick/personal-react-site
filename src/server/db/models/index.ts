export interface UsersTable {
    id?: number;
    email?: string;
    password?: string;
    role?: string;
    _created?: Date;
};

export interface MysqlResponse {
    affectedRows?: number;
    insertId?: number;
};