import { RolesEnum } from "../../shared/roles.enum";

export class User{
    id: number;
    name: string;
    joinDate: Date;
    active: boolean;
    role: RolesEnum;
}