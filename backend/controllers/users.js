const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { User } = db

router.post('/', async (req, res) => {
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({ ...req.body, passwordDigest: hashedPassword });
    res.json(user);
})


router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

module.exports = router