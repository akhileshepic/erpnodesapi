const PermissionGroup =
    require("./permission_group");

const PermissionCategory =
    require("./permission_category");

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

module.exports = {
    PermissionGroup,
    PermissionCategory
};