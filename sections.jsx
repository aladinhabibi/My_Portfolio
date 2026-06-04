// Sections — Hero, About, Experience, Skills, Projects, Contact
const { useState, useEffect, useRef } = React;

function Hero({ onContact }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText('aladinhabibii@gmail.com');
      setCopied(true);
      window.dispatchEvent(new CustomEvent('app-toast', { detail: 'Email copied to clipboard' }));
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {}
  };
  return (
    <section className="hero" id="home">
      <div className="hero-circle" />
      <div className="hero-left reveal">
        <div className="hero-eyebrow">
          <span className="wave">👋</span> Hello, I'm
        </div>
        <h1 className="hero-name display">
          <span className="first">Ala Din</span>
          <span className="last">HABIBI.</span>
        </h1>
        <div className="hero-meta">
          <span className="pill">Full-Stack Developer</span>
          <span className="loc"><Icon.pin /> Tunis, TN</span>
        </div>
        <p className="hero-bio">
          Mobile & full-stack engineer building cross-platform apps with Flutter,
          React Native, Next.js and Node. Currently shipping a drone-management
          platform at GALYLIO AI.
        </p>
        <div className="email-chip">
          <span>aladinhabibii@gmail.com</span>
          <button className="copy-btn" onClick={copy} aria-label="Copy email">
            {copied ? <Icon.check /> : <Icon.copy />}
          </button>
        </div>
        <div className="socials">
          <a className="social-btn primary" onClick={onContact} title="Contact"><Icon.mail /></a>
          <a className="social-btn" href="https://www.linkedin.com/in/ala-din-habibi-bb2058282" target="_blank" title="LinkedIn"><Icon.linkedin /></a>
          <a className="social-btn" href="#" title="GitHub"><Icon.github /></a>
          <a className="social-btn" href="tel:+21695836148" title="Call"><Icon.phone /></a>
        </div>
      </div>

      <div className="hero-photo-wrap reveal">
        <div className="hero-backdrop" />
        <div className="deco-ring-1" />
        <div className="deco-ring-2" />
        <div className="hero-photo">
          <img src="assets/portrait.png" alt="Ala Din Habibi" />
        </div>
      </div>

      <div className="hero-right">
        <div className="skill-card c1">
          <div className="preview preview-mobile">
            <div className="phone-mock pm-1">
              <div className="pm-bar" />
              <div className="pm-card grad-a" />
              <div className="pm-line" />
              <div className="pm-line short" />
            </div>
            <div className="phone-mock pm-2">
              <div className="pm-bar" />
              <div className="pm-card grad-b" />
              <div className="pm-line" />
              <div className="pm-line short" />
            </div>
            <div className="phone-mock pm-3">
              <div className="pm-bar" />
              <div className="pm-card grad-c" />
              <div className="pm-line" />
              <div className="pm-line short" />
            </div>
          </div>
          <div className="connector connector-c1" />
          <div className="label">Mobile Developer</div>
        </div>

        <div className="skill-card c2">
          <div className="preview preview-iso">
            <div className="iso-floor" />
            <div className="iso-wall-l" />
            <div className="iso-wall-r" />
            <div className="iso-cube cube-a" />
            <div className="iso-cube cube-b" />
            <div className="iso-cube cube-c" />
          </div>
          <div className="connector connector-c2" />
          <div className="label">UI / UX Designer</div>
        </div>

        <div className="skill-card c3">
          <div className="preview preview-web">
            <div className="web-bar">
              <span /><span /><span />
            </div>
            <div className="web-body">
              <div className="web-side">
                <div className="web-side-row" />
                <div className="web-side-row" />
                <div className="web-side-row active" />
                <div className="web-side-row" />
              </div>
              <div className="web-main">
                <div className="web-hero" />
                <div className="web-stats">
                  <div className="web-stat" />
                  <div className="web-stat" />
                  <div className="web-stat" />
                </div>
              </div>
            </div>
          </div>
          <div className="connector connector-c3" />
          <div className="label">Full-Stack Developer</div>
        </div>
      </div>
    </section>
  );
}

function CountUp({ to, suffix = '', duration = 1400 }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{n}<span className="plus">{suffix}</span></span>;
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-head reveal">
        <div className="section-eyebrow">About</div>
        <h2 className="section-title display">A passionate engineer<br/>chasing every layer of the stack.</h2>
      </div>
      <div className="about-grid">
        <div className="about-text reveal">
          <p>
            I'm a <strong>Mobile Software Engineering student at ESPRIT</strong>, graduating July 2026,
            with hands-on experience across mobile, web, and cloud. I thrive on exploring every
            facet of the tech world — from system architecture to pixel-perfect interfaces.
          </p>
          <p>
            Right now I'm building the mobile app for <strong>Dronia</strong>, an AI-driven
            drone-management platform at GALYLIO AI, where I focus on real-time data interfaces
            and seamless API integration.
          </p>
          <p>
            I love tackling diverse challenges, picking up new tools quickly, and turning rough
            ideas into shipped products. Open to opportunities and collaborations.
          </p>
          <div className="tag-row">
            <span className="tag">#MobileFullStack</span>
            <span className="tag">#Flutter</span>
            <span className="tag">#ReactNative</span>
            <span className="tag">#NextJS</span>
            <span className="tag">#NodeJS</span>
            <span className="tag">#Firebase</span>
            <span className="tag">#OpenToWork</span>
          </div>
        </div>
        <div className="stats reveal">
          <div className="stat">
            <div className="stat-num"><CountUp to={5} suffix="+" /></div>
            <div className="stat-label">Years of coding</div>
          </div>
          <div className="stat">
            <div className="stat-num"><CountUp to={6} /></div>
            <div className="stat-label">Internships shipped</div>
          </div>
          <div className="stat">
            <div className="stat-num"><CountUp to={20} suffix="+" /></div>
            <div className="stat-label">Technologies in toolbox</div>
          </div>
          <div className="stat">
            <div className="stat-num"><CountUp to={4} /></div>
            <div className="stat-label">Platforms (iOS, Android, Web, Backend)</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const experiences = [
  { date: 'Jan 2026 — Now', current: true, role: 'Mobile Application Developer Intern', company: 'GALYLIO AI', desc: 'Building the Dronia mobile app — an AI drone-management platform. Mobile UI, API integration, real-time drone telemetry.', stack: ['Flutter', 'FastAPI', 'PostgreSQL', 'Prisma'] },
  { date: 'Dec 2025', role: 'Web Developer', company: 'AlBaraka Enseigne', desc: 'Showcase site for a signage company — public catalog, secure admin dashboard with JWT auth, CRUD, media management.', stack: ['Next.js', 'Tailwind', 'Node', 'JWT'] },
  { date: 'Jun — Aug 2025', role: 'iOS Mobile Developer Intern', company: 'Appaxis Innovations', desc: 'Designed and shipped iOS interfaces in SwiftUI. Consumed Swagger-documented APIs for clean front/back-end communication.', stack: ['SwiftUI', 'Xcode', 'CocoaPods', 'Swagger'] },
  { date: 'Jul — Aug 2024', role: 'Test Automation Intern', company: 'SAGEMCOM', desc: 'Set up automation pipelines for manual test suites — Robot Framework, Appium, ADB and OpenCV-driven validation.', stack: ['Robot Framework', 'Appium', 'OpenCV', 'Python'] },
  { date: 'Jul — Aug 2023', role: 'Web Developer Intern', company: 'Aluco-LED Enseigne', desc: 'Front-end work on marketing sites — responsive layouts, jQuery interactions, and visual asset production.', stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery'] },
  { date: 'Jun — Aug 2022', role: 'Graphic Designer Intern', company: 'Rise-UP', desc: 'Brand collateral, social-media content, and visual systems work using the Adobe suite.', stack: ['Photoshop', 'Illustrator', 'Canva'] },
];

function Experience() {
  return (
    <section className="section experience" id="works">
      <div className="section-head reveal">
        <div className="section-eyebrow">Experience</div>
        <h2 className="section-title display">Six internships,<br/>one growing toolbox.</h2>
        <p className="section-sub">From pixel-pushing in 2022 to shipping AI-powered mobile apps in 2026 — a steady climb through the stack.</p>
      </div>
      <div className="timeline">
        {experiences.map((e, i) => (
          <div key={i} className={'exp-item reveal' + (e.current ? ' current' : '')}>
            <div className="exp-date">
              {e.current && <span className="now">● Now </span>}
              {e.date}
            </div>
            <div className="exp-main">
              <h3>{e.role}</h3>
              <div className="exp-company">{e.company}</div>
              <p className="exp-desc">{e.desc}</p>
            </div>
            <div className="exp-stack">
              {e.stack.map(s => <span key={s} className="chip">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const skillCategories = [
  { icon: <Icon.mobile />, title: 'Mobile', items: ['Flutter', 'React Native', 'SwiftUI', 'iOS', 'Android', 'CocoaPods', 'Xcode'] },
  { icon: <Icon.code />, title: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS', 'Bootstrap', 'jQuery'] },
  { icon: <Icon.server />, title: 'Backend', items: ['FastAPI', 'NestJS', 'Spring Boot', 'Node.js', 'PHP', 'REST APIs', 'Swagger'] },
  { icon: <Icon.layers />, title: 'Data & Infra', items: ['PostgreSQL', 'Prisma ORM', 'MySQL', 'Firebase', 'JWT Auth', 'Git'] },
  { icon: <Icon.cpu />, title: 'AI & Systems', items: ['Computer Vision', 'OpenCV', 'Python', 'C++', 'C', 'Java', 'C#', 'Arduino', 'Qt'] },
  { icon: <Icon.beaker />, title: 'QA & Design', items: ['Robot Framework', 'Appium', 'ADB', 'Test Automation', 'Figma', 'Photoshop', 'Illustrator', 'Jira'] },
];

function Skills() {
  return (
    <section className="section skills" id="services">
      <div className="section-head reveal">
        <div className="section-eyebrow">Toolbox</div>
        <h2 className="section-title display">Skills, sorted by where<br/>they actually live.</h2>
      </div>
      <div className="skills-grid">
        {skillCategories.map((c, i) => (
          <div key={i} className="skill-cat reveal">
            <div className="skill-cat-header">
              <div className="skill-cat-icon">{c.icon}</div>
              <div className="skill-cat-title">{c.title}</div>
            </div>
            <div className="skill-list">
              {c.items.map(s => <span key={s} className="skill-pill">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const capabilities = [
  { icon: <Icon.code />, title: 'Frontend', desc: 'Next.js, React, Tailwind. Responsive, accessible, pixel-perfect UI.' },
  { icon: <Icon.server />, title: 'Backend', desc: 'FastAPI, NestJS, Spring Boot, Node. REST APIs, auth, jobs.' },
  { icon: <Icon.mobile />, title: 'Mobile', desc: 'Flutter, React Native, SwiftUI. From design to in-store binary.' },
  { icon: <Icon.store />, title: 'App Store & Play Store', desc: 'Signed releases, keystores, certificates, App Store Connect, Play Console.' },
  { icon: <Icon.cloud />, title: 'Web Deployment', desc: 'Vercel, Fly.io, Railway, RunPod, Supabase, Docker, CI/CD pipelines.' },
  { icon: <Icon.beaker />, title: 'Testing & QA', desc: 'Robot Framework, Appium, OpenCV. Real-device automation pipelines.' },
];

function Capabilities() {
  return (
    <section className="section capabilities" id="capabilities">
      <div className="section-head reveal">
        <div className="section-eyebrow">Full-Stack</div>
        <h2 className="section-title display">One developer,<br/>every layer of delivery.</h2>
        <p className="section-sub">Design, build, ship and maintain — across mobile and web, front-end to back-end, store submission to cloud deployment.</p>
      </div>
      <div className="cap-grid">
        {capabilities.map((c, i) => (
          <div key={i} className="cap-card reveal">
            <div className="cap-icon">{c.icon}</div>
            <div className="cap-title">{c.title}</div>
            <p className="cap-desc">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const change = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'Required';
    if (!form.email.trim()) errs.email = 'Required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Looks invalid';
    if (!form.message.trim()) errs.message = 'Required';
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 900);
  };

  return (
    <section className="section contact" id="contact">
      <div className="contact-grid">
        <div className="reveal">
          <div className="section-eyebrow">Let's talk</div>
          <h2 className="contact-headline">
            Have a project in mind? <span className="accent">Let's build it.</span>
          </h2>
          <p className="section-sub">
            Open to internships, freelance gigs, and full-time roles starting July 2026. Reply within 24 hours, usually faster.
          </p>
          <div className="contact-info">
            <div className="contact-info-item">
              <span className="ic"><Icon.mail /></span>
              <div><strong>Email</strong>aladinhabibii@gmail.com</div>
            </div>
            <div className="contact-info-item">
              <span className="ic"><Icon.phone /></span>
              <div><strong>Phone</strong>+216 95 836 148</div>
            </div>
            <div className="contact-info-item">
              <span className="ic"><Icon.pin /></span>
              <div><strong>Based in</strong>Tunis, Tunisia · open to remote</div>
            </div>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={submit}>
          {sent ? (
            <div className="form-success">
              <div className="check"><Icon.check /></div>
              <h3 style={{ fontFamily: 'Space Grotesk', margin: '0 0 6px' }}>Message sent</h3>
              <p style={{ color: 'var(--muted)', margin: 0, fontSize: 14 }}>I'll get back to you shortly. Thanks for reaching out!</p>
            </div>
          ) : (
            <>
              <div className="field-row">
                <div className={'field' + (errors.name ? ' error' : '')}>
                  <label>Name</label>
                  <input type="text" value={form.name} onChange={change('name')} placeholder="Jane Doe" />
                  {errors.name && <div className="field-error">{errors.name}</div>}
                </div>
                <div className={'field' + (errors.email ? ' error' : '')}>
                  <label>Email</label>
                  <input type="text" value={form.email} onChange={change('email')} placeholder="jane@company.com" />
                  {errors.email && <div className="field-error">{errors.email}</div>}
                </div>
              </div>
              <div className="field">
                <label>Subject</label>
                <input type="text" value={form.subject} onChange={change('subject')} placeholder="Internship opportunity" />
              </div>
              <div className={'field' + (errors.message ? ' error' : '')}>
                <label>Message</label>
                <textarea value={form.message} onChange={change('message')} placeholder="Tell me about your project…" />
                {errors.message && <div className="field-error">{errors.message}</div>}
              </div>
              <button type="submit" className="submit-btn" disabled={sending}>
                {sending ? 'Sending…' : <>Send message <Icon.send /></>}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, About, Experience, Skills, Contact });
