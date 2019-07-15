export class User {
    id: any;
    userName: string;
    email: string;
    userRole: string;
    profileImage: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
}

export interface User {
    name: string;
    email: string;
    phone: string;
    company: {
        name: string;
    }
}