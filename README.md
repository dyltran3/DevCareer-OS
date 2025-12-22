# DevCareer OS 🚀

> AI-Powered Career Development & Learning Roadmap Platform

DevCareer OS là một nền tảng quản lý lộ trình học tập và phát triển nghề nghiệp được hỗ trợ bởi trí tuệ nhân tạo. Dự án giúp người dùng tạo lộ trình học tập cá nhân hóa, quản lý công việc theo phương pháp Kanban, và tương tác với AI assistant để được tư vấn về sự nghiệp.

## ✨ Tính năng chính

### 🎯 Tạo Lộ trình AI-Powered
- Tự động sinh lộ trình học tập dựa trên mục tiêu nghề nghiệp
- Phân chia theo giai đoạn với timeline chi tiết
- Đề xuất tài nguyên học tập phù hợp

### 📋 Quản lý Task Kanban
- Bảng Kanban trực quan (Todo → In Progress → Done)
- Kéo thả task giữa các cột
- Quản lý deadline và độ ưu tiên
- Cập nhật real-time

### 💬 AI Chat Assistant
- Tương tác contextual dựa trên lộ trình hiện tại
- Tư vấn về kỹ năng, công nghệ
- Trả lời câu hỏi về lộ trình học tập
- Lưu lịch sử hội thoại

### 🔐 Xác thực & Bảo mật
- Đăng nhập/Đăng ký người dùng
- Session management
- API endpoint protection

## 🏗️ Kiến trúc hệ thống

### Tech Stack

**Frontend:**
- ⚛️ React 18 với Vite
- 🎨 Tailwind CSS cho styling
- 🎯 Lucide React cho icons
- 📡 Axios cho API calls

**Backend:**
- 🟢 Node.js + Express.js
- 🗄️ MongoDB + Mongoose ODM
- 🤖 Google Gemini AI API
- 🔒 CORS, Body-parser middleware

**Architecture Pattern:**
```
Client-Server Architecture (MERN Stack)

┌─────────────┐      HTTP/REST      ┌─────────────┐
│   React     │ ◄──────────────────►│  Express    │
│  Frontend   │      JSON Data      │   Server    │
└─────────────┘                     └─────────────┘
                                           │
                                           ▼
                                    ┌─────────────┐
                                    │  MongoDB    │
                                    │  Database   │
                                    └─────────────┘
                                           │
                                           ▼
                                    ┌─────────────┐
                                    │  Gemini AI  │
                                    │   Service   │
                                    └─────────────┘
```

## 📂 Cấu trúc dự án

```
DevCareer-OS/
├── client/                    # Frontend React Application
│   ├── src/
│   │   ├── api/              # API configuration & calls
│   │   │   └── index.js      # Axios setup & endpoints
│   │   ├── components/       # React components
│   │   │   ├── AuthScreen.jsx      # Login/Register UI
│   │   │   ├── ChatWidget.jsx      # AI Chat interface
│   │   │   ├── Sidebar.jsx         # Navigation sidebar
│   │   │   ├── TaskBoard.jsx       # Kanban board
│   │   │   └── TaskCard.jsx        # Individual task card
│   │   ├── pages/           # Page-level components
│   │   │   ├── Dashboard.jsx       # Main dashboard
│   │   │   └── LoginPage.jsx       # Login page
│   │   ├── App.jsx          # Root component & routing
│   │   ├── main.jsx         # React entry point
│   │   └── index.css        # Global styles
│   ├── index.html           # HTML template
│   ├── package.json         # Frontend dependencies
│   ├── vite.config.js       # Vite configuration
│   └── tailwind.config.js   # Tailwind CSS config
│
├── server/                   # Backend Node.js Application
│   ├── models/              # MongoDB Schemas
│   │   ├── Roadmap.js       # Roadmap & chat history schema
│   │   └── Task.js          # Task management schema
│   ├── .env                 # Environment variables (secret)
│   ├── server.js            # Main server file & API routes
│   └── package.json         # Backend dependencies
│
├── LICENSE                  # Apache 2.0 License
└── README.md               # This file
```

## 🚀 Hướng dẫn cài đặt

### Yêu cầu hệ thống
- Node.js >= 16.x
- MongoDB >= 5.x (local hoặc MongoDB Atlas)
- NPM hoặc Yarn
- Google Gemini API Key

### Bước 1: Clone repository

```bash
git clone https://github.com/yourusername/DevCareer-OS.git
cd DevCareer-OS
```

### Bước 2: Cấu hình Backend

```bash
cd server
npm install
```

Tạo file `.env` trong thư mục `server/`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/devcareer
GEMINI_API_KEY=your_gemini_api_key_here
NODE_ENV=development
```

**Lấy Gemini API Key:**
1. Truy cập [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Tạo API key mới
3. Copy và paste vào file `.env`

### Bước 3: Cấu hình Frontend

```bash
cd ../client
npm install
```

Tạo file `.env` trong thư mục `client/` (nếu cần):

```env
VITE_API_URL=http://localhost:5000
```

### Bước 4: Chạy ứng dụng

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
# Server chạy tại http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
# Frontend chạy tại http://localhost:5173
```

Mở trình duyệt và truy cập `http://localhost:5173`

## 📚 API Endpoints

### Authentication
```
POST /api/auth/register    # Đăng ký tài khoản mới
POST /api/auth/login       # Đăng nhập
POST /api/auth/logout      # Đăng xuất
GET  /api/auth/me          # Lấy thông tin user hiện tại
```

### Roadmap Management
```
POST   /api/roadmaps/generate   # Tạo lộ trình mới từ AI
GET    /api/roadmaps            # Lấy danh sách lộ trình
GET    /api/roadmaps/:id        # Lấy chi tiết lộ trình
PUT    /api/roadmaps/:id        # Cập nhật lộ trình
DELETE /api/roadmaps/:id        # Xóa lộ trình
```

### Task Management
```
POST   /api/tasks              # Tạo task mới
GET    /api/tasks              # Lấy danh sách tasks
GET    /api/tasks/:id          # Lấy chi tiết task
PUT    /api/tasks/:id          # Cập nhật task
DELETE /api/tasks/:id          # Xóa task
PATCH  /api/tasks/:id/status   # Cập nhật trạng thái task
```

### AI Chat
```
POST /api/chat/message         # Gửi tin nhắn đến AI
GET  /api/chat/history/:roadmapId  # Lấy lịch sử chat
```

## 🧠 Kiến thức & Công nghệ

### Frontend Development

**React Fundamentals:**
- Component-based architecture
- Hooks (useState, useEffect, useContext)
- Props & State management
- Component lifecycle

**Styling:**
- Utility-first CSS với Tailwind
- Responsive design
- Mobile-first approach

**UI/UX:**
- Drag & Drop interactions
- Real-time updates
- Loading states & error handling

### Backend Development

**RESTful API Design:**
- HTTP methods (GET, POST, PUT, DELETE, PATCH)
- Status codes (200, 201, 400, 401, 404, 500)
- Request/Response patterns
- Middleware chain

**Database Design:**
- NoSQL document structure
- Schema design với Mongoose
- Relationships & References
- Indexing strategies

### AI Integration

**Prompt Engineering:**
- Structured prompts cho JSON output
- Context injection
- Few-shot learning
- Response parsing

**Google Gemini API:**
- Model selection (gemini-pro)
- Temperature & token control
- Streaming responses
- Error handling

## 🔄 Luồng dữ liệu (Data Flow)

### 1. Tạo Lộ trình AI
```
User Input ("DevOps Engineer")
    ↓
Frontend gửi POST /api/roadmaps/generate
    ↓
Backend nhận request
    ↓
Backend gọi Gemini API với prompt có cấu trúc
    ↓
Gemini trả về JSON roadmap
    ↓
Backend parse & validate
    ↓
Backend lưu vào MongoDB
    ↓
Backend trả response về Frontend
    ↓
Frontend render lộ trình
```

### 2. Quản lý Task (Kanban)
```
User kéo task từ "Todo" → "In Progress"
    ↓
Frontend cập nhật UI ngay lập tức (Optimistic Update)
    ↓
Frontend gửi PATCH /api/tasks/:id/status
    ↓
Backend cập nhật database
    ↓
Nếu thất bại → Frontend rollback UI
```

### 3. AI Chat Contextual
```
User hỏi "Học ReactJS khó không?"
    ↓
Frontend gửi kèm:
  - User message
  - Current roadmap context
  - Chat history
    ↓
Backend xây dựng prompt với context:
  "User đang học ReactJS roadmap: [chi tiết]
   History: [các tin nhắn trước]
   Question: Học ReactJS khó không?"
    ↓
Gemini trả lời dựa trên context
    ↓
Backend lưu message vào history
    ↓
Frontend hiển thị response
```

## 🛠️ Các tính năng nâng cao

### Đang phát triển
- [ ] JWT Authentication thay vì session
- [ ] Password hashing với bcrypt
- [ ] Cron job tự động cập nhật vào Chủ nhật 7h sáng
- [ ] Upload avatar & profile management
- [ ] Export roadmap ra PDF
- [ ] Chia sẻ roadmap công khai
- [ ] Gamification (points, badges, streaks)
- [ ] Multi-language support

### Đề xuất cho tương lai
- [ ] Real-time collaboration
- [ ] Mobile app (React Native)
- [ ] Integration với Google Calendar
- [ ] Thống kê & Analytics dashboard
- [ ] AI-powered task estimation
- [ ] Community roadmaps sharing

## 🔒 Bảo mật

### Hiện tại
- CORS configuration
- Environment variables cho secrets
- Input validation

### Cần cải thiện
⚠️ **Quan trọng:** Dự án hiện đang ở giai đoạn MVP và cần cải thiện:

1. **Password Security:** Implement bcrypt hashing
2. **Authentication:** Chuyển sang JWT tokens
3. **Rate Limiting:** Chống spam API
4. **Input Sanitization:** Chống XSS & SQL Injection
5. **HTTPS:** SSL/TLS trong production

## 🧪 Testing

```bash
# Backend tests
cd server
npm test

# Frontend tests
cd client
npm test
```

## 📦 Deployment

### Backend (Railway/Render/Heroku)
1. Push code lên GitHub
2. Connect repository với platform
3. Cấu hình environment variables
4. Deploy!

### Frontend (Vercel/Netlify)
1. Push code lên GitHub
2. Connect repository với platform
3. Cấu hình build command: `npm run build`
4. Deploy!

### MongoDB (MongoDB Atlas)
1. Tạo cluster miễn phí
2. Whitelist IP hoặc allow all (0.0.0.0/0)
3. Copy connection string
4. Update MONGODB_URI trong .env

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy:

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Dự án được phân phối dưới giấy phép Apache License 2.0. Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 👥 Tác giả

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Google Gemini AI cho AI capabilities
- MongoDB cho database solution
- React team cho amazing framework
- Tailwind CSS cho beautiful styling
- Lucide cho icon library

## 📞 Liên hệ & Hỗ trợ

- 🐛 Báo lỗi: [GitHub Issues](https://github.com/yourusername/DevCareer-OS/issues)
- 💡 Đề xuất tính năng: [GitHub Discussions](https://github.com/yourusername/DevCareer-OS/discussions)
- 📧 Email: support@devcareer.com

---

⭐ Nếu dự án hữu ích, hãy cho một star trên GitHub!

Made with ❤️ by DevCareer Team