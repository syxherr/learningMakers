import { Link } from "react-router-dom";
import "../style/index.css";


function Home({ toggleTheme, isDark }) {
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
      <button className="button" onClick={toggleTheme}>
          {isDark ? "Light Mode" : " Dark Mode"}
        </button>
    </div>
    
    
  );
}

export default Home;
