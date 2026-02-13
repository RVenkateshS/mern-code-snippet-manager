# 📋 PasteApp (MERN Snippet Manager)

![MERN Stack](https://img.shields.io/badge/MERN-Full%20Stack-blueviolet)
![Status](https://img.shields.io/badge/Status-Completed-success)
![License](https://img.shields.io/badge/License-MIT-blue)

A modern, full-stack **Code Snippet Manager** built with the **MERN Stack**. 
It allows developers to create, store, and manage code snippets with syntax highlighting, search functionality, and instant sharing capabilities.

## 🚀 Live Demo
- **Frontend (Vercel):** [Insert Your Vercel Link Here]
- **Backend (Render):** [Insert Your Render Link Here]

---

## ✨ Features

- **📝 Create & Edit Pastes:** Rich text editor experience for writing code.
- **🎨 Syntax Highlighting:** Automatic color coding for JavaScript, Python, CSS, HTML, and more (powered by `react-syntax-highlighter`).
- **☁️ Persistent Storage:** All data is safely stored in **MongoDB Atlas** via a Node/Express backend.
- **🔍 Search & Filter:** Instantly find pastes by title using the real-time search bar.
- **🔗 Smart Share:** - **Mobile:** Uses the native Web Share API.
    - **Desktop:** One-click copy-to-clipboard for shareable links.
- **📱 Responsive Design:** Fully responsive UI built with **Tailwind CSS**, featuring modern glassmorphism effects.
- **🌓 Copy to Clipboard:** One-click button to copy entire code blocks.
- **🌙 Dark/Light Mode Friendly:** Optimized colors for long coding sessions.

---

## 🛠️ Tech Stack

### **Frontend**
- **React.js** (Vite) - Component-based UI.
- **Redux Toolkit** - Global state management (syncs with Backend).
- **Tailwind CSS** - Modern styling and responsiveness.
- **React Router DOM** - Client-side routing (`/`, `/pastes`, `/paste/:id`).
- **React Hot Toast** - Beautiful notifications.
- **Axios** - API requests.

### **Backend**
- **Node.js** - Runtime environment.
- **Express.js** - RESTful API framework.
- **MongoDB & Mongoose** - NoSQL Database and Object Data Modeling (ODM).
- **Cors** - Cross-Origin Resource Sharing handling.

---

## 📸 Screenshots

*(Optional: Add screenshots of your Home, All Pastes, and View Paste pages here)*
| Home Page | View Paste |
|:---:|:---:|
| ![Home](https://via.placeholder.com/400x200?text=Home+Page+Screenshot) | ![View](https://via.placeholder.com/400x200?text=View+Page+Screenshot) |

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
git clone [https://github.com/RVenkateshS/mern-code-snippet-manager.git](https://github.com/RVenkateshS/mern-code-snippet-manager.git)
cd mern-code-snippet-manager
