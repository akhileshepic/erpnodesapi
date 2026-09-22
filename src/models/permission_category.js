const {DataTypes} = require("sequelize");
const sequelize  = require("../config/database");
 

const PermissionCategory = sequelize.define(
    "PermissionCategory",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        perm_group_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        name:{
           type:DataTypes.STRING,
           allowNull:true, 
        },
        short_code:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        enable_view:{
           type:DataTypes.INTEGER,
           allowNull:true,
           defaultValue:0,
        },
        enable_add:{
           type:DataTypes.INTEGER,
           allowNull:true,
           defaultValue:0,
        },
        enable_edit:{
           type:DataTypes.INTEGER,
           allowNull:true,
           defaultValue:0,
        },
        enable_delete:{
           type:DataTypes.INTEGER,
           allowNull:true,
           defaultValue:0,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },

    },
    {
        tableName: "permission_category",
        timestamps: false,
    }
)

module.exports=PermissionCategory;

