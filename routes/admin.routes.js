import express from "express"
import getAllUsers from "../controller/admin.controller.js"
import { getAllBlogs } from "../controller/blog.controller.js"
import { isAuthenticated } from "../middleware/isAuthenticated.js"
import adminMiddleware from "../middleware/admin.middleware.js"
import { deleteUser } from "../controller/admin.controller.js"
import { deleteBlog } from "../controller/admin.controller.js"
import { updateUser } from "../controller/admin.controller.js"
const router =express.Router()

router.route('/users').get(isAuthenticated,adminMiddleware,getAllUsers)
// user delete routes
 router.route('/users/:id').delete(isAuthenticated,adminMiddleware,deleteUser)
 //user update routes
router.route('/users/update/:id').put(isAuthenticated,adminMiddleware,updateUser)
router.route('/blogs').get(isAuthenticated,adminMiddleware,getAllBlogs)
// blog delete route
router.route('/blogs/:id').delete(isAuthenticated,adminMiddleware,deleteBlog)
export default router