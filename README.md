# ResumeForge AI — Smart AI-Style Resume Builder Web App

![React](https://img.shields.io/badge/React-Frontend-blue)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-purple)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6)
![Status](https://img.shields.io/badge/Status-In%20Development-orange)

## Live Project

```text
Live website link will be added after deployment.
```

## Repository Description

ResumeForge AI is a smart AI-style resume builder web application that helps users create professional resumes, generate career summaries, manage skills, build project sections, preview resume templates, and prepare export-friendly resume content for job applications.

---

## Project Overview

**ResumeForge AI** is a modern resume builder web application designed to help users create clean, structured, and professional resumes from one place.

The application allows users to enter personal information, education details, work experience, projects, technical skills, certifications, and career objectives. It then organizes the information into a professional resume preview with smart AI-style content suggestions.

The first version uses built-in smart logic instead of a paid AI API. This makes the project easy to run, safe to deploy publicly, and free to use without exposing private API keys.

Future versions can be upgraded with real AI APIs such as OpenAI, Gemini, or other language models.

---

## Key Features

| No. | Feature | Description | Included Details |
|---|---|---|---|
| **1** | **Resume Builder Form** | Allows users to enter all important resume information. | Full name, job title, email, phone, location, website, LinkedIn, GitHub, career summary |
| **2** | **AI-Style Summary Generator** | Generates a professional resume summary based on user input. | Uses job title, experience level, skills, and career focus to create a polished summary |
| **3** | **Skill Suggestion Engine** | Suggests relevant skills based on selected job role. | Frontend skills, backend skills, full-stack skills, data skills, design skills, soft skills |
| **4** | **Experience Section** | Lets users add work, internship, or freelance experience. | Company name, role, start date, end date, location, responsibilities, achievements |
| **5** | **Education Section** | Stores academic background information. | Degree, institution, department, passing year, result, location |
| **6** | **Project Section** | Allows users to add portfolio or academic projects. | Project title, technology stack, description, live link, GitHub link |
| **7** | **Certification Section** | Stores professional certificates and achievements. | Certificate name, issuer, issue date, credential link |
| **8** | **Resume Preview** | Shows a real-time resume preview while editing. | Clean layout, structured sections, readable formatting |
| **9** | **Template Switcher** | Allows users to switch resume design style. | Modern template, classic template, minimal template |
| **10** | **Local Save** | Saves resume data in the browser. | Uses Local Storage API so user data remains saved after refresh |
| **11** | **Export-Friendly Layout** | Makes the resume ready for printing or saving as PDF. | Browser print support, PDF-friendly preview, clean formatting |
| **12** | **Completion Score** | Shows how complete the resume is. | Calculates score based on filled sections and missing information |
| **13** | **Smart Bullet Generator** | Helps users create professional achievement bullet points. | Generates action-oriented bullet points based on role and skills |
| **14** | **Responsive Design** | Works on desktop, tablet, and mobile screens. | Mobile-friendly form, dashboard, and preview layout |

---

## Main Modules

| Module | Purpose | Features |
|---|---|---|
| **Authentication-Free MVP Module** | Allows users to use the resume builder without login in the first version. | Instant access, no account required, local browser storage |
| **Personal Information Module** | Stores the user’s basic profile information. | Name, title, email, phone, address, LinkedIn, GitHub, portfolio |
| **Summary Generator Module** | Creates AI-style career summaries. | Role-based summary, experience-based summary, skill-focused summary |
| **Skills Module** | Manages technical and soft skills. | Add skills, remove skills, role-based suggestions, skill grouping |
| **Experience Module** | Manages professional experience entries. | Job title, company, dates, responsibilities, achievements |
| **Education Module** | Manages academic records. | Degree, institution, department, result, passing year |
| **Projects Module** | Manages project information. | Project name, tech stack, description, live link, GitHub link |
| **Certifications Module** | Manages certifications and credentials. | Certificate name, issuer, date, credential URL |
| **Template Module** | Controls resume design styles. | Modern, classic, minimal templates |
| **Preview Module** | Shows live resume output. | Real-time preview, organized sections, print-friendly layout |
| **Export Module** | Helps users save resume output. | Print resume, save as PDF from browser |
| **Progress Module** | Calculates resume completion. | Completion percentage, missing section alerts, improvement suggestions |

---

## User Flow

| Step | User Action | Result |
|---|---|---|
| **1** | Open the web app | User lands on the resume builder dashboard |
| **2** | Enter personal information | Basic resume header is created |
| **3** | Select target role | App suggests skills and summary style |
| **4** | Generate professional summary | AI-style summary appears in the resume preview |
| **5** | Add education | Education section is added to the resume |
| **6** | Add experience | Work experience section is added |
| **7** | Add projects | Project section is displayed with tech stack |
| **8** | Add skills and certifications | Resume becomes more complete |
| **9** | Choose template | Resume design changes instantly |
| **10** | Print or save as PDF | User gets export-ready resume output |

---

## AI-Style Features

This project includes AI-style smart features without using a paid API in the first version.

| AI-Style Feature | How It Works |
|---|---|
| **Summary Generator** | Uses selected job title, skills, and experience level to generate a professional summary |
| **Skill Suggestions** | Suggests skills based on target role |
| **Bullet Point Generator** | Creates resume-style bullet points using action verbs and role-based templates |
| **Resume Completion Score** | Checks missing sections and calculates overall resume strength |
| **Improvement Suggestions** | Gives basic suggestions to improve resume quality |

---

## Target Users

| User Type | Use Case |
|---|---|
| **Students** | Create internship or entry-level resumes |
| **Fresh Graduates** | Build professional resumes for job applications |
| **Software Developers** | Create technical resumes with projects and skills |
| **Freelancers** | Build project-focused resumes |
| **Job Seekers** | Generate structured resumes quickly |
| **Career Switchers** | Organize transferable skills and experience |

---

## Tech Stack

| Category | Technology | Purpose |
|---|---|---|
| **Frontend** | React | Builds the user interface |
| **Build Tool** | Vite | Provides fast development and production build |
| **Language** | JavaScript | Handles application logic |
| **Styling** | CSS3 | Designs layout, templates, and responsive interface |
| **Icons** | Lucide React Icons | Adds modern icons to the interface |
| **Storage** | Local Storage API | Saves resume data in the browser |
| **Export** | Browser Print API | Allows users to print or save resume as PDF |
| **Deployment** | GitHub and Vercel | Stores source code and hosts the live website |

---

## Planned Pages

| Page | Description |
|---|---|
| **Home / Builder Page** | Main resume builder interface |
| **Resume Form Panel** | User input area for resume information |
| **Live Preview Panel** | Shows resume output instantly |
| **Template Selector** | Allows switching between resume templates |
| **Skill Suggestions Panel** | Shows suggested skills based on job role |
| **Export Section** | Allows print or PDF saving |
| **About Section** | Explains the purpose of the app |

---

## Resume Sections

| Section | Included Fields |
|---|---|
| **Header** | Name, title, email, phone, location, links |
| **Professional Summary** | AI-style generated summary |
| **Skills** | Technical skills, tools, soft skills |
| **Experience** | Role, company, duration, responsibilities |
| **Education** | Degree, institution, result, year |
| **Projects** | Project name, description, technology, links |
| **Certifications** | Certificate name, issuer, date, credential link |
| **Languages** | Language name and proficiency level |
| **Achievements** | Awards, honors, accomplishments |

---

## Resume Templates

| Template | Style |
|---|---|
| **Modern Template** | Clean, bold, colorful, suitable for tech jobs |
| **Classic Template** | Traditional, formal, suitable for corporate jobs |
| **Minimal Template** | Simple, clean, ATS-friendly layout |

---

## Installation and Local Setup

Clone the repository:

```bash
git clone https://github.com/addin-alt/resumeforge-ai-resume-builder.git
```

Go to the project folder:

```bash
cd resumeforge-ai-resume-builder
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open in browser:

```text
http://localhost:5173/
```

---

## Production Build

Create a production build:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

---

## Deployment Plan

This project is planned to be deployed using **Vercel**.

Deployment settings:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

After deployment, the live website link will be added here:

```text
Live Link: Coming Soon
```

---

## Project Structure

```text
resumeforge-ai-resume-builder/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## Future Improvements

Planned future upgrades:

- Real AI API integration
- OpenAI or Gemini-powered resume generation
- User authentication
- Cloud resume storage
- Multiple saved resumes
- Resume download as PDF button
- Drag-and-drop section ordering
- ATS score checker
- Cover letter generator
- Job description analyzer
- Resume keyword matcher
- Dark mode
- Multi-language resume support
- Admin dashboard
- Premium template system

---

## Why This Project Is Useful

ResumeForge AI helps users create professional resumes faster and more easily.

Instead of writing a resume manually from scratch, users can enter their information, get smart suggestions, preview their resume instantly, and export it in a clean format.

The project is useful for students, job seekers, developers, freelancers, and anyone who needs a structured professional resume.

---

## Suggested GitHub About Section

### Description

```text
An AI-style resume builder web app for creating professional resumes with smart summaries, skill suggestions, templates, live preview, and export-friendly layout.
```

### Website

```text
Live website link will be added after deployment.
```

### Topics

```text
react
vite
javascript
resume-builder
ai-resume-builder
resume-generator
career-tools
job-application
frontend-project
local-storage
vercel
```

---

## Repository Name

```text
resumeforge-ai-resume-builder
```

---

## Project Name

```text
ResumeForge AI — Smart AI-Style Resume Builder Web App
```

---

## License

This project is open-source and available for educational, personal, and demonstration purposes.

---

<div align="center">

## 👨‍💻 Author

<h2>Addin</h2>

<p>
  Developer of <strong>ResumeForge AI — Smart AI-Style Resume Builder Web App</strong>
</p>

<p>
  A modern web application project focused on resume creation, smart content generation, live preview, template switching, and export-friendly resume building.
</p>

<br />

### 🌐 Connect With Me

<p>
  <a href="https://linkedin.com/in/addin-alt-" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/LinkedIn-Addin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>

  <a href="https://github.com/addin-alt" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/GitHub-addin--alt-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>

  <a href="https://facebook.com/addin.alt" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/Facebook-addin.alt-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook" />
  </a>

  <a href="https://www.instagram.com/addin_alt/" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/Instagram-addin__alt-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" />
  </a>

  <a href="mailto:YOUR_EMAIL_HERE" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/Email-Contact%20Me-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

<br />

<p>
  <strong>Created and maintained by Addin</strong>
</p>

</div>