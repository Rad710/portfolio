# 0014 — research

Two bodies of research drove this task: (A) portfolio-page writing guidance for the website copy, and
(B) a résumé-writing audit of the CV. Principles below; each key claim carries its source.

---

## A. Portfolio-page copywriting (drove the `site.ts` rewrite)

**Hero headline** — a bare job title is not a headline. Use one of three shapes: "I [do X] for [who]";
"[discipline] + [defining focus]"; or "[what you help people achieve] through [your craft]". Avoid
overthought-creative slogans that "try so hard to sound original they stop being clear" — the exact failure
of "software hospitals run on".
→ mnml, *Three Portfolio Headline Formulas* — https://mnml.page/blog/portfolio-headline-examples

**About section** — first person, ~3–5 sentences, plain language, one genuine human detail; four-part shape:
who you are + what you do → proof/strength → what you want → a human touch. Explicitly *humanize AI text so
your voice isn't lost in generic phrasing*. Avoid buzzword soup, clichés, generic adjectives.
→ TailorCV, *Portfolio About Me Section* — https://thetailorcv.com/blog/portfolio-about-me-section
→ Springboard — https://www.springboard.com/blog/software-engineering/software-engineer-portfolio/
→ Wix — https://www.wix.com/blog/how-to-build-a-software-engineering-portfolio

**Applied to `site.ts`:** dropped slogan taglines; cut em-dash overuse, rule-of-three cadences, "under the
hood", and meta-labels ("What I reach for, grouped by where it lives in the stack"); made About first-person
and specific; replaced a paragraph that just repeated the lead with a real detail (self-hosting). EN + ES.

---

## B. Résumé audit of the CV — grade A− (Strong)

Sources cross-checked (8): MIT CAPD, Harvard FAS, UC Berkeley I-School, Yale OCS, Gergely Orosz's
*The Tech Resume Inside Out*, the Tech Interview Handbook, Jobscan (ATS), and interviewing.io's hiring data.

### Consensus principles used
- **Length/format:** one page for early-career; text-layer PDF; single column; 0.5–1" margins; don't shrink
  fonts to cram. — MIT CAPD, Berkeley, Tech Interview Handbook.
- **Bullets:** lead with a strong action verb describing *your* contribution; show impact, not duties; use
  the XYZ / "accomplished X as measured by Y by doing Z" shape; ~3–5 per role. — Yale OCS
  (https://ocs.yale.edu/resources/writing-impactful-resume-bullets/), Orosz (https://thetechresume.com/),
  Google/Bock (https://www.cnbc.com/2018/08/16/google-recruiters-share-the-3-part-formula-for-stronger-resumes.html).
- **Summary:** objectives are dead; a summary earns its place only when it clarifies scope/seniority/pivot.
  Ours tells a real scope story → keep (tightened). — Orosz; CoreCV.
- **ATS:** single column, no tables/icons/photos, standard section names, contact in the body (not a Word
  header field), mirror JD keywords, spell out acronyms. — MIT CAPD
  (https://capd.mit.edu/resources/make-your-resume-ats-friendly/), Jobscan
  (https://www.jobscan.co/blog/resume-tables-columns-ats/).
- **Skills:** plain text lists; **no** progress bars / star ratings (subjective, ATS-hostile). — Hiration,
  Tech Interview Handbook.
- **Tense/pronouns:** no first-person pronouns on a résumé (implied first person); past for finished, present
  for current; active voice. — Harvard FAS, MIT CAPD.
- **Quantifying without hard metrics:** "quantify" ≠ invent a percentage. Substitute scope, scale,
  frequency, volume, recognition. Fabricated numbers backfire in interviews. — Orosz; MIT CAPD; The Muse.

### Dimension verdicts (CV as audited)
| Dimension | Verdict |
|---|---|
| Length/density (1 page, PDF, single-column serif) | Strong |
| ATS parseability | Strong |
| Skills format (text, no bars) | Strong |
| Section order + GPA≥3.0 | Strong |
| Contact + links (every project linked) | Strong |
| Red flags / clichés | Strong (one hedge nit) |
| Quantifying w/o metrics (scope/scale/frequency/recognition) | Strong — no-vanity-metrics stance is textbook |
| Bullet construction | Adequate — two bullets overloaded |
| Summary | Adequate — earned, but used "I" |
| Tense / pronouns | **Needs work** — the one clear consensus violation |

### Fixes applied (this task)
1. **Dropped first-person "I"** from the résumé summary (implied first person; "handle" → "own"). Résumé-only
   — the website deliberately keeps first person per research A.
2. **Cut the hedge** "…with only minor launch-day issues"; "shipped to production" is the stronger honest
   claim (Orosz: don't undercut yourself).
3. **Tightened** the React/Lit bullet to lead with the decision.
4. **Split** the dense JSP/Struts bullet and added the **~60% rsbuild build-time** figure — a real,
   owner-supplied metric (the endorsed alternative to inventing one).

### Deferred / owner's call
- **PDF vs DOCX** is the one genuinely contested guideline. The text-layer PDF is safe; keep a DOCX only to
  match postings that explicitly demand Word.
- interviewing.io's data: typos are the strongest negative signal (stronger than length/GPA) — final
  proofread of both languages is the non-negotiable.
