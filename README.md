# WPEI Backend API — cPanel / TrueHost Setup Guide

A standalone Express.js + PostgreSQL backend for the Women Poultry Empowerment Initiative (WPEI) website.

---

## Prerequisites

- TrueHost cPanel hosting with **Node.js** support (v18 or higher)
- A **PostgreSQL** database created in cPanel
- SSH access OR cPanel Terminal

---

## Step 1 — Create a PostgreSQL Database in cPanel

1. Log in to **cPanel → PostgreSQL Databases**
2. Create a new database (e.g. `wpei_db`)
3. Create a new user (e.g. `wpei_user`) with a strong password
4. Add the user to the database with **ALL PRIVILEGES**
5. Note down: host (`localhost`), port (`5432`), database name, username, password

---

## Step 2 — Upload Files to cPanel

1. In cPanel, open **File Manager**
2. Navigate to your desired directory (e.g. `/home/yourusername/wpei-backend/`)
3. Upload and extract `wpei-backend-cpanel.zip` into that folder
4. Make sure the folder contains: `src/`, `package.json`, `tsconfig.json`, `.env.example`, `drizzle.config.ts`, `README.md`

---

## Step 3 — Configure Environment Variables

1. In the `wpei-backend` folder, **copy** `.env.example` to `.env`
2. Edit `.env` and fill in your real values:

```
DATABASE_URL=postgresql://wpei_user:your_password@localhost:5432/wpei_db
PORT=3000
CORS_ORIGIN=https://yourdomain.com
```

> **CORS_ORIGIN** should be your frontend website's URL (e.g. `https://wpei.org`).
> If your frontend and backend are on the same domain, you can also set it to `*` temporarily for testing.

---

## Step 4 — Install Dependencies & Build

Open **cPanel Terminal** (or SSH into your server) and run:

```bash
cd ~/wpei-backend
npm install
npm run build
```

This compiles the TypeScript source into the `dist/` folder.

---

## Step 5 — Create the Database Tables

Still in the terminal, run:

```bash
npm run db:push
```

This creates all 4 tables in your PostgreSQL database:
- `membership_applications`
- `volunteer_applications`
- `contact_messages`
- `newsletter_subscriptions`

---

## Step 6 — Set Up the Node.js App in cPanel

1. In cPanel, go to **Setup Node.js App**
2. Click **Create Application**
3. Fill in:
   - **Node.js version**: 18 or higher
   - **Application mode**: Production
   - **Application root**: `/home/yourusername/wpei-backend`
   - **Application URL**: choose your subdomain or path (e.g. `api.yourdomain.com`)
   - **Application startup file**: `dist/index.js`
4. Click **Create**
5. In the app's environment variables section, add:
   - `DATABASE_URL` = your PostgreSQL connection string
   - `CORS_ORIGIN` = your frontend URL
6. Click **Run NPM Install** (if not already done via terminal)
7. Click **Start**

---

## Step 7 — Test the API

Open your browser or use curl to test:

```bash
# Health check
curl https://api.yourdomain.com/api/healthz

# Stats
curl https://api.yourdomain.com/api/stats/summary

# Submit a contact message
curl -X POST https://api.yourdomain.com/api/contact-messages \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane","email":"jane@example.com","subject":"Hello","message":"Test message"}'
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/healthz` | Server health check |
| GET | `/api/stats/summary` | Impact stats (members, wards, etc.) |
| POST | `/api/members` | Submit membership application |
| GET | `/api/members/lookup?membershipNumber=WPEI-2025-XXXXXX` | Look up membership by number |
| POST | `/api/volunteers` | Submit volunteer application |
| POST | `/api/contact-messages` | Submit contact form |
| POST | `/api/newsletter-subscriptions` | Subscribe to newsletter |

---

## Membership Application Fields

```json
{
  "fullName": "Jane Doe",
  "gender": "Female",
  "phone": "+234 801 234 5678",
  "email": "jane@example.com",
  "state": "Lagos",
  "lga": "Ikeja",
  "ward": "Ward 3",
  "occupation": "Poultry Farmer"
}
```

Response includes an auto-generated `membershipNumber` like `WPEI-2025-384729`.

---

## Volunteer Application Fields

```json
{
  "fullName": "Jane Doe",
  "phone": "+234 801 234 5678",
  "email": "jane@example.com",
  "skills": "Training, Mentorship",
  "experience": "5 years in agricultural extension",
  "availability": "Weekends"
}
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `DATABASE_URL is not set` | Make sure `.env` file exists and has the correct value |
| `ECONNREFUSED` on DB | Check your PostgreSQL host/port; use `localhost` for cPanel-hosted DBs |
| `Cannot find module 'dist/index.js'` | Run `npm run build` first |
| CORS errors from frontend | Set `CORS_ORIGIN` to your exact frontend URL |
| Tables don't exist | Run `npm run db:push` in terminal |
