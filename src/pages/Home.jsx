import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Edge Vector Labs — Makers of The LastDB and Exemem</title>
        <meta name="description" content="Edge Vector Labs builds and operates The LastDB, a private local-first database for your personal data, and Exemem, its end-to-end-encrypted cloud companion." />
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
          email: 'contact@edgevector.org',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '14205 SE 36th St Ste 100',
            addressLocality: 'Bellevue',
            addressRegion: 'WA',
            postalCode: '98006',
            addressCountry: 'US'
          }
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

      <p>We build software for <span className="bold">personal data ownership</span>: a private
      database that lives on your device, and the encrypted cloud that backs it up.</p>

      <section>
        <h2>Products</h2>
        <div className="grid-2">
          <div className="card">
            <p><span className="label label-blue">THE LASTDB</span></p>
            <p>The last database you'll ever need for your personal data. Local-first and private
            by design: your files, notes, and app data become one encrypted, queryable brain that
            lives on your device — not on someone else's servers.</p>
            <p><a className="link-btn" href="https://thelastdb.com/">[thelastdb.com]</a></p>
          </div>
          <div className="card">
            <p><span className="label label-green">EXEMEM</span></p>
            <p>The cloud companion to The LastDB. End-to-end-encrypted backup, multi-device sync,
            and sharing for your personal data — with encryption keys that stay with you.</p>
            <p><a className="link-btn" href="https://exemem.com/">[exemem.com]</a></p>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Edge Vector Labs LLC · 14205 SE 36th St Ste 100, Bellevue, WA 98006</p>
        <p>
          <a className="link-btn" href="mailto:contact@edgevector.org">[Contact]</a>
          <a className="link-btn" href="https://thelastdb.com/">[The LastDB]</a>
          <a className="link-btn" href="https://exemem.com/">[Exemem]</a>
        </p>
      </footer>
    </>
  );
}
