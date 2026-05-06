import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoPage from "./pages/TodoPage";
import WeatherPage from "./pages/WeatherPage";
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./style/Theme";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      return storedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // 🔥 simpan pilihan theme setiap berubah
  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // 🔥 tombol toggle
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />

      <Routes>
        <Route
          path="/"
          element={<Home toggleTheme={toggleTheme} isDark={isDark} />}
        />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
