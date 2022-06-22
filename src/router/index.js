const express = require('express')
const router = express.Router()
const {viewData, sendData, deleteData, updateView, updateData} = require('../controller/indexController')


router.get('/viewData', viewData)
router.post('/sendData', sendData)
router.get('/delete/:id', deleteData)
router.route('/update/:id')
    .get(updateView)
    .post(updateData)

module.exports = router