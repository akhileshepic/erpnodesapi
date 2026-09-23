const {Staff, StaffRole} = require("../models/index")
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");  

const create = async (req, res) => {
    try {
        const {
            employee_id,
            password,
            role_id,
            ...data
        } = req.body;

        // Check employee
        const checkstaff = await Staff.findOne({
            where: { employee_id }
        });

        if (checkstaff) {
            return res.status(409).json({
                success: false,
                message: "Employee ID already exists"
            });
        }


        // Password hash
        const hashedPassword = await bcrypt.hash(password, 10);


        // First create staff
        const staff = await Staff.create({
            ...data,
            employee_id,
            password: hashedPassword,
            image: req.file.filename
        });


        // File extension
        const ext = path.extname(req.file.originalname);


        // New name
        const newName = `staff_${staff.id}${ext}`;


        // Old file
        const oldPath = req.file.path;


        // New file
        const newPath = path.join(
            path.dirname(oldPath),
            newName
        );


        // Rename
        fs.renameSync(oldPath, newPath);


        // Update image name
        await staff.update({
            image: newName
        });
        // =================================
        // ASSIGN STAFF ROLE
        // =================================

        const staffRole = await StaffRole.create({

            staff_id: staff.id,

            role_id: role_id,

            is_active: 1

        });

        // Remove password from response
        const result = staff.toJSON();

        delete result.password;


        return res.status(201).json({
            success: true,
            message: "Staff created successfully",
            data: result
        });


    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

const getall = async (req,res) =>{
    try {
        const staff = await Staff.findAll({ order : [['id','DESC']]})
        const data = staff.map(item => {

            const staffData = item.toJSON();

            delete staffData.password;

            return staffData;
        });
        return res.status(200).json({
            success: true,
            data:data,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
// GET BY ID
const getStaffById = async (req, res) => {
    try {
        const staff = await Staff.findByPk(req.params.id);
        const result = staff.toJSON();
        delete result.password;
        if (!staff) {
            return res.status(404).json({
                success: false,
                message: "Staff not found",
            });
        }
        return res.status(200).json({
            success: true,
            data: result,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const updateStaff = async (req, res) => {
    try {

        const staff = await Staff.findByPk(req.params.id);
      
        if (!staff) {
            return res.status(404).json({
                success: false,
                message: "Staff not found",
            });
        }
        console.log(req.body);
        await staff.update(req.body);

        return res.status(200).json({
            success: true,
            message: "Staff updated successfully",
            data: staff,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


module.exports={create,getall,getStaffById,updateStaff}