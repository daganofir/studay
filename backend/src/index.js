import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// ברירת מחדל
app.get("/", (req, res) => {
    res.send("Server is running ✅");
});

// שליפת כל המשימות
app.get("/tasks", async (req, res) => {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
});

// הוספת משימה חדשה
app.post("/tasks", async (req, res) => {
    const { title } = req.body;
    const newTask = await prisma.task.create({ data: { title } });
    res.json(newTask);
});

app.listen(3000, () => console.log("🚀 Server running at http://localhost:3000"));
