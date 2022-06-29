const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const { where } = require('sequelize/types')

const { User } = db

router.get('/profile', async (req, res) => {try {
    let user = await user.findOne({
   where: {
    userId:
}
}) 
res.json(user)
} catch {
    res.json(null)
}
})




module.exports = router
