import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const user = new User({
            ...req.body,
           password: hash
        })
        await user.save()
        console.log(user)
        res.status(200).send("User has been created")
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return next(createError(404, "User not found!"));
        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
          );
        if (!isPasswordCorrect) return next(createError(400, "Wrong password or username!"));
        const token = jwt.sign( {id: user._id, isAdmin: user.isAdmin},'RANDOM_TOKEN_SECRET',{expiresIn: '24h'}) 
        const {password, isAdmin, ...OtherDetails} = user._doc
        res.cookie("access_token", token, {httpOnly: true})
           .status(200)
           .json({...OtherDetails})
    } catch (error) {
        next(error)
    }
}