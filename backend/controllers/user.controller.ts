import { prisma } from "../common/prisma";
import { Request, response, Response } from "express";
import { CreateUser, User } from "../dto/users.dto";
import { loginSchema, userSchema } from "../common/UserValidator";
import { ValidationError } from "yup";
import bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response) => {
    try {
        console.log("hello");
        const user: CreateUser = req.body;
        const parsedUser = userSchema.validateSync(user);
        console.log(parsedUser);
        const hashpassword = await bcrypt.hash(parsedUser.password, 10);
        const newParty = await prisma.user.create({
            data: {
                ...parsedUser,
                password: hashpassword,
            },
        });
        res.status(200).json({ message: "sign up successful" });
    } catch (error) {
        res.status(400).json({ message: (error as ValidationError).message });
    }
};
export const login = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const parsedUser = loginSchema.validateSync(data);
        const username = parsedUser.username;
        const user = await prisma.user.findUnique({ where: { username } });
        console.log(user);
        if (user === null) return res.status(404).json({ message: "Account With this Username doesn't exist" });
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: "Wrong Password!!" });
            return;
        }
        const sessionData = await prisma.session.create({
            data: { userID: user.id },
        });
        res.cookie("token", sessionData.id, {
            expires: new Date(Date.now() + 9000000000000),
            httpOnly: true,
            secure: true,
            sameSite: "none",
        });
        res.status(200).json({ message: "Login Successful" });
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

export const userBio = async (req: Request, res: Response) => {
    try {
        console.log(req.cookies.token);

        const session = await prisma.session.findUnique({
            where: { id: req.cookies.token },
            include: {
                user: true,
            },
        });
        if (session == null || session == undefined) {
            res.status(401).json({ message: "session error" });
            return;
        }
        res.status(200).json(session.user.username);
    } catch (error) {
        console.log(error);

        res.status(400).json({ message: error });
    }
};
export const logout = async (req: Request, res: Response) => {
    try {
        await prisma.session.delete({ where: { id: req.cookies.token } });
        res.cookie("token", "", {
            expires: new Date(Date.now() + 9000000000000),
            httpOnly: true,
            secure: true,
            sameSite: "none",
        });
        res.status(200).json({ message: "logout successful" });
    } catch (error) {
        res.status(400).json({ message: "something went wrong." });
    }
};
