import { prisma } from "../common/prisma";
import {Request, Response} from "express"
import { Category } from "@prisma/client";


export const getActivityCards = async (req: Request, res: Response) => {
    const category = req.query.category as string | null
    if (category==null){
        const activity = await prisma.activity.findMany()
        res.status(200).json(activity)
    }
    else if (category in Category){
        const activity = await prisma.activity.findMany({where: {category:category as Category} })
        res.status(200).json(activity)
    }
    else{
        res.status(404).json({message :"Not found"})
    }
}