import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggle__switch">
      <input
        type="checkbox"
        className="toggle__switch-checkbox"
        onChange={handleToggleSwitchChange}
        checked={currentTemperatureUnit === "C"}
      />
      <span className="toggle__switch-circle"></span>
      <span
        className={`toggle__seitch-text toggle__seitch-text-F ${
          currentTemperatureUnit === "F"
            ? "toggle__seitch-text-color-white"
            : ""
        }`}
      >
        F
      </span>
      <span
        className={`toggle__seitch-text toggle__seitch-text-C ${
          currentTemperatureUnit === "C"
            ? "toggle__seitch-text-color-white"
            : ""
        }`}
      >
        C
      </span>
    </label>
  );
}
