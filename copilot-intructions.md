# 🧭 Copilot Instructions: Informative Teacher Seminar Website (Next.js)

## 🚀 Project Summary

**Objective:** Build an informative, interactive website where primary school teachers can **register to present or attend** the *Khomas Annual Primary Teachers’ Information Sharing Seminar* (KEIDF) — inspired by the design spirit of [Deep Learning IndabaX South Africa](https://indabax.co.za/) but tailored to environmental education and Namibia’s local context.

---

## 🧱 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: TailwindCSS
- **Database**: MongoDB
- **Auth**: Clerk / NextAuth.js (optional: email-based registration only)
- **CMS (optional)**: Sanity / Contentlayer for blogs or dynamic content

---

## 📁 Pages & Structure

### 1. `/` – **Home Page**
- Intro to KEIDF & Seminar Theme: “_Exploring Namibia’s Marine Ecosystems_”
- Quick registration CTA
- Testimonials carousel
- Past highlights (video/photo grid)
- Partner logos: UNESCO, IUM, UNAM, CeMEES, etc.

### 2. `/about` – **About the Seminar**
- Background: Van Rhyn initiative, purpose, key goals
- Impact: Quotes/stats from Leena Iileka’s paper (e.g., “Reached 218 teachers from 35 schools”)
- Policies aligned with: SDG Goals 4, 13, 17 + Vision 2030, NDP5

### 3. `/register` – **Teacher Registration**
- Dynamic form based on uploaded `.doc`
- Auto-adaptive logic (e.g. If “Have you attended before?” → show Impact Survey)
- Form fields save to DB & send confirmation email
- Option to upload proposed concepts or presentation ideas (PDF or Word)

### 4. `/program` – **Seminar Program**
- Speaker lineup (with photos + talk titles)
- Agenda table (Day 1 & Day 2)
- Topics grouped by strands: EE, ESD, Tech Integration, Indigenous Knowledge

### 5. `/resources` – **Materials & Downloads**
- Uploads: PDFs, slides from past speakers
- Presentation Papers like Leena M. Iileka’s
- Toolkit section: Environmental club guide, recycling ideas, 3Rs in class

### 6. `/blog` – **Teacher Voices / Updates**
- Articles or teacher-submitted stories
- Announcements for next events or workshops
- Markdown support via CMS or MDX

### 7. `/contact` – **Contact / Organizers**
- Form to reach out to KEIDF team
- Map of Van Rhyn Primary School
- Option to sign up for mailing list

---

## 🧠 Core Functionalities

- ✅ **Form Validation** (Formik + Yup or React Hook Form)
- ✅ **Database Schema**
  - Users (Teachers)
  - Seminars (Events)
  - Presentations (Title, Abstract, File)
  - Feedback (Ratings, Suggestions)
- ✅ **Admin Dashboard**
  - View submissions
  - Approve presenters
  - Download reports
- ✅ **Mobile Responsive**

---

## 🎨 Design Hints (Inspired by IndabaX site)

- Hero with large soft background gradients or topographic shapes
- Section transitions with smooth scroll or parallax
- Use photos of past events (highlight real Namibian educators)
- Clean typeface (e.g. Inter, Manrope)

---
**Live dashboard** showing how many teachers registered

---

## 🛠 Dev Setup

```bash
npx create-next-app@latest seminar-site --app --typescript --tailwind
cd seminar-site
npm install @prisma/client formik yup
npx prisma init
