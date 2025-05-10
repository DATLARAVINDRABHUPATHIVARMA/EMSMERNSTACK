const verifyUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split('')[1];
        if (!token) {
            return res.status(404).json({ success: false, error: "Token not provided" });
        }
    } catch (error) {
        
    }
}