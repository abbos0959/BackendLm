import colors from "colors";
import mongoose from "mongoose";

export const DB = async () => {
   try {
      await mongoose.connect(
         "mongodb+srv://abbosg5:n77Zqv6h8i4LoHPt@cluster0.hdj7l7g.mongodb.net/"
      );
      console.log(colors.bgYellow.underline.bold("Database ulandiki jiyan"));
   } catch (error) {
      console.log(colors.bgRed.underline.bold(`Database  ulanmadi ${error}`));
      setTimeout(DB, 5000);
   }
};
