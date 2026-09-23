const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const StaffRole = sequelize.define(
    "StaffRole",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        role_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        staff_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        is_active: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },

        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },

        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },
    {
        tableName: "staff_roles",
        timestamps: false
    }
);

module.exports = StaffRole;