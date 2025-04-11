const { execSync } = require("child_process");
require("dotenv").config();

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_API || "http://localhost:4000/graphql";

let token = process.env.NEXT_PRIVATE_GRAPHQL_AUTH_TOKEN || "";

const command = `npx genql --endpoint ${endpoint} --output src/shared/graphql -H "Authorization: Bearer ${token}"`;

console.log("Ejecutando:", command);
execSync(command, { stdio: "inherit" });
