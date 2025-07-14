# E-Commerce Platform

A full-stack e-commerce application demonstrating a production-ready backend (Node.js, Express, Prisma, PostgreSQL, Docker, JWT Auth, Stripe, Swagger) and a React frontend (Create React App, Tailwind CSS, Stripe Elements).

---

## 🚀 Tech Stack

- **Backend:** Node.js, Express, Prisma ORM, PostgreSQL, Docker & Docker Compose  
- **Auth & Security:** JSON Web Tokens (JWT), bcrypt, helmet, rate-limiting  
- **Payments:** Stripe Integration (test mode)  
- **API Docs:** Swagger (OpenAPI)  
- **Frontend:** React (Create React App), React Router, Axios, Tailwind CSS  
- **State Management:** React Context for Auth & Cart  
- **Testing:** Jest & Supertest (backend), React Testing Library (frontend)  

---

## 📁 Repository Structure
[![Stars](https://img.shields.io/github/stars/akcuhmoris/E-Commerce-Website.svg?style=social)](https://github.com/akcuhmoris/E-Commerce-Website/stargazers)
[![Forks](https://img.shields.io/github/forks/akcuhmoris/E-Commerce-Website.svg?style=social)](https://github.com/akcuhmoris/E-Commerce-Website/network/members)
[![License](https://img.shields.io/github/license/akcuhmoris/E-Commerce-Website.svg)](LICENSE)

---

## 📊 Languages

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs?username=akcuhmoris&repo=E-Commerce-Website&layout=compact)
---

## 🔧 Setup & Running

### 1. Backend

```bash
cd backend
cp .env.example .env
# Edit .env, setting:
# DATABASE_URL=postgresql://<user>:<pass>@db:5432/<dbname>
# JWT_SECRET=<your_jwt_secret>
# STRIPE_SECRET_KEY=<your_stripe_secret_key>
# PORT=4001

# Install dependencies
npm install

# Run database migrations & generate client
npx prisma migrate dev --name init
npx prisma db seed

# Start services with Docker Compose (Postgres + API):
docker compose up --build -d

# OR run locally without Docker:
npm run dev


cd frontend
# Install dependencies
npm install

# Create .env in frontend/:
# REACT_APP_STRIPE_PUBLIC_KEY=pk_test_...

# Start React dev server:
npm start


