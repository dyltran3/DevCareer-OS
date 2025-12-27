/** Server.js - Backend Sử dụng Node.js + Prisma + SQLite
 * 
 */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// --- UTILS: Helper xử lý JSON cho SQLite ---
// Vì SQLite lưu JSON dạng string, ta cần hàm parse/stringify helper
const parseRoadmap = ( roadmap ) => {
    if (!roadmap) return null;
    return {
        ...roadmap,
        data: JSON.parse(roadmap.data),
        chatHistory: JSON.parse(roadmap.chatHistory)
    };
};

// --- API Routes ---

// --- 1. Roadmap APIs ---
// Lấy danh sách tất cả Roadmaps - Chỉ lấy tên để hiển thị list
app.get('/api/roadmaps/:userId', async (req, res) => {
    try {
        const list = await prisma.roadmap.findMany({
            where: { userId: req.params.userId },
            orderBy: { createdAt: 'desc' },
            select: {id: true, name: true, createdAt: true} // Chỉ lấy các trường cần thiết
            });
            res.json(list);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Lấy chi tiết một Roadmap (Parse JSON string ra Object)
app.get('/api/roadmap/:id', async (req, res) => {
    try {
        const roadmap = await prisma.roadmap.findUnique({
            where: { id: parseInt(req.params.id) }
        });
        res.json(parseRoadmap(roadmap));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Tạo mới một Roadmap
app.post('/api/roadmap', async (req, res) => {
    try {
        const { userId, name, data } = req.body;
        const newRoadmap = await prisma.roadmap.create({
            data: {
                userId,
                name,
                data: JSON.stringify(data), // Chuyển JSON thành string để lưu vào SQLite
                chatHistory: JSON.stringify([])
            }
        });
        res.json(parseRoadmap(newRoadmap));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Lưu tin nhắn chat vào Roadmap
app.post('/api/roadmap/:id/chat', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { role, text} = req.body;

        // Lấy roadmap hiện tại
        const roadmap = await prisma.roadmap.findUnique({ where: { id } });
        if (!roadmap) return res.status(404).json({ error: 'Roadmap not found' });

    res.json({ success: true });
    } catch (error) {}
        res.status(500).json({ error: error.message });
});

// Xóa một Roadmap
app.delete('/api/roadmap/:id', async (req, res) => {
    try {
        await prisma.roadmap.delete({
            where: { id: parseInt(req.params.id) }
        });
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});