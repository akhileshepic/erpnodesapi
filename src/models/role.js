const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Role = sequelize.define(
    "Role",
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

        slug: {
            type: DataTypes.STRING(150),
            allowNull: true,
        },

        is_active: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },

        is_system: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },

        is_superadmin: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },

        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },

        updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        tableName: "roles",
        timestamps: false,
    }
);

module.exports = Role;