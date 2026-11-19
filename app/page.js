export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Meryem elheni</h1>
      <h2>Ingénieur DevOps</h2>
      
      <section style={{ marginTop: '2rem' }}>
        <h3>À propos</h3>
        <p>Bienvenue sur mon portfolio.</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>Certifications</h3>
        <ul>
          <li>AWS Certified Cloud Practitioner</li>
          <li>Docker Certified Associate</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>Projets DevOps & Cloud</h3>
        <ul>
          <li>Pipeline CI/CD avec GitHub Actions</li>
          <li>Déploiement Kubernetes</li>
        </ul>
      </section>
    </main>
  );
}
