const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const { where } = require('sequelize/types')

const { User } = db

router.post('/', async (req, res) => {
    let user = await user.findOne({
   where: { email :req.body.email}
})
 console.log(User)
})
module.exports = router
