# 🚀 Notes App Deployment Guide

## Prerequisites
- GitHub account with repository: `https://github.com/rahul-9386/notes-app`
- Render account: `https://render.com`
- Vercel account: `https://vercel.com`

---

## Step 1: Deploy Backend to Railway

### 1.1 Create Railway Project
1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click **"New Project"**
3. Choose **"Deploy from GitHub repo"**
4. Connect your GitHub account and select `rahul-9386/notes-app`
5. Set **Root Directory**: `backend`

### 1.2 Add PostgreSQL Database
1. In your Railway project, click **"Add Plugin"** → **"PostgreSQL"**
2. Railway will automatically create and configure the database
3. Copy the `DATABASE_URL` from the database settings

### 1.3 Configure Environment Variables
1. In Railway project settings, add:
   - **Key**: `DATABASE_URL`
   - **Value**: The PostgreSQL connection string from step 1.2

### 1.4 Set Start Command
- Railway will auto-detect Python and use the default start command
- If needed, set: `uvicorn main:app --host 0.0.0.0 --port $PORT`

### 1.5 Deploy
- Click **"Deploy"**
- Wait for deployment to complete (usually 2-3 minutes)

### 1.6 Verify Backend Deployment
- Copy the backend URL (e.g., `https://notes-app-backend-production.up.railway.app`)

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
- **Backend**: `https://your-project.up.railway.app`
- **API Docs**: `https://your-project.up.railway.app/docs`

---

## Support
If you encounter any issues, check the deployment logs in Render/Vercel dashboards and share the error messages.
