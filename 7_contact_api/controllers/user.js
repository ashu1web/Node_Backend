import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'


export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            res.json({
                success: false,
                message: "Every field is mandatory",
            })
        }
        const existinguser = await User.findOne({ email })

        if (existinguser) {
            res.json({
                success: false,
                message: "User already registered",
            })
        }

        const hashpassword = await bcrypt.hash(password, 10);

        const newuser = await User.create({ name, email, password: hashpassword })

        res.json({
            success: true,
            message: "New user registered",
            data: newuser,
        })
    } catch (e) {
        console.log("Error in register user-->", e)
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.json({
                success: false,
                message: "Enter proper details"
            })
        }

        const user = await User.findOne({ email })
        if (!user) {
            res.json({
                success: false,
                message: "No such user exists"
            })
        }

        const validPass = await bcrypt.compare(password, user.password)
        if (!validPass) {
            res.json({
                success: false,
                message: "Invalid password"
            })
        }

        let token = jwt.sign({ userID: user._id }, '1234#$##@3^%',{
            expiresIn:'1d'
        });

        res.json({
            success: true,
            message: `Welcome back ${user.name} you are logged In`,
            token:token
        })
    } catch (e) {
        console.log("Error in login user--->", e)
    }
}