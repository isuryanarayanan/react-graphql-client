import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link to="/">Go back to home</Link>
    </div>
  );
}

export default NotFound;
