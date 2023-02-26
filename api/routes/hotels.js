import espress from 'express'
import { createHotel, deleteHotel, getAllHotel, getOneHotel, modifyHotel } from '../controllers/hotel.js'
import Hotel from '../models/Hotel.js'
import { createError } from '../utils/error.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = espress.Router()

// CREATE
router.post("/", verifyAdmin, createHotel)
// UPDATE
router.put("/:id", verifyAdmin, modifyHotel)
// DELETE
router.delete("/:id", verifyAdmin, deleteHotel)
// GET
router.get("/:id", getOneHotel)
// GET ALL
router.get("/", getAllHotel)

export default router