import Hotel from "../models/Hotel.js"

export const createHotel = async (req, res, next) => {
    const hotel = new Hotel({...req.body})
    await hotel.save()
               .then(() => res.status(200).json({message: "Hotel enregistré"}))
               .catch(error => next(error))
}

export const modifyHotel = async (req, res, next) => {
    //console.log( {...req.body})
    await Hotel.updateOne({_id: req.params.id}, {...req.body})
               .then(() => res.status(200).json({message: "Hotel modifié"}))
               .catch(error => next(error))
}

export const deleteHotel = async (req, res, next) => {
    await Hotel.deleteOne({_id: req.params.id})
               .then(() => res.status(200).json({message: "Hotel supprimé"}))
                .catch(error => next(error))
}

export const getOneHotel = async (req, res, next) => {
    await Hotel.findOne({_id: req.params.id})
               .then((hotel) => res.status(200).json(hotel))
               .catch(error => next(error))
}

export const getAllHotel = async (req, res, next) => {
    await Hotel.find()
               .then((hotels) => res.status(200).json(hotels))
               .catch(error => next(error))
}