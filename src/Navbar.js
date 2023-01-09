import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <Link to="/pricing">Pricing</Link>
        <Link to="/about">About</Link>
      </ul>
    </div>
  );
}
