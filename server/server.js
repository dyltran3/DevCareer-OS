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
