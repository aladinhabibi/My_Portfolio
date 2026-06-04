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

const projects = [
  {
    id: 'dronia',
    type: 'mobile',
    kind: 'Mobile · AI · Agronomy',
    title: 'DronIA — Precision Agronomy',
    client: 'Galylio AI · Final-Year Project · 2026',
    problem: 'Agronomists juggle disparate tools to fly drones, analyse satellite imagery, detect crop disease and follow up in the field — nothing brings the loop together in one mobile-first product.',
    description: 'Cross-platform Flutter app powering AI-driven precision agriculture. Drone & IoT fleet management, mission planning, real-time telemetry, Sentinel-2 remote sensing, EfficientNet-B0 + YOLO11s vision models for disease detection, and a Groq Llama 3.3 70B in-app assistant.',
    realization: 'Designed and built end-to-end (Flutter front + FastAPI back + MongoDB). Integrated multiple ML models and a multimodal LLM, prepared deployment pipelines for Fly.io, Railway, RunPod and HuggingFace. Currently active until the July 2026 defense.',
    stack: ['Flutter', 'FastAPI', 'MongoDB', 'YOLO11s', 'EfficientNet-B0', 'Groq LLM', 'Sentinel-2', 'Docker'],
    deployment: ['Cloud Backend', 'iOS Beta', 'Android Beta'],
    status: 'In Development',
    accent: 'a',
    screenshots: ['assets/dronia.png']
  },
  {
    id: 'parahouse',
    type: 'mobile',
    kind: 'Mobile · E-commerce · Pharmacy',
    title: 'ParaHouse',
    client: 'Online Parapharmacie · French Market',
    problem: 'A local parapharmacie wanted a mobile storefront so customers could browse health & beauty products, place orders and track them — without a dedicated app on the market.',
    description: 'Flutter mobile app for ParaHouse. Browseable catalog with categories, search, cart, secure checkout and account flow. Fully in French, designed for fast everyday use.',
    realization: 'Designed the full UI/UX, wired the catalog/cart/auth APIs and prepared the privacy policy and store assets for Play and App Store submission.',
    stack: ['Flutter', 'Dart', 'REST API', 'Provider'],
    deployment: ['Play Store-ready', 'App Store-ready'],
    status: 'Built',
    accent: 'b',
    screenshots: ['assets/parahouse.png']
  },
  {
    id: '1111tn',
    type: 'mobile',
    kind: 'Mobile · Marketplace · Frontend Rebuild',
    title: '1111.tn — Smart Price Comparator',
    client: 'Frontend Rebuild + Notifications Backend · 2026',
    problem: 'The existing 1111.tn Flutter app needed a complete frontend modernization and a push-notifications backend before its Google Play release.',
    description: 'Rebuilt the Flutter frontend of 1111.tn (a smart price comparator for the Tunisian market). Reworked screens, navigation, performance and product browsing, plus designed and shipped the notifications backend in Python.',
    realization: 'Shipped v1.0.5+19 to Google Play. Generated and managed the upload keystore (valid through 2053), established the full release pipeline — build, sign, upload, review.',
    stack: ['Flutter', 'Dart', 'Python', 'FCM Push', 'REST API'],
    deployment: ['Play Store · Released'],
    status: 'Shipped',
    accent: 'd',
    screenshots: ['assets/1111tn.png']
  },
  {
    id: 'albaraka',
    type: 'web',
    kind: 'Web · CMS · Marketing',
    title: 'AlBaraka Enseigne',
    client: 'Signage Company · 2025',
    problem: 'A signage company needed a marketing site that doubled as a self-service CMS so the team could add products, categories and media without involving a developer.',
    description: 'Next.js + Tailwind showcase website with a public catalog and a secure admin dashboard. JWT auth, role-based access, full CRUD over products and categories, image upload and media management.',
    realization: 'Shipped a fully working production site with documented admin setup and deployment. Live and used daily by the client team.',
    stack: ['Next.js', 'Tailwind CSS', 'Node.js', 'JWT', 'Prisma'],
    deployment: ['Web · Deployed'],
    status: 'Shipped',
    accent: 'c',
    screenshots: ['assets/artsigns.png']
  },
  {
    id: 'alucoled',
    type: 'web',
    kind: 'Web · Showcase · Bilingual',
    title: 'Aluco-LED Enseigne',
    client: 'LED Signage Co. · Tunis · 2023',
    problem: 'A signage and façade company in Tunis needed a bilingual web presence that showcased their realizations — LED lettering, light boxes, totems, Alucobond façades — to attract enterprise clients.',
    description: 'Bilingual (FR/AR) React showcase site with a curated realizations gallery, services pages and an SEO-optimized homepage. Custom content manifest so the team can drop in new realizations.',
    realization: 'Built and delivered a fully responsive marketing site. Brand identity, photography integration, and on-page SEO. Visited daily by prospects.',
    stack: ['React', 'JavaScript', 'CSS', 'HTML5', 'i18n'],
    deployment: ['Web · Deployed'],
    status: 'Shipped',
    accent: 'e',
    screenshots: ['assets/alucoled enseigne.png']
  },
  {
    id: 'wattspot',
    type: 'hybrid',
    kind: 'Web + Mobile · Storefront · Supabase',
    title: 'Watt Spot — Électricité & Éclairage',
    client: 'Electrical Supplies & Lighting · 2026',
    problem: 'An electrical-supplies and lighting business needed a full storefront on both web and mobile — separate admin and client experiences, real-time inventory, and a single source of truth across platforms.',
    description: 'React web app + companion mobile app sharing one Supabase Postgres backend. Admin dashboard, client catalog, multi-category browsing, image uploads, push notifications and live data sync. Web also falls back to localStorage demo mode for instant client previews.',
    realization: 'Shipped a production-ready dual-platform (web + mobile) solution backed by Supabase. Documented architecture, Supabase setup, web app, mobile app, admin dashboard and notifications.',
    stack: ['React', 'Flutter', 'Supabase', 'PostgreSQL', 'Push Notifications'],
    deployment: ['Web · Deployed', 'Mobile · Built', 'Supabase Hosted'],
    status: 'Shipped',
    accent: 'a',
    screenshots: ['assets/wattspot web.png', 'assets/wattspot mobile.png']
  },
  {
    id: 'pickme',
    type: 'ios',
    kind: 'iOS · Native · SwiftUI',
    title: 'PickMe',
    client: 'Appaxis Innovations · 2025',
    problem: 'PickMe needed a polished native iOS client for their platform — tight Swagger API integration, real-time map interface, and a component library maintainable beyond the internship.',
    description: 'Native iOS driver app built in SwiftUI. Live map interface, service status toggle, real-time trip management, reusable component library, async API layer consuming Swagger-documented services, clean MVVM architecture.',
    realization: 'Delivered a native iOS app with custom SwiftUI components, smooth animations and full backend integration via Xcode + CocoaPods workflows.',
    stack: ['SwiftUI', 'Swift', 'Xcode', 'CocoaPods', 'Swagger', 'Async/Await'],
    deployment: ['App Store-ready', 'TestFlight Tested'],
    status: 'Shipped',
    accent: 'b',
    screenshots: ['assets/pick me.png']
  },
  {
    id: 'tdiscount-seller',
    type: 'mobile',
    kind: 'Mobile · Marketplace · Ambassador',
    title: 'Tdiscount Seller',
    client: 'Ambassador Marketplace · Final-Year Project · 2026',
    problem: 'Sellers and brand ambassadors needed a dedicated mobile hub to recruit vendors, track commissions, monitor rankings, manage their wallet, and coordinate their team — all from one app.',
    description: 'Flutter ambassador marketplace app for Tdiscount sellers. Features a live dashboard, vendor recruitment and management, commission analytics with FL Chart, a leaderboard ranking system, team overview, interactive map (flutter_map), wallet with withdrawal flow, push notifications, and full onboarding/auth flows.',
    realization: 'Built end-to-end in Flutter with Provider state management and go_router navigation. Implemented animated UI components (shimmer, staggered animations), cached network images, and cross-platform launcher icons for Android, iOS and web.',
    stack: ['Flutter', 'Dart', 'Provider', 'go_router', 'FL Chart', 'flutter_map', 'shimmer', 'REST API'],
    deployment: ['Android', 'iOS', 'Web'],
    status: 'In Development',
    accent: 'e',
    screenshots: ['assets/tdiacount seller.png']
  },
];

function ImageFrame({ p, screenshotIndex = 0 }) {
  const shot = p.screenshots && p.screenshots[screenshotIndex];
  const boxRef = useRef(null);
  const imgRef = useRef(null);
  const onMove = (e) => {
    const img = imgRef.current;
    const box = boxRef.current;
    if (!img || !box) return;
    const r = box.getBoundingClientRect();
    img.style.transformOrigin =
      `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`;
  };
  const onLeave = () => {
    if (imgRef.current) imgRef.current.style.transformOrigin = 'center center';
  };
  return (
    <div className="pf-image" ref={boxRef} onMouseMove={onMove} onMouseLeave={onLeave}>
      {shot && <img ref={imgRef} src={shot} alt={p.title} />}
    </div>
  );
}

function ProjectFrame({ p, activeView }) {
  if (p.type === 'hybrid') {
    return (
      <div className="frame-stage">
        <div className={'frame-slot frame-slot-web' + (activeView === 'web' ? ' active' : '')}>
          <ImageFrame p={p} screenshotIndex={0} />
        </div>
        <div className={'frame-slot frame-slot-mobile' + (activeView === 'mobile' ? ' active' : '')}>
          <ImageFrame p={p} screenshotIndex={1} />
        </div>
      </div>
    );
  }
  return <ImageFrame p={p} />;
}

function FrameToggle({ active, onChange }) {
  return (
    <div className="frame-toggle" data-active={active} role="tablist">
      <span className="frame-toggle-pill" />
      <button
        role="tab"
        aria-selected={active === 'web'}
        className={'ft-btn' + (active === 'web' ? ' active' : '')}
        onClick={() => onChange('web')}
      >
        <Icon.code /> Web
      </button>
      <button
        role="tab"
        aria-selected={active === 'mobile'}
        className={'ft-btn' + (active === 'mobile' ? ' active' : '')}
        onClick={() => onChange('mobile')}
      >
        <Icon.mobile /> Mobile
      </button>
    </div>
  );
}

function CaseCard({ p, index }) {
  const [activeView, setActiveView] = useState('web');
  const flipClass = index % 2 === 1 ? ' case-flip' : '';
  return (
    <article className={'case case-' + p.type + flipClass + ' reveal'}>
      <div className="case-frame-wrap">
        {p.type === 'hybrid' && (
          <FrameToggle active={activeView} onChange={setActiveView} />
        )}
        <ProjectFrame p={p} activeView={activeView} />
      </div>
      <div className="case-body">
        <div className="case-meta">
          <span className="case-kind"><span className="dot" />{p.kind}</span>
          {p.status && <span className={'case-status status-' + p.status.replace(/\s+/g, '-').toLowerCase()}>● {p.status}</span>}
        </div>
        <h3 className="case-title">{p.title}</h3>
        {p.client && <div className="case-client">{p.client}</div>}

        <div className="case-blocks">
          <div className="case-block">
            <div className="case-block-label">Problem</div>
            <p className="case-block-text">{p.problem}</p>
          </div>
          <div className="case-block">
            <div className="case-block-label">What it is</div>
            <p className="case-block-text">{p.description}</p>
          </div>
          <div className="case-block">
            <div className="case-block-label">Realization</div>
            <p className="case-block-text">{p.realization}</p>
          </div>
        </div>

        <div className="case-block">
          <div className="case-block-label">Tech stack</div>
          <div className="case-stack">
            {p.stack.map(s => <span key={s} className="chip">{s}</span>)}
          </div>
        </div>

        {p.deployment && p.deployment.length > 0 && (
          <div className="case-block">
            <div className="case-block-label">Delivery</div>
            <div className="case-deploy">
              {p.deployment.map(d => (
                <span key={d} className="deploy-chip"><Icon.check /> {d}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section-head reveal">
        <div className="section-eyebrow">Selected Work</div>
        <h2 className="section-title display">Nine case studies,<br/>shipped end-to-end.</h2>
        <p className="section-sub">From design and frontend to backend, deployment, App Store, Play Store and the web — every project below was taken from idea to release.</p>
      </div>

      <div className="case-studies">
        {projects.map((p, i) => <CaseCard key={p.id} p={p} index={i} />)}
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

Object.assign(window, { Hero, About, Experience, Skills, Projects, Contact });
