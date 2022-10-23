import { Category } from "@prisma/client";

export interface Activity{
    name:string; 
    img_url:string;
    category: Category;
}

export interface Thrumbnail{
    name:string;
    img_url :string;
}