import "dotenv/config";
import { Admin } from "../models/index.js";

export const PORT = process.env.PORT || 3001;
export const COOKIE_PASSWORD = process.env.COOKIE_PASSWORD;


export const authenticate = async (email, password) => {
  // Simple hardcoded login (temporary)
  if (email && password) {
    if (email === "keerthikcoorgdu@gmail.com" && password === "123456789") {
      return Promise.resolve({ email });
    } else {
      return null;
    }
  }

    // Uncomment this when created admin manually in the database
    // if (email && password) {
    //     const user = await Admin.findOne({ email });
    //     if (!user) {
    //         return null
    //     }
    //     if (user.password === password) {
    //         return Promise.resolve({email: email, password: password});
    //     } else {
    //         return null;
    //     }
    // }
}