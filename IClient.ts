export interface IClient {
    id: number;
    name: string;
    document: string;
    zipCode: string;
    phone: string;
    email: string;
}

export interface IClientListFilters {
    name?: string;
    document?: string;
}