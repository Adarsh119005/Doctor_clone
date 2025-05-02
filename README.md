# 🩺 Doctor Listing & Filtering Web App (Apollo247 Clone)

This is a full-stack web application inspired by the Apollo247 general physician listing page. The platform allows administrators to add doctors and users to view/filter doctors based on consultation mode, experience, and fee.

This project is built with a **Next.js frontend**, **Express.js backend**, and **MongoDB** for data storage. It emphasizes clean UI, modular component design, real-time filtering, and scalability.

---

## 🌐 Live Demo

> Coming Soon

---

## 📌 Features

### 👨‍⚕️ Doctor Management
- Add new doctors via REST API.
- Store details: name, specialization, experience, fee, gender, rating, image, consultation mode.

### 🔍 Filters
- **Consultation Mode:** Online, Hospital Visit, Both
- **Experience:** 0–5 years, 6–10 years, 11–16 years
- **Fees:** ₹100–500, ₹500–1000, ₹1000+

### 🎯 Additional
- Fully responsive UI
- Dynamic filtering (client-side + backend support)
- Modular code structure
- Error handling for missing or invalid input
- Basic image support for doctors

---

## 🚀 Tech Stack

| Layer       | Technology                             |
|-------------|----------------------------------------|
| **Frontend**| Next.js, React, TypeScript, TailwindCSS, shadcn/ui |
| **Backend** | Node.js, Express.js, MongoDB, Mongoose |
| **API**     | REST API (JSON-based)                  |
| **Dev Tools**| Vercel (frontend deployment), Render (backend), Postman |

---

## 🧱 Project Structure

root/
│
├── backend/
│ ├── models/
│ │ └── Doctor.js # Mongoose model for doctor
│ ├── routes/
│ │ └── DoctorRoute.js # API routes: add and list doctors
│ ├── server.js # Main server entry point
│ └── .env # Environment variables
│
├── frontend/
│ ├── components/
│ │ ├── Doctor.tsx # Main page rendering filter + results
│ │ ├── DoctorFilter.tsx # Filter sidebar
│ │ └── DoctorCard.tsx # Doctor profile card
│ ├── pages/
│ │ └── index.tsx # Root entry page
│ └── public/
│ └── ... # Images / logos if needed
│
├── README.md
└── package.json (frontend + backend)


---

## 🛠 Setup Instructions

### 🔧 Prerequisites
- Node.js ≥ v16
- npm or yarn
- MongoDB (local or Atlas)

---

### ⚙️ Backend Setup

bash
cd backend
npm install

### 📥 Clone the Repository

```bash
git clone https://github.com/your-username/doctor-app.git
cd doctor-app


Create a .env file:

MONGODB_URI=mongodb://localhost:27017/doctors
PORT=5000

Run backend:

npm start

💻 Frontend Setup

cd frontend
npm install
npm run dev

App will run at http://localhost:3000.
📡 API Documentation
➕ Add Doctor - POST /api/add-doctor

Add a new doctor to the database.
Body Parameters

{
  "name": "Dr. Jane Doe",
  "specialization": "General Physician",
  "experience": 10,
  "gender": "Female",
  "consultationMode": "Both",
  "fee": 700,
  "rating": 4.5,
  "image": "https://example.com/image.jpg"
}

Response

{
  "message": "Doctor added successfully",
  "doctor": { ... }
}

📋 List Doctors - GET /api/doctors

List all doctors based on filters.
Query Parameters (optional):

    modeOfConsult: Online | Offline

    experience: 0, 6, 11

    fees: 100, 500, 1000

Example:

GET /api/doctors?modeOfConsult=Online&experience=6&fees=1000

Response:

[
  {
    "_id": "645e23b...",
    "name": "Dr. Jane Doe",
    "specialization": "Cardiologist",
    ...
  }
]


💡 Improvements (Future Roadmap)

Full doctor profile page with reviews

User authentication (admin + patient)

"Doctors near me" geolocation filter

Booking system for appointments

Unit and integration tests

Dark mode support

    Pagination and search bar

🧑‍💻 Developer

Adarsh Upadhyay

    🌐 Portfolio

    💼 LinkedIn

    📧 aa7905137620@gmail.com



