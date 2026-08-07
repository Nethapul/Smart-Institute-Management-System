// Load environment variables
require("dotenv").config();


// Load Sequelize model relationships
require("./models/associations");


// Load Express application
const app = require("./app");


// Server Port
const PORT = process.env.PORT || 3000;


// Start Server
app.listen(PORT, () => {
  console.log("=================================");
  console.log(`🚀 Server running on port ${PORT}`);
  console.log("=================================");
});