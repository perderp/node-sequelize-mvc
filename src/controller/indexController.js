const { user } = require('../model/');
const db = require('../model/')

//User Model 
const User = db.user

const viewData = async(req, res) => {
    let data = await User.findAll();
    res.render('index', {data :data})

}

const sendData = async (req, res) => {
    let data = {
        firstName : req.body.first,
        lastName : req.body.last,
        age:  req.body.age,
    } 
    const userInfo = await User.create(data)
    res.status(200).redirect('/viewData')

    return userInfo
}

const updateData = async (req, res) => {
    const userInfo = await User.update({
        firstName : req.body.first,
        lastName: req.body.last,
        age:  req.body.age,
    },{
        where:{
            id: req.body.id
        }
    })

    res.status(200).redirect('/viewData')
    return userInfo
}

const updateView = async (req, res) => {
    let userInfo = await User.findByPk(req.params.id)
    res.render('update', {id: userInfo.id,firstName: userInfo.firstName, lastName: userInfo.lastName, age: userInfo.age})
}

const deleteData = async (req, res) => {
    const userInfo = await User.destroy({
        where:{
            id: req.params.id
        }
    });
    res.status(200).redirect('/viewData')
    return userInfo
}


module.exports = {
    sendData,
    viewData,
    deleteData,
    updateData,
    updateView,
}