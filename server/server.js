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