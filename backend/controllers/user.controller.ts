import { prisma } from "../common/prisma";
import {Request, response, Response} from "express"
import { CreateUser, User } from "../dto/users.dto";
import { userSchema } from "../common/UserValidator";
import { ValidationError } from "yup";
import bcrypt from "bcrypt"

export const createUser = async (req:Request,res:Response) =>{
    const user:CreateUser = req.body
    try {
        const parsedUser = userSchema.validateSync(user)
        const hashpassword = await bcrypt.hash(parsedUser.password,10)
        const newParty = await prisma.user.create({data:{
            ...parsedUser,password:hashpassword}
        })
        res.status(200).json({"message" : "sign up successful"})
    } catch (error) {
        res.status(400).json({"message": (error as ValidationError).message})
    }
    
}
export const login =async (req:Request,res:Response) => {
    const username = req.params.username;
    const user = await prisma.user.findUnique({ where: {username}})

    if (user === null) return res.status(404).json({ message: "don't have an account" })
    const isPasswordValid = await bcrypt.compare(req.params.password,user.password)
    if (!isPasswordValid) {
        res.status(401).json({ message: "password wrong" })
    }
    const sessionData =  await prisma.session.create({data:{userID:user.id}})
    req.session.id =  sessionData.id
    res.status(200).json({"message" : "login successful"})
    
}


export const logout =async (req:Request,res:Response) => {  
    try {
        await prisma.session.delete({where : {id: req.session.id}})
        req.session.id = ""  
        res.status(200).json({message: "logout successful"})  
    } catch (error) {
        res.status(400).json({message : "something went wrong."})
    }


}