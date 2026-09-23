const PermissionGroup =
    require("./permission_group");

const PermissionCategory =
    require("./permission_category");
const Role =
    require("./role");
const RolePermission = require("./rolePermission");
const Staff = require("./Staff");
const StaffRole = require("./staffRole");
// PermissionGroup -> PermissionCategory

PermissionGroup.hasMany(PermissionCategory,{
    foreignKey: "perm_group_id",
     sourceKey: "id",
    as: "PermissionCategory"
});
// PermissionCategory -> PermissionGroup

PermissionCategory.belongsTo(PermissionGroup,
    {
        foreignKey:"perm_group_id",
        targetKey: "id",
        as: "PermissionGroup"

    }
)
// Role -> RolePermission

Role.hasMany(RolePermission,{
    foreignKey:"role_id",
    as: "permissions"
})

// RolePermission -> Role
RolePermission.belongsTo(Role,{
    foreignKey:"role_id",
    as:"role"
})
// ==========================================
// PermissionCategory -> RolePermission
// ==========================================

PermissionCategory.hasMany(RolePermission, {
    foreignKey: "perm_cat_id",
    as: "rolePermissions"
});


// ==========================================
// RolePermission -> PermissionCategory
// ==========================================

RolePermission.belongsTo(PermissionCategory, {
    foreignKey: "perm_cat_id",
    as: "permissionCategory"
});

// Staff -> StaffRole
Staff.hasMany(StaffRole, {
    foreignKey: "staff_id",
    as: "staffRoles"
});

StaffRole.belongsTo(Staff, {
    foreignKey: "staff_id",
    as: "staff"
});


// Role -> StaffRole
Role.hasMany(StaffRole, {
    foreignKey: "role_id",
    as: "staffRoles"
});

StaffRole.belongsTo(Role, {
    foreignKey: "role_id",
    as: "role"
});
module.exports = {
    PermissionGroup,
    PermissionCategory,
    Role,
    RolePermission,
    Staff,
    StaffRole,
};