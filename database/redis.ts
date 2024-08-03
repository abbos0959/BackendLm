import { Redis } from "ioredis";
require("dotenv").config({});

const redisClient = () => {
   if (process.env.REDIS_URL) {
      console.log("redis ulandi");
   }
   throw new Error("redis ulanmadi");
};

export const redis = new Redis(redisClient());
