import { useMemo, useState } from "react";
import "./App.css";

const STORAGE_KEY = "resumeforge-masterpiece-v1";

const emptyResume = {
  template: "modern",
  targetRole: "",
  experienceLevel: "Entry Level",
  tone: "Professional",
  jobDescription: "",
  keywords: [],
  personal: {
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    portfolio: "",
    summary: "",
  },
  skills: [],
  experience: [],
  education: [],
  projects: [],
  certifications: [],
  languages: [],
  achievements: [],
};

const demoResume = {
  template: "executive",
  targetRole: "Full Stack Developer",
  experienceLevel: "Entry Level",
  tone: "Technical",
  jobDescription: "",
  keywords: ["React", "JavaScript", "Dashboard", "API", "Deployment"],
  personal: {
    name: "Demo User",
    title: "Full Stack Developer",
    email: "demo@example.com",
    phone: "+880 1000 000000",
    location: "Dhaka, Bangladesh",
    linkedin: "https://linkedin.com/in/demo-user",
    github: "https://github.com/demo-user",
    portfolio: "https://demo-user.dev",
    summary:
      "Entry-level full stack developer with hands-on experience building responsive web applications, dashboard interfaces, and practical digital tools using React, JavaScript, and modern web technologies.",
  },
  skills: ["React", "JavaScript", "Vite", "CSS3", "Firebase", "GitHub", "Vercel", "Responsive Design"],
  experience: [
    {
      role: "Frontend Developer",
      company: "Personal Projects",
      duration: "2025 - Present",
      location: "Remote",
      details:
        "Built responsive web applications using React, Vite, JavaScript, and CSS. Designed dashboard interfaces, managed browser-based data persistence, and deployed projects publicly using GitHub and Vercel.",
    },
  ],
  education: [
    {
      degree: "Computer Science / Related Field",
      institution: "Your University Name",
      year: "2026",
      result: "Add result here",
    },
  ],
  projects: [
    {
      name: "VeloNexus",
      stack: "React, Vite, JavaScript, CSS, Vercel",
      description:
        "A smart vehicle tracking, fuel, mileage, garage, and insurance management platform with dashboard analytics and Google Maps location links.",
      live: "https://velonexus-smart-vehicle-management.vercel.app/",
      github: "https://github.com/addin-alt/velonexus-smart-vehicle-management",
    },
  ],
  certifications: [{ name: "Web Development Certificate", issuer: "Online Platform", year: "2025" }],
  languages: [{ name: "English", level: "Professional" }, { name: "Bangla", level: "Native" }],
  achievements: [{ title: "Built and deployed multiple public web applications using GitHub and Vercel." }],
};

const jobRoles = [
  "Frontend Developer", "Backend Developer", "Full Stack Developer", "React Developer", "JavaScript Developer",
  "Node.js Developer", "Python Developer", "Java Developer", "PHP Developer", "Mobile App Developer",
  "Android Developer", "iOS Developer", "Flutter Developer", "Software Engineer", "Web Developer",
  "UI Developer", "WordPress Developer", "Shopify Developer", "DevOps Engineer", "Cloud Engineer",
  "Cybersecurity Analyst", "Network Engineer", "System Administrator", "Database Administrator", "Data Analyst",
  "Data Scientist", "Machine Learning Engineer", "AI Engineer", "Business Analyst", "Product Manager",
  "Project Manager", "Scrum Master", "QA Engineer", "Software Tester", "Automation Tester",
  "UI/UX Designer", "Graphic Designer", "Motion Designer", "Digital Marketer", "SEO Specialist",
  "Content Writer", "Copywriter", "Social Media Manager", "E-commerce Manager", "Sales Executive",
  "Marketing Executive", "Customer Support Specialist", "HR Executive", "Recruiter", "Accountant",
  "Financial Analyst", "Operations Manager", "Supply Chain Analyst", "Logistics Coordinator", "Civil Engineer",
  "Mechanical Engineer", "Electrical Engineer", "Biomedical Engineer", "Pharmacist", "Medical Representative",
  "Nurse", "Teacher", "Lecturer", "Research Assistant", "Administrative Officer",
  "Legal Assistant", "Data Entry Specialist", "Virtual Assistant", "Video Editor", "Photographer",
  "Architect", "Interior Designer", "Hotel Manager", "Travel Consultant", "Entrepreneur"
];

const templates = ["modern", "classic", "minimal", "executive", "creative", "ats"];

function getSuggestedSkills(role) {
  const r = role.toLowerCase();
  const core = ["Communication", "Problem Solving", "Teamwork", "Time Management", "Documentation"];

  if (r.includes("frontend") || r.includes("react") || r.includes("web") || r.includes("javascript")) {
    return [...core, "React", "JavaScript", "HTML5", "CSS3", "Responsive Design", "REST API", "Git", "Vite"];
  }

  if (r.includes("backend") || r.includes("node") || r.includes("database")) {
    return [...core, "Node.js", "Express.js", "SQL", "MongoDB", "REST API", "Authentication", "API Security"];
  }

  if (r.includes("data") || r.includes("analyst") || r.includes("scientist")) {
    return [...core, "Python", "SQL", "Excel", "Power BI", "Data Cleaning", "Statistics", "Data Visualization"];
  }

  if (r.includes("design") || r.includes("ui") || r.includes("ux")) {
    return [...core, "Figma", "Wireframing", "Prototyping", "User Research", "Design Systems", "Visual Design"];
  }

  if (r.includes("marketing") || r.includes("seo") || r.includes("content") || r.includes("social")) {
    return [...core, "SEO", "Content Strategy", "Google Analytics", "Meta Ads", "Copywriting", "Campaign Management"];
  }

  if (r.includes("manager") || r.includes("product") || r.includes("project")) {
    return [...core, "Leadership", "Planning", "Stakeholder Management", "Agile", "Reporting", "Risk Management"];
  }

  if (r.includes("engineer")) {
    return [...core, "Technical Analysis", "Project Planning", "Quality Control", "AutoCAD", "Troubleshooting"];
  }

  return [...core, "Microsoft Office", "Research", "Reporting", "Client Communication", "Process Improvement"];
}

function App() {
  const [page, setPage] = useState("home");
  const [activeSection, setActiveSection] = useState("profile");
  const [skillInput, setSkillInput] = useState("");

  const [resume, setResume] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : emptyResume;
    } catch {
      return emptyResume;
    }
  });

  function saveResume(nextResume) {
    setResume(nextResume);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextResume));
  }

  function startNew() {
    saveResume(emptyResume);
    setPage("builder");
    setActiveSection("profile");
  }

  function loadSample() {
    saveResume(demoResume);
    setPage("builder");
    setActiveSection("profile");
  }

  function clearData() {
    localStorage.removeItem(STORAGE_KEY);
    setResume(emptyResume);
    setPage("home");
  }

  function updateRoot(field, value) {
    saveResume({ ...resume, [field]: value });
  }

  function updatePersonal(field, value) {
    saveResume({ ...resume, personal: { ...resume.personal, [field]: value } });
  }

  function addSkill() {
    const value = skillInput.trim();
    if (!value) return;
    saveResume({ ...resume, skills: Array.from(new Set([...resume.skills, value])) });
    setSkillInput("");
  }

  function removeSkill(skill) {
    saveResume({ ...resume, skills: resume.skills.filter((item) => item !== skill) });
  }

  function suggestSkills() {
    const role = resume.targetRole || resume.personal.title || "Professional";
    const merged = Array.from(new Set([...resume.skills, ...getSuggestedSkills(role)]));
    saveResume({ ...resume, skills: merged });
  }

  function generateSummary() {
    const role = resume.targetRole || resume.personal.title || "professional";
    const skills = resume.skills.length ? resume.skills.slice(0, 7).join(", ") : "problem solving, communication, and modern tools";

    const summary =
      resume.tone === "Technical"
        ? `${resume.experienceLevel} ${role} with practical experience in ${skills}. Skilled at building structured, reliable, and performance-focused solutions with clean workflows and strong technical documentation.`
        : resume.tone === "Confident"
        ? `Results-focused ${resume.experienceLevel.toLowerCase()} ${role} with strong ability to deliver organized, user-focused, and practical solutions using ${skills}. Able to learn quickly, solve problems, and contribute to measurable project outcomes.`
        : `${resume.experienceLevel} ${role} with hands-on experience in ${skills}. Skilled at creating clean, organized, and user-focused solutions with strong attention to detail, usability, and real-world problem solving.`;

    updatePersonal("summary", summary);
  }

  function generateBullet(index) {
    const item = resume.experience[index];
    const role = item.role || resume.targetRole || "professional role";
    const bullet = `Improved ${role.toLowerCase()} workflows by applying structured problem-solving, clear communication, and practical tools to deliver reliable and user-focused results.`;

    updateItem("experience", index, "details", item.details ? `${item.details}\n${bullet}` : bullet);
  }

  function extractKeywords() {
    const text = resume.jobDescription.toLowerCase();
    const words = text
      .replace(/[^a-zA-Z0-9\s.+#-]/g, " ")
      .split(/\s+/)
      .filter((word) => word.length > 3);

    const stop = new Set(["with", "from", "this", "that", "will", "your", "have", "must", "able", "work", "team", "role", "candidate"]);
    const counts = {};

    words.forEach((word) => {
      if (!stop.has(word)) counts[word] = (counts[word] || 0) + 1;
    });

    const keywords = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 14)
      .map(([word]) => word);

    saveResume({ ...resume, keywords });
  }

  function addItem(section, item) {
    saveResume({ ...resume, [section]: [...resume[section], item] });
  }

  function updateItem(section, index, field, value) {
    saveResume({
      ...resume,
      [section]: resume[section].map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: value } : item
      ),
    });
  }

  function removeItem(section, index) {
    saveResume({
      ...resume,
      [section]: resume[section].filter((_, itemIndex) => itemIndex !== index),
    });
  }

  const completion = useMemo(() => {
    const checks = [
      resume.personal.name,
      resume.personal.title,
      resume.personal.email,
      resume.personal.phone,
      resume.personal.location,
      resume.personal.summary,
      resume.skills.length >= 5,
      resume.experience.length > 0,
      resume.education.length > 0,
      resume.projects.length > 0,
      resume.certifications.length > 0,
      resume.languages.length > 0,
    ];
    return Math.round((checks.filter(Boolean).length / checks.length) * 100);
  }, [resume]);

  const atsScore = useMemo(() => {
    const text = JSON.stringify(resume).toLowerCase();
    const matched = resume.keywords.filter((keyword) => text.includes(keyword.toLowerCase())).length;
    const keywordScore = resume.keywords.length ? Math.round((matched / resume.keywords.length) * 35) : 0;
    return Math.min(100, Math.round(completion * 0.65 + keywordScore));
  }, [resume, completion]);

  if (page === "home") {
    return (
      <main className="homepage">
        <nav className="home-nav">
          <div className="logo">
            <span>RF</span>
            <strong>ResumeForge AI</strong>
          </div>
        </nav>

        <section className="hero-clean">
          <p className="eyebrow">AI-Style Resume Builder</p>
          <h1>Build a clean, professional resume in minutes.</h1>
          <p>
            Create, improve, preview, and export your resume with smart summaries,
            role-based skills, job keyword matching, and multiple professional templates.
          </p>

          <div className="start-grid">
            <button onClick={startNew}>
              <strong>Create New Resume</strong>
              <span>Start with a clean empty form.</span>
            </button>

            <button onClick={loadSample}>
              <strong>Explore Sample Resume</strong>
              <span>Open a filled demo to understand the features.</span>
            </button>
          </div>
        </section>

        <section className="feature-grid">
          <Feature title="Smart Summary" text="Generate a polished summary from role, tone, level, and skills." />
          <Feature title="Job Keywords" text="Paste a job description and extract important resume keywords." />
          <Feature title="ATS Score" text="Check completion and keyword match before exporting." />
          <Feature title="Templates" text="Modern, classic, minimal, executive, creative, and ATS layouts." />
          <Feature title="Live Preview" text="Every change updates the resume preview instantly." />
          <Feature title="PDF Ready" text="Print or save your finished resume as a PDF." />
        </section>
      </main>
    );
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="side-logo">
          <span>RF</span>
          <div>
            <strong>ResumeForge AI</strong>
            <small>Builder Workspace</small>
          </div>
        </div>

        <div className="score-box">
          <span>Resume Score</span>
          <strong>{completion}%</strong>
          <div className="progress"><div style={{ width: `${completion}%` }}></div></div>
        </div>

        {["profile", "skills", "experience", "education", "projects", "extras", "optimize", "preview"].map((section) => (
          <button key={section} className={activeSection === section ? "active" : ""} onClick={() => setActiveSection(section)}>
            {section[0].toUpperCase() + section.slice(1)}
          </button>
        ))}

        <button onClick={() => setPage("home")}>Homepage</button>
        <button className="print" onClick={() => window.print()}>Print / Save PDF</button>
        <button className="danger" onClick={clearData}>Clear Data</button>
      </aside>

      <main className="builder-main">
        <header className="builder-top">
          <div>
            <h2>Resume Builder</h2>
            <p>Simple input. Smart suggestions. Professional output.</p>
          </div>

          <div className="top-actions">
            <button onClick={loadSample}>Load Sample</button>
            <button className="primary" onClick={() => window.print()}>Export PDF</button>
          </div>
        </header>

        <div className={activeSection === "preview" ? "preview-only" : "workspace"}>
          {activeSection !== "preview" && (
            <section className="editor-panel">
              {activeSection === "profile" && (
                <>
                  <SectionTitle title="Profile Setup" note="Choose a resume style and add your basic information." />
                  <div className="grid two">
                    <Select label="Template" value={resume.template} onChange={(v) => updateRoot("template", v)} options={templates} />
                    <Select label="Target Role" value={resume.targetRole} onChange={(v) => updateRoot("targetRole", v)} options={["", ...jobRoles]} />
                    <Select label="Experience Level" value={resume.experienceLevel} onChange={(v) => updateRoot("experienceLevel", v)} options={["Entry Level", "Junior", "Mid Level", "Senior", "Freelance"]} />
                    <Select label="Summary Tone" value={resume.tone} onChange={(v) => updateRoot("tone", v)} options={["Professional", "Technical", "Confident"]} />
                  </div>

                  <div className="grid two">
                    <Input label="Full Name" value={resume.personal.name} onChange={(v) => updatePersonal("name", v)} />
                    <Input label="Professional Title" value={resume.personal.title} onChange={(v) => updatePersonal("title", v)} />
                    <Input label="Email" value={resume.personal.email} onChange={(v) => updatePersonal("email", v)} />
                    <Input label="Phone" value={resume.personal.phone} onChange={(v) => updatePersonal("phone", v)} />
                    <Input label="Location" value={resume.personal.location} onChange={(v) => updatePersonal("location", v)} />
                    <Input label="LinkedIn" value={resume.personal.linkedin} onChange={(v) => updatePersonal("linkedin", v)} />
                    <Input label="GitHub" value={resume.personal.github} onChange={(v) => updatePersonal("github", v)} />
                    <Input label="Portfolio" value={resume.personal.portfolio} onChange={(v) => updatePersonal("portfolio", v)} />
                  </div>

                  <label>Professional Summary</label>
                  <textarea value={resume.personal.summary} onChange={(e) => updatePersonal("summary", e.target.value)} placeholder="Write your summary or generate one." />
                  <button className="primary" onClick={generateSummary}>Generate Summary</button>
                </>
              )}

              {activeSection === "skills" && (
                <>
                  <SectionTitle title="Skills" note="Add skills manually or generate suggestions from your target role." />
                  <div className="inline-form">
                    <input value={skillInput} onChange={(e) => setSkillInput(e.target.value)} placeholder="Add skill" />
                    <button className="primary" onClick={addSkill}>Add</button>
                  </div>
                  <button className="secondary" onClick={suggestSkills}>Suggest Skills</button>
                  <div className="skill-list">
                    {resume.skills.length === 0 ? <p className="empty">No skills added yet.</p> : resume.skills.map((skill) => (
                      <span key={skill}>{skill}<button onClick={() => removeSkill(skill)}>×</button></span>
                    ))}
                  </div>
                </>
              )}

              {activeSection === "experience" && (
                <>
                  <SectionTitle title="Experience" note="Add work, internship, freelance, or project-based experience." />
                  <button className="primary" onClick={() => addItem("experience", { role: "", company: "", duration: "", location: "", details: "" })}>Add Experience</button>
                  {resume.experience.map((item, index) => (
                    <div className="card" key={index}>
                      <button className="remove" onClick={() => removeItem("experience", index)}>Remove</button>
                      <div className="grid two">
                        <Input label="Role" value={item.role} onChange={(v) => updateItem("experience", index, "role", v)} />
                        <Input label="Company" value={item.company} onChange={(v) => updateItem("experience", index, "company", v)} />
                        <Input label="Duration" value={item.duration} onChange={(v) => updateItem("experience", index, "duration", v)} />
                        <Input label="Location" value={item.location} onChange={(v) => updateItem("experience", index, "location", v)} />
                      </div>
                      <label>Details</label>
                      <textarea value={item.details} onChange={(e) => updateItem("experience", index, "details", e.target.value)} />
                      <button className="secondary" onClick={() => generateBullet(index)}>Generate Bullet</button>
                    </div>
                  ))}
                </>
              )}

              {activeSection === "education" && (
                <>
                  <SectionTitle title="Education" note="Add your academic background." />
                  <button className="primary" onClick={() => addItem("education", { degree: "", institution: "", year: "", result: "" })}>Add Education</button>
                  {resume.education.map((item, index) => (
                    <div className="card" key={index}>
                      <button className="remove" onClick={() => removeItem("education", index)}>Remove</button>
                      <div className="grid two">
                        <Input label="Degree" value={item.degree} onChange={(v) => updateItem("education", index, "degree", v)} />
                        <Input label="Institution" value={item.institution} onChange={(v) => updateItem("education", index, "institution", v)} />
                        <Input label="Year" value={item.year} onChange={(v) => updateItem("education", index, "year", v)} />
                        <Input label="Result" value={item.result} onChange={(v) => updateItem("education", index, "result", v)} />
                      </div>
                    </div>
                  ))}
                </>
              )}

              {activeSection === "projects" && (
                <>
                  <SectionTitle title="Projects" note="Add portfolio, academic, or professional projects." />
                  <button className="primary" onClick={() => addItem("projects", { name: "", stack: "", description: "", live: "", github: "" })}>Add Project</button>
                  {resume.projects.map((item, index) => (
                    <div className="card" key={index}>
                      <button className="remove" onClick={() => removeItem("projects", index)}>Remove</button>
                      <div className="grid two">
                        <Input label="Project Name" value={item.name} onChange={(v) => updateItem("projects", index, "name", v)} />
                        <Input label="Tech Stack" value={item.stack} onChange={(v) => updateItem("projects", index, "stack", v)} />
                        <Input label="Live Link" value={item.live} onChange={(v) => updateItem("projects", index, "live", v)} />
                        <Input label="GitHub Link" value={item.github} onChange={(v) => updateItem("projects", index, "github", v)} />
                      </div>
                      <label>Description</label>
                      <textarea value={item.description} onChange={(e) => updateItem("projects", index, "description", e.target.value)} />
                    </div>
                  ))}
                </>
              )}

              {activeSection === "extras" && (
                <>
                  <SectionTitle title="Extra Sections" note="Add certificates, languages, and achievements." />

                  <h3>Certifications</h3>
                  <button className="primary" onClick={() => addItem("certifications", { name: "", issuer: "", year: "" })}>Add Certification</button>
                  {resume.certifications.map((item, index) => (
                    <div className="card" key={index}>
                      <button className="remove" onClick={() => removeItem("certifications", index)}>Remove</button>
                      <div className="grid three">
                        <Input label="Certificate" value={item.name} onChange={(v) => updateItem("certifications", index, "name", v)} />
                        <Input label="Issuer" value={item.issuer} onChange={(v) => updateItem("certifications", index, "issuer", v)} />
                        <Input label="Year" value={item.year} onChange={(v) => updateItem("certifications", index, "year", v)} />
                      </div>
                    </div>
                  ))}

                  <h3>Languages</h3>
                  <button className="primary" onClick={() => addItem("languages", { name: "", level: "" })}>Add Language</button>
                  {resume.languages.map((item, index) => (
                    <div className="card" key={index}>
                      <button className="remove" onClick={() => removeItem("languages", index)}>Remove</button>
                      <div className="grid two">
                        <Input label="Language" value={item.name} onChange={(v) => updateItem("languages", index, "name", v)} />
                        <Input label="Level" value={item.level} onChange={(v) => updateItem("languages", index, "level", v)} />
                      </div>
                    </div>
                  ))}

                  <h3>Achievements</h3>
                  <button className="primary" onClick={() => addItem("achievements", { title: "" })}>Add Achievement</button>
                  {resume.achievements.map((item, index) => (
                    <div className="card" key={index}>
                      <button className="remove" onClick={() => removeItem("achievements", index)}>Remove</button>
                      <Input label="Achievement" value={item.title} onChange={(v) => updateItem("achievements", index, "title", v)} />
                    </div>
                  ))}
                </>
              )}

              {activeSection === "optimize" && (
                <>
                  <SectionTitle title="Job Match Optimizer" note="Paste a job description to find useful keywords for your resume." />
                  <label>Job Description</label>
                  <textarea value={resume.jobDescription} onChange={(e) => updateRoot("jobDescription", e.target.value)} placeholder="Paste job post here." />
                  <button className="primary" onClick={extractKeywords}>Extract Keywords</button>

                  <div className="score-panel">
                    <h3>ATS Match Score: {atsScore}%</h3>
                    <div className="progress"><div style={{ width: `${atsScore}%` }}></div></div>
                  </div>

                  <div className="skill-list">
                    {resume.keywords.length === 0 ? <p className="empty">No keywords extracted yet.</p> : resume.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
                  </div>
                </>
              )}
            </section>
          )}

          <section className="preview-card">
            <ResumePreview resume={resume} />
          </section>
        </div>
      </main>
    </div>
  );
}

function Feature({ title, text }) {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function SectionTitle({ title, note }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <p>{note}</p>
    </div>
  );
}

function Input({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input value={value || ""} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <div>
      <label>{label}</label>
      <select value={value || ""} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => <option key={option} value={option}>{option || "Select option"}</option>)}
      </select>
    </div>
  );
}

function ResumePreview({ resume }) {
  const p = resume.personal;

  return (
    <article className={`resume ${resume.template}`}>
      <header>
        <h1>{p.name || "Your Name"}</h1>
        <h2>{p.title || resume.targetRole || "Professional Title"}</h2>
        <p>{[p.email, p.phone, p.location].filter(Boolean).join(" | ") || "email@example.com | phone | location"}</p>
        <p>{[p.linkedin, p.github, p.portfolio].filter(Boolean).join(" | ")}</p>
      </header>

      <Section title="Professional Summary">
        <p>{p.summary || "Your professional summary will appear here."}</p>
      </Section>

      <Section title="Skills">
        {resume.skills.length ? <div className="resume-skills">{resume.skills.map((skill) => <span key={skill}>{skill}</span>)}</div> : <p className="muted">Skills will appear here.</p>}
      </Section>

      <Section title="Experience">
        {resume.experience.length ? resume.experience.map((item, index) => (
          <div className="resume-item" key={index}>
            <div className="resume-row"><strong>{item.role || "Role"} — {item.company || "Company"}</strong><span>{item.duration}</span></div>
            <em>{item.location}</em>
            <p>{item.details}</p>
          </div>
        )) : <p className="muted">Experience will appear here.</p>}
      </Section>

      <Section title="Projects">
        {resume.projects.length ? resume.projects.map((item, index) => (
          <div className="resume-item" key={index}>
            <strong>{item.name || "Project Name"}</strong>
            <p><em>{item.stack}</em></p>
            <p>{item.description}</p>
          </div>
        )) : <p className="muted">Projects will appear here.</p>}
      </Section>

      <Section title="Education">
        {resume.education.length ? resume.education.map((item, index) => (
          <div className="resume-item" key={index}>
            <div className="resume-row"><strong>{item.degree || "Degree"}</strong><span>{item.year}</span></div>
            <p>{item.institution}</p>
            <p>{item.result}</p>
          </div>
        )) : <p className="muted">Education will appear here.</p>}
      </Section>

      <div className="resume-two">
        <Section title="Certifications">
          {resume.certifications.length ? resume.certifications.map((item, index) => <p key={index}><strong>{item.name}</strong> — {item.issuer} {item.year}</p>) : <p className="muted">Certifications will appear here.</p>}
        </Section>

        <Section title="Languages">
          {resume.languages.length ? resume.languages.map((item, index) => <p key={index}>{item.name} — {item.level}</p>) : <p className="muted">Languages will appear here.</p>}
        </Section>
      </div>

      <Section title="Achievements">
        {resume.achievements.length ? <ul>{resume.achievements.map((item, index) => <li key={index}>{item.title}</li>)}</ul> : <p className="muted">Achievements will appear here.</p>}
      </Section>
    </article>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export default App;
