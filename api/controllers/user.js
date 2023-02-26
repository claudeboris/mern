import User from "../models/User.js"

export const modifyUser = async (req, res, next) => {
    console.log( {...req.body})
    await User.updateOne({_id: req.params.id}, {...req.body})
               .then(() => res.status(200).json({message: "User modifié"}))
               .catch(error => next(error))
}

export const deleteUser = async (req, res, next) => {
    await User.deleteOne({_id: req.params.id})
               .then(() => res.status(200).json({message: "User supprimé"}))
                .catch(error => next(error))
}

export const getOneUser = async (req, res, next) => {
    await User.findOne({_id: req.params.id})
               .then((User) => res.status(200).json(User))
               .catch(error => next(error))
}

export const getAllUser = async (req, res, next) => {
    await User.find()
               .then((Users) => res.status(200).json(Users))
               .catch(error => next(error))
}