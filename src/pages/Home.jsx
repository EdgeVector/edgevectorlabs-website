import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Edge Vector Labs LLC — Commercial Cloud Services for the Edge Vector Ecosystem</title>
        <meta name="description" content="Edge Vector Labs LLC develops and operates commercial cloud services — including Exemem, a cloud-hosted encrypted database and sync service — built on the open technology stewarded by the Edge Vector Foundation." />
        <meta property="og:title" content="Edge Vector Labs LLC" />
        <meta property="og:description" content="The commercial arm of the Edge Vector ecosystem. Operator of Exemem." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edgevectorlabs.com/" />
        <meta property="og:site_name" content="Edge Vector Labs LLC" />
        <link rel="canonical" href="https://edgevectorlabs.com/" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Edge Vector Labs LLC',
          legalName: 'Edge Vector Labs LLC',
          url: 'https://edgevectorlabs.com/',
          email: 'contact@edgevector.org',
          telephone: '+1-630-935-0948',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '14205 SE 36th St Ste 100',
            addressLocality: 'Bellevue',
            addressRegion: 'WA',
            postalCode: '98006',
            addressCountry: 'US'
          },
          parentOrganization: { '@type': 'Organization', name: 'Edge Vector Foundation', url: 'https://edgevector.org/' }
        })}</script>
      </Helmet>

      <div className="hero-title" aria-label="Edge Vector Labs">
        <span className="hero-title-line">EDGE</span>
        <span className="hero-title-line">VECTOR</span>
        <span className="hero-title-line">LABS</span>
      </div>
      <hr className="decorative-rule" aria-hidden="true" />
      <h1 className="tagline">The commercial arm of the Edge Vector ecosystem.</h1>
      <hr className="decorative-rule" aria-hidden="true" />

      <p><span className="bold">Edge Vector Labs LLC</span> develops and operates commercial cloud
      services built on the open-source technology stewarded by the{' '}
      <a href="https://edgevector.org/">Edge Vector Foundation</a>. Labs is a wholly owned
      subsidiary of the Foundation: revenue from our services funds the open ecosystem, and no
      outside shareholders sit between the mission and the product.</p>

      <section>
        <h2>What We Operate</h2>
        <div className="grid-2">
          <div className="card">
            <p><span className="label label-green">EXEMEM</span></p>
            <p>A cloud-hosted, end-to-end-encrypted database and sync service for personal data.
            Exemem gives LastDB users durable cloud backup, multi-device sync, and org sharing —
            with encryption keys that stay with the user.</p>
            <p><a className="link-btn" href="https://exemem.com/">[exemem.com]</a></p>
          </div>
          <div className="card">
            <p><span className="label label-blue">CLOUD SERVICES</span></p>
            <p>Managed hosting, storage, and subscription services for the Edge Vector technology
            stack, operated commercially so the open-source core stays free and unencumbered.</p>
            <p><a className="link-btn" href="https://edgevector.org/">[The open ecosystem]</a></p>
          </div>
        </div>
      </section>

      <section>
        <h2>Company</h2>
        <table className="company-table">
          <tbody>
            <tr><td>Legal name</td><td>Edge Vector Labs LLC</td></tr>
            <tr><td>Entity</td><td>Washington limited liability company (UBI 606 262 423), formed July 15, 2026</td></tr>
            <tr><td>Ownership</td><td>Wholly owned by the Edge Vector Foundation, a Washington nonprofit corporation</td></tr>
            <tr><td>Management</td><td>Manager-managed — Tom Tang (CEO), Fei Jia (CTO)</td></tr>
            <tr><td>Office</td><td>14205 SE 36th St Ste 100, Bellevue, WA 98006, USA</td></tr>
            <tr><td>Contact</td><td><a href="mailto:contact@edgevector.org">contact@edgevector.org</a></td></tr>
          </tbody>
        </table>
      </section>

      <footer>
        <p>© 2026 Edge Vector Labs LLC · 14205 SE 36th St Ste 100, Bellevue, WA 98006</p>
        <p>
          <a className="link-btn" href="mailto:contact@edgevector.org">[Contact]</a>
          <a className="link-btn" href="https://edgevector.org/">[Edge Vector Foundation]</a>
          <a className="link-btn" href="https://exemem.com/">[Exemem]</a>
        </p>
      </footer>
    </>
  );
}
