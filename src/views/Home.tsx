import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="header">
        <h1>Graphql Client</h1>
      </div>
      <div className="actions">
        <div className="actions--login">
          <Link to="/login">Login</Link>
        </div>
        <div className="actions--register">
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
