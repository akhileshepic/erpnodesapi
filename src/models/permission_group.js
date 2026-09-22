const {DataTypes} = require("sequelize");
const sequelize  = require("../config/database");

const PermissionGroup = sequelize.define(
     "PermissionGroup",
     {
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        name: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },

        short_code: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

        is_active: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },

        system: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        tableName: "permission_group",
        timestamps: false,
    
    }
)

module.exports = PermissionGroup;