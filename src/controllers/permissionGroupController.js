const PermissionGroup = require("../models/permission_group");

const create = async (req,res)=>{
    try {
        const {name,short_code,is_active,system} = req.body;
        const permissionGroup = await PermissionGroup.create({name,short_code,is_active,system,created_at: new Date()});
          res.status(201).json({
            success: true,
            message: "Permission group created successfully",
            data: permissionGroup
        });
    } catch (error) {
         res.status(500).json({
            success: false,
            message: "Failed to create permission group",
            error: error.message
        });
    }
}

const getAll = async (req,res)=>{
   try {
     const permissionGroups = await PermissionGroup.findAll({order:[['id','desc']]});
     res.status(200).json({
            success: true,
            data: permissionGroups
        });
   } catch (error) {
      res.status(500).json({
            success: false,
            message: "Failed to fetch permission groups",
            error: error.message
        });
   }
}

const getById = async (req,res) =>{
    try {
        const { id } = req.params;
        const permissionGroup = await PermissionGroup.findByPk(id);
         if (!permissionGroup) {
            return res.status(404).json({
                success: false,
                message: "Permission group not found"
            });
        }

        res.status(200).json({
            success: true,
            data: permissionGroup
        }); 
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch permission groups",
            error: error.message
        });
    }
}

const update = async (req,res) =>{
    try {
          const { id } = req.params;
          const {name,short_code,is_active,system} = req.body;
           const permissionGroup = await PermissionGroup.findByPk(id);

        if (!permissionGroup) {
            return res.status(404).json({
                success: false,
                message: "Permission group not found"
            });
        }

         await permissionGroup.update({
              name,
            short_code,
            is_active,
            system
         })
           res.status(200).json({
            success: true,
            message: "Permission group updated successfully",
            data: permissionGroup
        });
    } catch (error) {
         res.status(500).json({
            success: false,
            message: "Failed to fetch permission groups",
            error: error.message
        });
    }
}

const deletes = async (req,res) =>{
    try {
        const { id } = req.params;
        const permissionGroup = await PermissionGroup.findByPk(id);

        if (!permissionGroup) {
            return res.status(404).json({
                success: false,
                message: "Permission group not found"
            });
        }
        await permissionGroup.destroy(id);
        res.status(200).json({
            success: true,
            message: "Permission group deleted successfully"
        });

    } catch (error) {
         res.status(500).json({
            success: false,
            message: "Failed to delete permission group",
            error: error.message
        });
    }
}
module.exports ={create,getAll,getById,update,deletes}