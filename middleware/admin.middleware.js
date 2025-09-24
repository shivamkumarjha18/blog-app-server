const adminMiddleware = async (req, res, next) => {
    const user = req.user;
    const adminRole=req.user.isAdmin
    if (adminRole) {
        next();
    } else {
        res.status(403).json({ message: "Access denied. Admins only." });
    }
};

export default adminMiddleware;
