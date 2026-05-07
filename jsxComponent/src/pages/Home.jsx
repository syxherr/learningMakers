import { Link } from "react-router-dom";
import "../style/index.css";
import { ToggleButton, HomeContainer } from "../components/ui/ThemeSwitch";


function Home({ toggleTheme, isDark }) {
  return (
    <HomeContainer>
      <h1>Mini Apps</h1>

      <div className="button-row">
        <Link to="/todo">
          <button className="button">Todo App</button>
        </Link>

        <Link to="/weather">
          <button className="button">Weather App</button>
        </Link>
        
      </div>
      <ToggleButton onClick={toggleTheme}>
          {isDark ? "Light Mode" : " Dark Mode"}
        </ToggleButton>
    </HomeContainer>
    
    
  );
}

export default Home;
