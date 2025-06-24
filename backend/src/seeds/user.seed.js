import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users

  {
    email: "tatenda@gmail.com",
    fullName: "tatenda M",
    password: "tatenda1234",
    profilePic: "/avatar.png",
  },
  // Male Users
  {
    email: "chester@gmail.com",
    fullName: "Chester J",
    password: "chester123",
    profilePic: "/avatar.png",
  },
  {
    email: "farai@gmail.com",
    fullName: "Farai E",
    password: "farai123",
    profilePic: "/avatar.png",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
