import espress from 'express'
import { deleteUser, getAllUser, getOneUser, modifyUser } from '../controllers/user.js'
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js'

const router = espress.Router()

/* router.get("/checkauthentication", verifyToken, (req, res, next) => {
    console.log("hello user, hou are logged in")
    res.send("hello user, hou are logged in")
})

router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
   res.send("hello user, you are logged in and you can delete your account")
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
    res.send("hello admin, you are logged in and you can delete your account")
 }) */

// UPDATE
router.put("/:id", verifyUser, modifyUser)
// DELETE
router.delete("/:id", verifyUser, deleteUser)
// GET
router.get("/:id", verifyUser, getOneUser)
// GET ALL
router.get("/", verifyAdmin, getAllUser)

export default router