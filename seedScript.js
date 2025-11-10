import "dotenv/config";
import mongoose from "mongoose";
import { Category, Product } from "./src/models/index.js";
import { categories, products} from "./seedData.js"

async function seedDatabase(params) {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        await Product.deleteMany({});
        await Category.deleteMany({});

        const categoryDocs = await Category.insertMany(categories);
        const categoryMap = categoryDocs.reduce((map, category) => {
            map[category.name] = category._id;
            return map;
        },{});

        const productsWithCategoryIds = products.map(product => ({
            ...product,
            category: categoryMap[product.category]
        }));
        await Product.insertMany(productsWithCategoryIds);

        console.log("DTABASE Seeded Successfully");
    }
    catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        mongoose.connection.close();
    }
        
}

seedDatabase();