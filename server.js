require("dotenv").config();

const app = require("./src/app");
const sequelize = require("./src/config/database");
// require("./src/models/permission_group");
const PORT =
    process.env.PORT || 5000;

async function startServer() {

    try {

        await sequelize.authenticate();
    
        await sequelize.sync();
        console.log(
            "MySQL connected successfully"
        );

        app.listen(PORT, () => {

            console.log(
                `Server running on http://localhost:${PORT}`
            );

        });

    } catch (error) {

        console.error(
            "Database connection failed"
        );

        console.error(
            error.message
        );

        process.exit(1);

    }

}

startServer();