const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");


const Staff = sequelize.define(
    "Staff",
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true,
        },
        employee_id:{
            type:DataTypes.STRING(200),
            allowNull: true,
        },
        lang_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },department: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },designation: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },
        qualification: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        work_exp: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        surname: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        father_name: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        mother_name: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        contact_no: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        emergency_contact_no: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        dob: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        marital_status: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        date_of_joining: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        date_of_leaving: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        local_address: {
            type: DataTypes.STRING(300),
            allowNull: true,
        },
        permanent_address: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        note: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING(250),
            allowNull: true,
        },
        gender: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        account_title: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        bank_account_no: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        bank_name: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        ifsc_code: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        bank_branch: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        payscale: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        basic_salary: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        epf_no: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        contract_type: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        shift: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        location: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        facebook: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        twitter: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },

        linkedin: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },

        instagram: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },

        resume: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },

        uhf_id: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },

        joining_letter: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },

        resignation_letter: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },

        other_document_name: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },

        other_document_file: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        is_active: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        verification_code: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },

        disable_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },

    },
    {
        tableName: "staff",
        timestamps: false,
    }
);
module.exports = Staff;