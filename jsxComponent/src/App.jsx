import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./style/Theme";
import GlobalStyle from "./components/ui/GlobalStyle";

const Home = lazy(() => import("./Home/Home"));
const TodoPage = lazy(() => import("./Todo/TodoPage"));
const WeatherPage = lazy(() => import("./Weather/WeatherPage"));

function App() {
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      return storedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={<Home toggleTheme={toggleTheme} isDark={isDark} />}
          />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
