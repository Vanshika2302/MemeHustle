#  MemeHustle

MemeHustle is a full-stack web app for creating, sharing, and viewing memes in real time. Built with React, Express, Supabase, and Socket.IO.

![Screenshot (1032)](https://github.com/user-attachments/assets/e850886c-c4dc-4f42-90dd-a2217bf06d89)

![Screenshot (1033)](https://github.com/user-attachments/assets/61e94261-868e-4334-a65a-6768f4fef380)

---

##  Tech Stack

- Frontend: **React**, **HTML**, **CSS**
- Backend: **Node.js**, **Express**
- Database: **Supabase**
- Real-time: **Socket.IO**

---

##  Features

- 🎨 Create and submit memes with title, tags, and optional image
- 📡 Real-time meme feed updates using WebSockets
- 🔍 Responsive and modern UI
- 📚 Supabase as backend storage (PostgreSQL)

---

## Getting Started

### 1. Clone the Repository

git clone https://github.com/Vanshika2302/memehustle.git
cd memehustle


### 2. Install Dependencies
Install frontend and backend dependencies:
---'bash
cd memehustle-frontend
npm install

cd ../memehustle-backend
npm install

### 3. Create .env for Backend
Inside memehustle-backend, create a .env file with:

PORT=5000
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-key

### 4. Run the App
Backend:

cd memehustle-backend
node server.js

Frontend:

cd memehustle-frontend
npm start
Open your browser at http://localhost:3000

### 📂 Folder Structure
bash
Copy
Edit
MemeHustle/
├── memehustle-frontend/     # React frontend
├── memehustle-backend/      # Express backend
├── README.md

