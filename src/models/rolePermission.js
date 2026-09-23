const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const RolePermission = sequelize.define(
    "RolePermission",
    {
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        role_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        perm_cat_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        can_view: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },

        can_add: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },

        can_edit: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },

        can_delete: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },

        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName:"roles_permissions",
          timestamps: false,
    }
);
module.exports = RolePermission