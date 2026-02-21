const SIGNUP = require('../models/signup')
const bcrypt = require("bcrypt")

async function signup(req, res) {
    try {
        const { username, email, password, contact } = req.body

        console.log(req.body)

        if (!username || !email || !password || !contact) {
            return res.status(400).json({ message: "Please fill all required fields" })
        }

        const imagePath = req.file ? `/uploads/${req.file.filename}` : '';

        const existingUser = await SIGNUP.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" })
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" })
        }

        const hashpassword = await bcrypt.hash(password, 10)

        const CreateUserData = await SIGNUP.create({
            username,
            email,
            password: hashpassword,
            contact,
            image: imagePath
        })

        res.status(201).json({
            message: "Signup successful",
            user: CreateUserData
        })

    } catch (err) {
        console.log(err.message)
        res.status(500).json({ error: err.message })
    }
}

module.exports = signup
