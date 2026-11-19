export default function Home() {
  const styles = {
    body: {
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      backgroundColor: '#0d1117',
      color: '#e6edf3',
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
    },
    main: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '4rem 2rem',
    },
    header: {
      borderBottom: '1px solid #21262d',
      paddingBottom: '2.5rem',
      marginBottom: '3rem',
    },
    name: {
      fontSize: '3rem',
      fontWeight: '700',
      margin: '0 0 0.5rem 0',
      background: 'linear-gradient(135deg, #58a6ff 0%, #bc8cff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '-0.5px',
    },
    title: {
      fontSize: '1.25rem',
      fontWeight: '400',
      color: '#8b949e',
      margin: '0 0 1.5rem 0',
      letterSpacing: '0.5px',
    },
    badge: {
      display: 'inline-block',
      padding: '0.3rem 0.9rem',
      borderRadius: '999px',
      fontSize: '0.8rem',
      fontWeight: '600',
      border: '1px solid #30363d',
      backgroundColor: '#161b22',
      color: '#58a6ff',
      marginRight: '0.5rem',
    },
    section: {
      marginBottom: '2.5rem',
    },
    sectionTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#58a6ff',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      marginBottom: '1.25rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    sectionLine: {
      flex: 1,
      height: '1px',
      backgroundColor: '#21262d',
    },
    card: {
      backgroundColor: '#161b22',
      border: '1px solid #21262d',
      borderRadius: '12px',
      padding: '1.25rem 1.5rem',
      marginBottom: '0.75rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      transition: 'border-color 0.2s ease, transform 0.2s ease',
    },
    cardIcon: {
      fontSize: '1.5rem',
      flexShrink: 0,
      width: '2.5rem',
      height: '2.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0d1117',
      borderRadius: '8px',
      border: '1px solid #30363d',
    },
    cardContent: {
      flex: 1,
    },
    cardTitle: {
      fontWeight: '600',
      color: '#e6edf3',
      margin: 0,
      fontSize: '0.95rem',
    },
    cardSub: {
      color: '#8b949e',
      margin: '0.2rem 0 0 0',
      fontSize: '0.82rem',
    },
    aboutBox: {
      backgroundColor: '#161b22',
      border: '1px solid #21262d',
      borderLeft: '3px solid #58a6ff',
      borderRadius: '0 12px 12px 0',
      padding: '1.25rem 1.5rem',
      color: '#c9d1d9',
      lineHeight: '1.7',
      fontSize: '0.95rem',
    },
    footer: {
      marginTop: '4rem',
      paddingTop: '2rem',
      borderTop: '1px solid #21262d',
      textAlign: 'center',
      color: '#8b949e',
      fontSize: '0.82rem',
    },
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        * { box-sizing: border-box; }
        body { margin: 0; background-color: #0d1117; }
        .card-hover:hover {
          border-color: #58a6ff !important;
          transform: translateX(4px);
        }
        .animated {
          animation: fadeIn 0.5s ease both;
        }
        .animated:nth-child(1) { animation-delay: 0.05s; }
        .animated:nth-child(2) { animation-delay: 0.1s; }
        .animated:nth-child(3) { animation-delay: 0.15s; }
        .animated:nth-child(4) { animation-delay: 0.2s; }
      `}</style>

      <div style={styles.body}>
        <main style={styles.main}>

          {/* ── HEADER ── */}
          <header style={styles.header}>
            <h1 style={styles.name}>Meryem Elheni</h1>
            <h2 style={styles.title}>Ingénieur DevOps &amp; Cloud</h2>
            <div>
              <span style={styles.badge}>🐳 Docker</span>
              <span style={styles.badge}>☁️ AWS</span>
              <span style={styles.badge}>⎈ Kubernetes</span>
              <span style={styles.badge}>🔄 CI/CD</span>
            </div>
          </header>

          {/* ── À PROPOS ── */}
          <section style={styles.section}>
            <h3 style={styles.sectionTitle}>
              À propos
              <span style={styles.sectionLine} />
            </h3>
            <div style={styles.aboutBox}>
              Bienvenue sur mon portfolio. Passionnée par l'automatisation,
              l'infrastructure cloud et les pratiques DevOps modernes, j'aide
              les équipes à livrer plus vite et plus sereinement.
            </div>
          </section>

          {/* ── CERTIFICATIONS ── */}
          <section style={styles.section}>
            <h3 style={styles.sectionTitle}>
              Certifications
              <span style={styles.sectionLine} />
            </h3>

            {[
              { icon: '☁️', title: 'AWS Certified Cloud Practitioner', sub: 'Amazon Web Services' },
              { icon: '🐳', title: 'Docker Certified Associate',       sub: 'Docker Inc.' },
            ].map((item) => (
              <div key={item.title} className="card-hover animated" style={styles.card}>
                <div style={styles.cardIcon}>{item.icon}</div>
                <div style={styles.cardContent}>
                  <p style={styles.cardTitle}>{item.title}</p>
                  <p style={styles.cardSub}>{item.sub}</p>
                </div>
                <span style={{ color: '#3fb950', fontSize: '0.8rem', fontWeight: 600 }}>✔ Certifié</span>
              </div>
            ))}
          </section>

          {/* ── PROJETS ── */}
          <section style={styles.section}>
            <h3 style={styles.sectionTitle}>
              Projets DevOps &amp; Cloud
              <span style={styles.sectionLine} />
            </h3>

            {[
              {
                icon: '🔄',
                title: 'Pipeline CI/CD avec GitHub Actions',
                sub: 'Automatisation des tests, build et déploiement continu',
              },
              {
                icon: '⎈',
                title: 'Déploiement Kubernetes',
                sub: 'Orchestration de conteneurs sur cluster managé (EKS / GKE)',
              },
            ].map((item) => (
              <div key={item.title} className="card-hover animated" style={styles.card}>
                <div style={styles.cardIcon}>{item.icon}</div>
                <div style={styles.cardContent}>
                  <p style={styles.cardTitle}>{item.title}</p>
                  <p style={styles.cardSub}>{item.sub}</p>
                </div>
              </div>
            ))}
          </section>

          {/* ── FOOTER ── */}
          <footer style={styles.footer}>
            © {new Date().getFullYear()} Meryem Elheni · Ingénieur DevOps
          </footer>

        </main>
      </div>
    </>
  );
}
