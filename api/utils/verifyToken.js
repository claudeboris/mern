import jwt from 'jsonwebtoken'
import { createError } from '../utils/error.js'

export const verifyToken =  (req, res, next) => {
    const token = req.cookies.access_token
    if(!token) {
        return next(createError(401, "You are not authenticated"))
    }
    jwt.verify(token, 'RANDOM_TOKEN_SECRET', (error, user) => {
        if(error) return next(createError(401, "Token is not valide !"))
        req.user = user
        next()
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
          next();
        } else {
          return next(createError(403, "You are not authorized!"));
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.isAdmin) {
          console.log(req.user.isAdmin)
          next();
        } else {
          return next(createError(403, "You are not authorized!"));
        }
    })
}