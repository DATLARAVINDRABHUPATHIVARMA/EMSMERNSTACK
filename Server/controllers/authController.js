import jwt from 'jsonwebtoken';
import User from './models/User.js';
import bcrypt from 'bcrypt';

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({ success: false, error: 'User Not Found' })
        }
        
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            res.status(400).json({ success: false, error: 'Wrong Password' })
        }

        const token = jwt.sign({_id: user._id, role: user.role}, process.env.JWT_SECRET, { expiresIn: '1h' })

    } catch (error) {
        console.log(error.message)
    }
}

export {login}