import { User } from "../models/user.model.js"
import { Blog } from "../models/blog.model.js"
const  getAllUsers =async (req,res)=>{
    try{
const users=await User.find({},{password:0})
console.log(users)
if(!users || users.length===0){
    return res.status(404).json({message:"No Users Found "})
}
    return res.status(200).json(users)
    }
    catch(err){
console.log(err)
    }
}


// delete user by id controller that mention in admin user delete routes
export const deleteUser = async (req, res) => {
    const { id } = req.params;  // <-- yaha se sidha id mil jaayegi

    try {
        const user = await User.findByIdAndDelete(id);  // <-- id directly pass karni hai
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


// update user by id controller that mention in admin user update routes
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { firstName, email, isAdmin } = req.body;

    try {
        const user = await User.findByIdAndUpdate(id, { firstName, email, isAdmin }, { new: true });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


// delete blog by id controller that mention in admin blog delete routes
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;  // URL se id le lo

    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    res.status(200).json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export default getAllUsers