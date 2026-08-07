const app = require("./app");
const sequelize = require("./config/database");

require("./models");

const PORT = process.env.PORT || 5000;


sequelize.sync({ alter: true })
.then(() => {

    console.log("✅ Database synced");

    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });

})
.catch((error)=>{
    console.log("❌ Database sync failed:", error);
});