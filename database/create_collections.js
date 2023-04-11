db = db.getSiblingDB(process.env["DB_NAME"]);

db.createCollection("employee")
db.createCollection("user")
db.createCollection("team")
db.createCollection("certificates")
db.createCollection("category")

db.createCollection("certificateCategory")
db.createCollection("certificateEmployee")
db.createCollection("employeeTeam")
db.createCollection("managerTeam")
