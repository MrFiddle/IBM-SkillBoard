db = db.getSiblingDB("admin");
db.createUser(
    {
        user: process.env["DB_ADMIN_USER"],
        pwd: process.env["DB_ADMIN_PASS"],
        roles: [
            { role: "userAdminAnyDatabase", db: "admin" },
            { role: "readWriteAnyDatabase", db: "admin" },
            // { role: "root", db: "admin" },
        ],
    }
)