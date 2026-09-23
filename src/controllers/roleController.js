const Role = require("../models/role");

const create = async (req,res) =>{
    try {
         const {
            name,
            slug,
            is_active,
            is_system,
            is_superadmin
        } = req.body;

          const existingRole = await Role.findOne({
            where:{slug:slug}
          })
           if (existingRole) {
            return res.status(409).json({
                success: false,
                message: "Role slug already exists"
            });
        }
         const role = await Role.create({
            name: name,
            slug: slug,
            is_active: is_active ?? 0,
            is_system: is_system ?? 0,
            is_superadmin: is_superadmin ?? 0,
            created_at: new Date()
        });


        return res.status(201).json({
            success: true,
            message: "Role created successfully",
            data: role
        });
    } catch (error) {
         return res.status(500).json({
            success: false,
            message: "Failed to create role",
            error: error.message
        });
    }
}

const getAll = async (req,res) => {
    try {
        const roles = await Role.findAll({  
            order: [
                ["id", "DESC"]
            ]})
        return res.status(200).json({
            success: true,
            count: roles.length,
            data: roles
        });
    } catch (error) {
          return res.status(500).json({
            success: false,
            message: "Failed to fetch roles",
            error: error.message
        });
    }
}
const getById = async (req, res) => {
    try {

        const { id } = req.params;


        const role = await Role.findByPk(id);


        if (!role) {
            return res.status(404).json({
                success: false,
                message: "Role not found"
            });
        }


        return res.status(200).json({
            success: true,
            data: role
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Failed to fetch role",
            error: error.message
        });
    }
};
const update = async (req, res) => {
    try {

        const { id } = req.params;


        const role = await Role.findByPk(id);


        if (!role) {
            return res.status(404).json({
                success: false,
                message: "Role not found"
            });
        }


        const {
            name,
            slug,
            is_active,
            is_system,
            is_superadmin
        } = req.body;


        if (slug) {

            const existingRole = await Role.findOne({
                where: {
                    slug: slug
                }
            });


            if (
                existingRole &&
                existingRole.id != id
            ) {
                return res.status(409).json({
                    success: false,
                    message: "Role slug already exists"
                });
            }
        }


        await role.update({
            name: name ?? role.name,
            slug: slug ?? role.slug,
            is_active: is_active ?? role.is_active,
            is_system: is_system ?? role.is_system,
            is_superadmin:
                is_superadmin ?? role.is_superadmin,
            updated_at: new Date()
        });


        return res.status(200).json({
            success: true,
            message: "Role updated successfully",
            data: role
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Failed to update role",
            error: error.message
        });
    }
};


const deletes = async (req, res) => {
    try {

        const { id } = req.params;


        const role = await Role.findByPk(id);


        if (!role) {
            return res.status(404).json({
                success: false,
                message: "Role not found"
            });
        }


        await role.destroy();


        return res.status(200).json({
            success: true,
            message: "Role deleted successfully"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Failed to delete role",
            error: error.message
        });
    }
};
module.exports={create,getAll,getById,update,deletes}