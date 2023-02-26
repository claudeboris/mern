import espress from 'express'
import { createRoom, deleteRoom, getAllRoom, getOneRoom, updateRoom } from '../controllers/room.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = espress.Router()

// CREATE
router.post("/:hotelid", verifyAdmin, createRoom)
// UPDATE
router.put("/:id", verifyAdmin, updateRoom)
// DELETE
router.delete("/:id", verifyAdmin, deleteRoom)
// GET
router.get("/:id", getOneRoom)
// GET ALL
router.get("/", getAllRoom)

export default router