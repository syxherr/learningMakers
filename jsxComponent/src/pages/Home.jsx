import { Link } from "react-router-dom";
import "../index.css";

function Home() {
  return (
    <div className="page-container">
      <h1>Mini Apps</h1>

      <div className="button-row">
        <Link to="/todo">
          <button className="button-home">Todo App</button>
        </Link>

        <Link to="/weather">
          <button className="button-home">Weather App</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;