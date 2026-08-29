---
name: update-portfolio-cv
description: >
  Use this skill when the user asks to update, add, or remove any content in
  Hoàng Xuân Trường's portfolio CV — such as work experience, projects,
  skills, personal info, education, certifications, or the hero section.
---

# Portfolio CV Update Skill

This skill covers how to update any section of the portfolio located at
`/Users/truonghoang/Documents/dev/portfolio/`.

---

## Project Structure

```
portfolio/
├── data/
│   └── experience.ts          ← Work experience + projects (primary data file)
├── components/
│   ├── Hero.tsx               ← Personal info, summary, stats bar
│   ├── Skills.tsx             ← Technical skills organized by category
│   ├── Experience.tsx         ← Renders data/experience.ts (DO NOT edit for content)
│   └── Education.tsx          ← Education + certifications (hardcoded)
└── app/[locale]/
    └── page.tsx               ← Footer copyright line
```

**Key rule**: `Experience.tsx` is a pure renderer — **never** edit it for content changes. Always edit `data/experience.ts`.

---

## Data Types (`data/experience.ts`)

```typescript
type Project = {
  name?: string;           // Project/product name (optional)
  description?: string;    // One-line tagline (optional)
  achievements: string[];  // Bullet points — each is one accomplishment
  technologies?: string;   // Tech stack, separated by " · "
};

type Experience = {
  company: string;         // Company name
  role: string;            // Job title
  period: string;          // e.g. "Sep 2025 – Present"
  description?: string;    // Optional company-level summary
  projects: Project[];     // One or more projects/products worked on
};
```

---

## Common Update Tasks

### 1. Add a new work experience

Add a new object to the top of the array returned in `getExperiencesData()` in `data/experience.ts`:

```typescript
{
  company: "Company Name",
  role: "Job Title",
  period: "Mon YYYY – Mon YYYY",   // Use "Present" if current
  description: "Optional one-sentence overview of your role.",
  projects: [
    {
      name: "Product / Project Name",
      description: "Short tagline",
      achievements: [
        "First bullet point — be specific and quantify impact where possible.",
        "Second bullet point.",
      ],
      technologies: "Go · PostgreSQL · Kubernetes · Docker",
    },
  ],
},
```

> **Order**: Most recent experience goes **first** in the array.

---

### 2. Add a project to an existing experience

Find the matching `company` entry in `data/experience.ts`, then add a new object to its `projects` array:

```typescript
{
  name: "New Project Name",
  description: "Short tagline",
  achievements: [
    "What you built or improved.",
    "Measurable outcome if available.",
  ],
  technologies: "NestJS · TypeScript · Redis",
},
```

---

### 3. Add an achievement to an existing project

Find the correct `company` → `projects[]` → `project.name`, then push a new string into `achievements`:

```typescript
achievements: [
  // ... existing bullets ...
  "New achievement to append.",
],
```

---

### 4. Update personal info / Hero section

Edit `components/Hero.tsx` — all fields are hardcoded English strings:

| Field | Location in file |
|---|---|
| Name | `<h1>HOÀNG XUÂN TRƯỜNG</h1>` |
| Role / Title | `<h2>SOFTWARE ENGINEER</h2>` |
| Availability badge | `AVAILABLE FOR OPPORTUNITIES` |
| Phone | `href="tel:..."` and `<span>` text |
| Email | `href="mailto:..."` and `<span>` text |
| Location | `<span>Cau Giay, Ha Noi</span>` |
| Summary paragraph | Inside the `<p>` with `dangerouslySetInnerHTML`… wait, now it's a plain `<p>` — use `<strong>` for emphasis |
| Stats bar (4 cards) | The 4 `<div>` blocks with `Server`, `Cloud`, `Code2`, `Database` icons |

Example — updating the summary:
```tsx
<p className="text-muted-foreground leading-relaxed text-sm md:text-base">
  Software Engineer with <strong className="text-foreground font-semibold">3+ years</strong> of experience...
</p>
```

---

### 5. Update skills categories

Edit `components/Skills.tsx` — the `skillsData` array at the top of the file:

```typescript
const skillsData = [
  {
    category: "Languages",
    skills: ["Golang", "TypeScript", ...],
  },
  // add/remove categories or skills freely
];
```

To **add a category**: Add a new object to the array.  
To **remove a skill**: Delete it from the `skills` array.  
To **add a skill**: Append to the relevant `skills` array.

---

### 6. Update education

Edit `components/Education.tsx` — all content is hardcoded:

- University name → find `VNU University of Engineering and Technology`
- Period → find `Oct 2022 – Present`
- Degree → find `Computer Science`
- Cert name, issuer, date, details → look for `Aptis ESOL` block

---

### 7. Add personal projects section

Currently there is **no personal projects section**. To add one:

1. Create `data/projects.ts` with a `PersonalProject[]` type:
```typescript
export type PersonalProject = {
  name: string;
  description: string;
  highlights: string[];
  technologies: string;
  url?: string;          // GitHub or live URL
  period?: string;
};

export const personalProjects: PersonalProject[] = [
  {
    name: "Project Name",
    description: "What it does in one sentence.",
    highlights: [
      "Key technical decision or achievement.",
    ],
    technologies: "Go · PostgreSQL · Docker",
    url: "https://github.com/TruongHoang2004/...",
    period: "Jan 2025 – Present",
  },
];
```

2. Create `components/PersonalProjects.tsx` by copying the structure of `Experience.tsx` and adapting it.

3. Import and add `<PersonalProjects />` to `app/[locale]/page.tsx` between `<Skills />` and `<Experience />`.

---

### 8. Update the footer copyright

Edit `app/[locale]/page.tsx`:

```tsx
<p>© {new Date().getFullYear()} Hoàng Xuân Trường. All rights reserved.</p>
```

---

## Workflow

1. **Read the relevant file** listed above before making edits.
2. **Edit only the data** — never change layout/styling unless the user asks.
3. **Keep achievements specific**: start with a strong verb, include metrics where real.
4. **Tech stack format**: use ` · ` (space-dot-space) as separator in `technologies` strings.
5. After editing, the dev server hot-reloads automatically — no restart needed.

---

## File Quick Reference

| What to update | File to edit |
|---|---|
| Work experience or projects | `data/experience.ts` |
| Personal info, summary, stats | `components/Hero.tsx` |
| Technical skills | `components/Skills.tsx` |
| Education / certifications | `components/Education.tsx` |
| Personal projects (new section) | `data/projects.ts` + new component |
| Footer text | `app/[locale]/page.tsx` |
