# Deployment Guide for Notes App

## Backend Deployment on Render

1. Go to https://render.com and create an account or log in.
2. Create a new Web Service.
3. Connect your GitHub repository or manually link your project.
4. Use the `backend/render.yaml` file for configuration or set the following manually:
   - Environment: Python
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn main:app --host 0.0.0.0 --port 8000`
   - Auto Deploy: Enabled
   - Plan: Free (or as per your choice)
5. Deploy the service.
6. Note the service URL (e.g., `https://notes-app-backend.onrender.com`).

## Frontend Deployment on Vercel

1. Go to https://vercel.com and log in.
2. Import your frontend project.
3. Set the build command to `vite build`.
4. Set the output directory to `dist`.
5. Add an environment variable:
   - Key: `REACT_APP_API_BASE`
   - Value: The backend URL from Render (e.g., `https://notes-app-backend.onrender.com`)
6. Deploy the frontend.
7. Your frontend will now communicate with the deployed backend.

## Notes

- Make sure to update the backend URL in Vercel environment variables whenever the backend URL changes.
- Test the full app flow after deployment.

If you need help with any step, feel free to ask.
