
module.exports = (sequelize, DataTypes) => {
   const User =  sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4 ,
            primaryKey:true
        },
        firstName : {
            type: DataTypes.STRING,
            allowNull : false,
        },
        lastName : {
            type: DataTypes.STRING,
            allowNull : false,
        },
        age : {
            type: DataTypes.INTEGER,
            allowNull : false,
        },
    })

    return User
}