import AdminJS from "adminjs";
import AdminJSFastify from "@adminjs/fastify";
import * as AdminJSMongoose from "@adminjs/mongoose";
import * as Models from "../models/index.js";
import { authenticate, COOKIE_PASSWORD } from "./config.js";
import { dark, light, noSidebar } from "@adminjs/themes";

// Register Mongoose adapter
AdminJS.registerAdapter(AdminJSMongoose);

export const adminJs = new AdminJS({
  resources: [
    {
      resource: Models.Customer,
      options: {
        listProperties: ["name", "role"], // ✅ Removed "isActive" unless your model has it
        filterProperties: ["phone", "role"],
      },
    },
    {
      resource: Models.DeliveryPartner,
      options: {
        listProperties: ["email", "role"],
        filterProperties: ["email", "role"],
      },
    },
    {
      resource: Models.Admin,
      options: {
        listProperties: ["email", "role"],
        filterProperties: ["email", "role"], // ✅ fixed "eamil" typo
      },
    },
    { resource: Models.Branch },
    { resource: Models.Category },
    { resource: Models.Product },
    { resource: Models.Order },
    { resource: Models.Counter },
  ],
  branding: {
    companyName: "Grocery Delivery App",
    withMadeWithLove: false,
  },
  defaultTheme: dark.id,
  availableThemes: [dark, light, noSidebar],
  rootPath: "/admin",
});

export const buildAdminRouter = async (app) => {
  // ✅ Attach the AdminJS dashboard to Fastify with session options
  await AdminJSFastify.buildAuthenticatedRouter(
    adminJs,
    {
      authenticate,
      cookiePassword: COOKIE_PASSWORD,
      cookieName: "adminjs",
    },
    app,
    {
      secret: COOKIE_PASSWORD,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      },
    }
  );

  // ✅ Must return adminJs so app.js can reference it
  return adminJs;
};
