import { Link } from "react-router-dom";
import "../style/index.css";

function Home() {
  return (
    <div className="container">
      <h1>Mini Apps</h1>

      <div className="button-row">
        <Link to="/todo">
          <button className="button">Todo App</button>
        </Link>

        <Link to="/weather">
          <button className="button">Weather App</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
