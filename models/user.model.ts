import mongoose, { Model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
const emailregexPAttern: RegExp =
   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export interface Iuser extends mongoose.Document {
   name: string;
   email: string;
   password: string;
   comparePassword: (password: string) => Promise<boolean>;
   avatar: {
      public_id: string;
      url: string;
   };
   role: string;
   isVerified: boolean;
   courses: Array<{ courseId: string }>;
}

const userschema: Schema<Iuser> = new mongoose.Schema(
   {
      name: {
         type: String,
         required: [true, "Iltimos ism kiriting"],
      },
      email: {
         type: String,
         required: [true, "Iltimos email kiriting"],
         validate: {
            validator: function (value: string) {
               return emailregexPAttern.test(value);
            },
            message: "Iltimos to'g'ri email kiriting",
         },
      },

      password: {
         type: String,
         required: [true, "Iltimos parol kiriting"],
         minlength: [6, "Parol uzunligi 6  belgidan kam bo'lmasligi kerak"],
      },
      avatar: {
         public_id: String,
         url: String,
      },
      role: {
         type: String,
         default: "user",
      },
      isVerified: {
         type: Boolean,
         default: false,
      },

      courses: [
         {
            courseId: String,
         },
      ],
   },
   {
      timestamps: true,
   }
);

const usermodel: Model<Iuser> = mongoose.model("users", userschema);

export default usermodel;
