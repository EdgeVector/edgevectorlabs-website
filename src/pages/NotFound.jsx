import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <div className="hero-title" aria-label="404">
        <span className="hero-title-line">404</span>
      </div>
      <hr className="decorative-rule" aria-hidden="true" />
      <p>That page does not exist.</p>
      <p><Link to="/" className="link-btn">[Home]</Link></p>
    </>
  );
}
