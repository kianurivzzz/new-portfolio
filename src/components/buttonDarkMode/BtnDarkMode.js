// libs
import { useEffect } from "react";

// utils
import { useLocalStorage } from "../../utils/useLocalStorage";
import detectColorMode from "../../utils/detectColorMode";

// styles
import "./style.css";

// imgs
import sun from "./img/sun.svg";
import moon from "./img/moon.svg";

const BtnDarkMode = () => {
  const [colorMode, setDarkMode] = useLocalStorage(
    "colorMode",
    detectColorMode()
  );

  useEffect(() => {
    if (colorMode === "dark") {
      document.body.classList.add("dark");
    } else if (colorMode === "light") {
      document.body.classList.remove("dark");
    }
  }, [colorMode]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme);
      });
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };

  const btnNormal = "dark-mode-btn";
  const btnActive = "dark-mode-btn dark-mode-btn--active";

  return (
    <button
      className={colorMode === "dark" ? btnActive : btnNormal}
      onClick={toggleDarkMode}
    >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkMode;
