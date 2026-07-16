import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Edge Vector Labs — Makers of The LastDB and Exemem</title>
        <meta name="description" content="Edge Vector Labs builds and operates The LastDB, the local-first database you build your own tool stack on, and Exemem, its cloud companion for backup, sync, and delivering data slices." />
        <meta property="og:title" content="Edge Vector Labs" />
        <meta property="og:description" content="Makers of The LastDB and Exemem." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edgevectorlabs.com/" />
        <meta property="og:site_name" content="Edge Vector Labs" />
        <link rel="canonical" href="https://edgevectorlabs.com/" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Edge Vector Labs',
          legalName: 'Edge Vector Labs LLC',
          url: 'https://edgevectorlabs.com/',
          email: 'contact@edgevector.org'
        })}</script>
      </Helmet>

      <div className="hero-title" aria-label="Edge Vector Labs">
        <span className="hero-title-line">EDGE</span>
        <span className="hero-title-line">VECTOR</span>
        <span className="hero-title-line">LABS</span>
      </div>
      <hr className="decorative-rule" aria-hidden="true" />
      <h1 className="tagline">Makers of The LastDB and Exemem.</h1>
      <hr className="decorative-rule" aria-hidden="true" />

      <p>We build software for <span className="bold">personal data ownership</span>: a database
      that lives on your device with your whole tool stack built on it, and the cloud that
      backs it up.</p>

      <section>
        <h2>Products</h2>
        <div className="grid-2">
          <div className="card">
            <p><span className="label label-blue">THE LASTDB</span></p>
            <p>The last database you'll ever need for your personal data. Local-first and yours
            by design: your files, notes, and app data become one queryable brain on your device —
            with every tool you use, including the ones you write, built on top of it.</p>
            <p><a className="link-btn" href="https://thelastdb.com/">[thelastdb.com]</a></p>
          </div>
          <div className="card">
            <p><span className="label label-green">EXEMEM</span></p>
            <p>The cloud companion to The LastDB. Backup, multi-device sync, and delivery — hand
            curated slices of your database to the people and apps you choose, on your terms.</p>
            <p><a className="link-btn" href="https://exemem.com/">[exemem.com]</a></p>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Edge Vector Labs LLC</p>
        <p>
          <a className="link-btn" href="mailto:contact@edgevector.org">[Contact]</a>
          <a className="link-btn" href="https://thelastdb.com/">[The LastDB]</a>
          <a className="link-btn" href="https://exemem.com/">[Exemem]</a>
        </p>
      </footer>
    </>
  );
}
