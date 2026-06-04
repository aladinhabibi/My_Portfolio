// App shell — nav + section composition + reveal observer + tweaks
const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "blue",
  "showFloatingCards": true
}/*EDITMODE-END*/;

const ACCENTS = {
  blue:    { l: 0.62, c: 0.18, h: 255, soft: 'oklch(0.95 0.04 255)' },
  emerald: { l: 0.62, c: 0.16, h: 160, soft: 'oklch(0.95 0.04 160)' },
  amber:   { l: 0.7,  c: 0.16, h: 60,  soft: 'oklch(0.96 0.05 80)' },
  coral:   { l: 0.66, c: 0.18, h: 30,  soft: 'oklch(0.95 0.05 40)' },
  violet:  { l: 0.6,  c: 0.18, h: 295, soft: 'oklch(0.95 0.04 295)' },
};

function applyTweaks(t) {
  const root = document.documentElement;
  root.dataset.theme = t.theme === 'dark' ? 'dark' : 'light';
  const a = ACCENTS[t.accent] || ACCENTS.blue;
  root.style.setProperty('--accent', `oklch(${a.l} ${a.c} ${a.h})`);
  root.style.setProperty('--accent-soft', a.soft);
  document.body.classList.toggle('hide-floating', !t.showFloatingCards);
}

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const [activeSec, setActiveSec] = useState('home');
  const [toast, setToast] = useState('');
  const toastTimer = useRef();

  useEffect(() => { applyTweaks(tweaks); }, [tweaks]);

  // Reveal on scroll
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Active nav tracking
  useEffect(() => {
    const ids = ['home', 'works', 'services', 'capabilities', 'projects', 'about', 'contact'];
    const onScroll = () => {
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) cur = id;
      }
      setActiveSec(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Toast listener
  useEffect(() => {
    const handler = (e) => {
      setToast(e.detail);
      clearTimeout(toastTimer.current);
      toastTimer.current = setTimeout(() => setToast(''), 2200);
    };
    window.addEventListener('app-toast', handler);
    return () => window.removeEventListener('app-toast', handler);
  }, []);

  // Tweaks panel host protocol
  useEffect(() => {
    const onMsg = (ev) => {
      if (ev.data?.type === '__activate_edit_mode') setTweaksOpen(true);
      if (ev.data?.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const goTo = (id) => (e) => {
    e?.preventDefault?.();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'works', label: 'Experience' },
    { id: 'services', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
  ];

  return (
    <>
      <div className="bg-blob-1" />
      <div className="bg-blob-2" />
      <div className="app">
        <nav className="nav">
          <div className="brand">ala<span className="brand-dot">.</span></div>
          <div className="nav-links">
            {navLinks.map(l => (
              <a key={l.id} href={'#' + l.id} className={activeSec === l.id ? 'active' : ''} onClick={goTo(l.id)}>
                {l.label}
              </a>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              className="theme-toggle"
              onClick={() => setTweak({ theme: tweaks.theme === 'dark' ? 'light' : 'dark' })}
              title="Toggle theme"
            >
              {tweaks.theme === 'dark' ? <Icon.sun /> : <Icon.moon />}
            </button>
            <a className="cta-btn" onClick={goTo('contact')}>Let's Talk <Icon.arrow /></a>
          </div>
        </nav>

        <Hero onContact={goTo('contact')} />
        <About />
        <Experience />
        <Skills />
        <Capabilities />
        <Projects />
        <Contact />

        <footer className="footer">
          <div>© 2026 Ala Din Habibi · Crafted with care in Tunis</div>
          <div style={{ display: 'flex', gap: 18 }}>
            <a href="https://www.linkedin.com/in/ala-din-habibi-bb2058282" target="_blank">LinkedIn</a>
            <a href="mailto:aladinhabibii@gmail.com">Email</a>
            <a href="tel:+21695836148">+216 95 836 148</a>
          </div>
        </footer>
      </div>

      <div className={'toast' + (toast ? ' show' : '')}>{toast}</div>

      {tweaksOpen && (
        <TweaksPanel title="Tweaks" onClose={() => setTweaksOpen(false)}>
          <TweakSection title="Theme">
            <TweakRadio
              label="Mode"
              value={tweaks.theme}
              onChange={v => setTweak({ theme: v })}
              options={[{ label: 'Light', value: 'light' }, { label: 'Dark', value: 'dark' }]}
            />
            <TweakSelect
              label="Accent color"
              value={tweaks.accent}
              onChange={v => setTweak({ accent: v })}
              options={[
                { label: 'Electric Blue', value: 'blue' },
                { label: 'Emerald', value: 'emerald' },
                { label: 'Amber', value: 'amber' },
                { label: 'Coral', value: 'coral' },
                { label: 'Violet', value: 'violet' },
              ]}
            />
          </TweakSection>
          <TweakSection title="Hero">
            <TweakToggle
              label="Show floating skill cards"
              value={tweaks.showFloatingCards}
              onChange={v => setTweak({ showFloatingCards: v })}
            />
          </TweakSection>
        </TweaksPanel>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
