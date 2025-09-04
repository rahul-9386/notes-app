# 🚀 Notes App Deployment Guide

## Prerequisites
- GitHub account with repository: `https://github.com/rahul-9386/notes-app`
- Render account: `https://render.com`
- Vercel account: `https://vercel.com`

---

## Step 1: Deploy Backend to Render

### 1.1 Create PostgreSQL Database
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **"New"** → **"Database"**
3. Choose **PostgreSQL**
4. Set name: `notes-db`
5. Choose **Free** plan
6. Click **"Create Database"**
7. **Copy the connection string** (you'll need it later)

### 1.2 Create Web Service
1. In Render Dashboard, click **"New"** → **"Web Service"**
2. Connect your GitHub repository: `rahul-9386/notes-app`
3. Configure:
   - **Name**: `notes-app-backend`
   - **Environment**: `Python`
   - **Build Command**: `cd backend && pip install -r requirements.txt`
   - **Start Command**: `cd backend && uvicorn main:app --host 0.0.0.0 --port $PORT`
4. Add Environment Variable:
   - **Key**: `DATABASE_URL`
   - **Value**: Paste the PostgreSQL connection string from step 1.1
5. Choose **Free** plan
6. Click **"Create Web Service"**

### 1.3 Verify Backend Deployment
- Wait for deployment to complete (usually 2-3 minutes)
- Copy the backend URL (e.g., `https://notes-app-backend.onrender.com`)

---

## Step 2: Deploy Frontend to Vercel

### 2.1 Complete Vercel CLI Setup
In your terminal where Vercel CLI is running:
```
./
```
Press Enter to confirm the directory.

### 2.2 Link Frontend to Backend
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Find your `notes-frontend` project
3. Go to **Settings** → **Environment Variables**
4. Add:
   - **Key**: `REACT_APP_API_BASE`
   - **Value**: Your Render backend URL (from step 1.3)
5. Click **"Save"**
6. **Redeploy** the frontend

---

## Step 3: Test the Application

### 3.1 Test Backend API
Visit: `https://your-backend-url.onrender.com/docs`
- You should see FastAPI documentation
- Test the `/notes` endpoint

### 3.2 Test Frontend
Visit: `https://your-frontend-url.vercel.app`
- Try creating, reading, updating, and deleting notes
- All operations should work with the backend

---

## Troubleshooting

### If Backend Fails:
1. Check Render logs for errors
2. Ensure `DATABASE_URL` is set correctly
3. Verify PostgreSQL database is running

### If Frontend Fails:
1. Check Vercel build logs
2. Ensure `REACT_APP_API_BASE` is set to the correct backend URL
3. Check browser console for CORS errors

### Common Issues:
- **SQLAlchemy Error**: Fixed by updating to version 2.0.31
- **Module Import Error**: Fixed by using correct start command
- **Database Connection**: Ensure PostgreSQL is created and linked

---

## Final URLs
- **Frontend**: `https://your-project.vercel.app`
- **Backend**: `https://your-project.onrender.com`
- **API Docs**: `https://your-project.onrender.com/docs`

---

## Support
If you encounter any issues, check the deployment logs in Render/Vercel dashboards and share the error messages.
