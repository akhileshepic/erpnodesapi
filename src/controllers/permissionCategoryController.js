const {
    PermissionCategory,
    PermissionGroup,
    
} = require("../models/index");

const create = async (req,res)=>{
    try {
        const {  perm_group_id,name,short_code,enable_view,enable_add,enable_edit,enable_delete}=req.body;
        const permissionGroup = await PermissionGroup.findByPk(perm_group_id);

        if (!permissionGroup) {
            return res.status(404).json({
                success: false,
                message: "Permission group not found"
            });
        }
        const newCategory = await PermissionCategory.create({perm_group_id,name,short_code,enable_view,enable_add,enable_edit,enable_delete})
        
          res.status(201).json({
            success: true,
            message: "Permission category created successfully",
            data: newCategory
        });
    } catch (error) {
         res.status(500).json({
            success: false,
            message: "Failed to fetch permission categories",
            error: error.message
        });
    }
}

const getALL = async (req,res) =>{
    try {
        const category  = await PermissionCategory.findAll({
            include:[
                {
                     model: PermissionGroup,
                    as:"PermissionGroup",
                    attributes:[
                        "id",
                        "name",
                        "short_code"
                    ]
                }
            ],

            
            order:[['id','desc']]
        });
        res.status(200).json({
            success: true,
            data: category 
        });
    } catch (error) {
          res.status(500).json({
            success: false,
            message: "Failed to fetch permission categories",
            error: error.message
        });
    }
}
const getById = async (req,res) =>{
 try {
    const { id } = req.params;
    let permissioncategory =await PermissionCategory.findByPk(id,{
        include:[
            {
                model:PermissionGroup,
                as:"PermissionGroup",
                attributes:[
                    "id",
                    "name",
                    "short_code",
                    "is_active",
                    "system"
                ]
            }
        ]
    });
      if (!permissioncategory) {
            return res.status(404).json({
                success: false,
                message: "Category group not found"
            });
        }
         res.status(200).json({
            success: true,
            data: permissioncategory
        }); 
 } catch (error) {
     res.status(500).json({
            success: false,
            message: "Failed to fetch permission categories",
            error: error.message
        });
 }
}
module.exports ={create,getALL,getById}