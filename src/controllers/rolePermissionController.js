const { RolePermission,Role, PermissionCategory} = require("../models");


const create = async (req,res) =>{
    try {
          const {
            role_id,
            perm_cat_id,
            can_view,
            can_add,
            can_edit,
            can_delete
        } = req.body;
        // Validation
        if (!role_id) {
            return res.status(400).json({
                success: false,
                message: "role_id is required"
            });
        }
        if (!perm_cat_id) {
            return res.status(400).json({
                success: false,
                message: "perm_cat_id is required"
            });
        }
         // Check Role
        const role = await Role.findByPk(role_id);
        if (!role) {
            return res.status(404).json({
                success: false,
                message: "Role not found"
            });
        }
                 // Check Permission Category
        const category = await PermissionCategory.findByPk(perm_cat_id);
        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Permission category not found"
            });
        }
        // Check duplicate mapping
        const existing =
            await RolePermission.findOne({
                where: {
                    role_id: role_id,
                    perm_cat_id: perm_cat_id
                }
            });
        if (existing) {
            return res.status(409).json({
                success: false,
                message:
                    "Permission already assigned to this role"
            });
        }
         const permission =
            await RolePermission.create({
                role_id: role_id,
                perm_cat_id: perm_cat_id,
                can_view: can_view ?? 0,
                can_add: can_add ?? 0,
                can_edit: can_edit ?? 0,
                can_delete: can_delete ?? 0,
                created_at: new Date()
            });
        return res.status(201).json({
            success: true,
            message:"Role permission created successfully",
            data: permission
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message:"Failed to create role permission",
            error: error.message
        });
    }
}

const getAll = async (req, res) => {
    try {
        const permissions = await RolePermission.findAll({
                include: [
                    {
                        model: Role,
                        as: "role",
                        attributes: [
                            "id",
                            "name",
                            "slug"
                        ]
                    },
                    {
                        model: PermissionCategory,
                        as: "permissionCategory",
                        attributes: [
                            "id",
                            "name",
                            "short_code"
                        ]
                    }
                ],
                order: [
                    ["id", "DESC"]
                ]
            });
        return res.status(200).json({
            success: true,
            count: permissions.length,
            data: permissions
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message:"Failed to fetch role permissions",
            error: error.message
        });
    }
};

// =====================================================
// GET BY ID
// GET /api/role-permissions/:id
// =====================================================

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const permission = await RolePermission.findByPk(id, {
                include: [
                    {
                        model: Role,
                        as: "role",
                        attributes: [
                            "id",
                            "name",
                            "slug"
                        ]
                    },
                    {
                        model: PermissionCategory,
                        as: "permissionCategory",
                        attributes: [
                            "id",
                            "name",
                            "short_code"
                        ]
                    }
                ]
            });
        if (!permission) {
            return res.status(404).json({
                success: false,
                message:"Role permission not found"
            });
        }
        return res.status(200).json({
            success: true,
            data: permission
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message:"Failed to fetch role permission",
            error: error.message
        });
    }
};

// =====================================================
// UPDATE
// PUT /api/role-permissions/:id
// =====================================================
const update = async (req, res) => {
    try {
        const { id } = req.params;
        const permission = await RolePermission.findByPk(id);
        if (!permission) {
            return res.status(404).json({
                success: false,
                message:"Role permission not found"
            });
        }
        const {
            role_id,
            perm_cat_id,
            can_view,
            can_add,
            can_edit,
            can_delete
        } = req.body;
        // Validate role if supplied
        if (role_id) {
            const role =await Role.findByPk(role_id);
            if (!role) {
                return res.status(404).json({
                    success: false,
                    message: "Role not found"
                });
            }
        }
        // Validate category if supplied
        if (perm_cat_id) {
            const category = await PermissionCategory.findByPk(perm_cat_id);
            if (!category) {
                return res.status(404).json({
                    success: false,
                    message:"Permission category not found"
                });
            }
        }
        await permission.update({
                role_id    : role_id ?? permission.role_id,
                perm_cat_id: perm_cat_id ?? permission.perm_cat_id,
                can_view   : can_view ?? permission.can_view,
                can_add    : can_add ?? permission.can_add,
                can_edit   : can_edit ?? permission.can_edit,
                can_delete : can_delete ?? permission.can_delete
        });
        return res.status(200).json({
            success: true,
            message:"Role permission updated successfully",
            data: permission
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message:"Failed to update role permission",
            error: error.message
        });
    }
};

// =====================================================
// DELETE
// DELETE /api/role-permissions/:id
// =====================================================
const deletes = async (req, res) => {
    try {
        const { id } = req.params;
        const permission = await RolePermission.findByPk(id);
        if (!permission) {
            return res.status(404).json({
                success: false,
                message:"Role permission not found"
            });
        }
        await permission.destroy();
        return res.status(200).json({
            success: true,
            message:"Role permission deleted successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message:"Failed to delete role permission",
            error: error.message
        });
    }
};
module.exports={create,getAll,getById,update,deletes}