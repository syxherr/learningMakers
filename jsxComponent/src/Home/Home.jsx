import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "../style/index.css";
import { ToggleButton, HomeContainer } from "../components/ui/ThemeSwitch";
import { useContext } from "react";
import { ContextApi } from "../ContextApi.jsx";

function Home({ toggleTheme, isDark }) {
  const { count, setCount } = useContext(ContextApi);

  useEffect(() => {
    console.log("Home mounted");
    return () => {
      console.log("Home unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Theme changed:", isDark ? "dark" : "light");
  }, [isDark]);

  const themeButtonLabel = useMemo(
    () => (isDark ? "Light Mode" : "Dark Mode"),
    [isDark]
  );

  return (
    <HomeContainer>
      <h1>Mini Apps</h1>
      <h2>hai: {count}</h2>

      <div className="button-row">
        <Link to="/todo">
          <button className="button">Todo App</button>
        </Link>

        <Link to="/weather">
          <button className="button">Weather App</button>
        </Link>
        
        
      </div>
      <ToggleButton onClick={toggleTheme}>
        {themeButtonLabel}
      </ToggleButton>
      <button className="button" onClick={() => setCount(count + 1)}>
        Increment Count
      </button>


    </HomeContainer>
    
    
  );
}

export default Home;
