import { app } from "./app";
require("dotenv").config({});
import colors from "colors";
import { DB } from "./database/db";
DB();

app.listen(process.env.PORT, () => {
   console.log(colors.green.bold.underline(` Server ishladi ${process.env.PORT}`));
});
