import "./Toggle.css";

export default function Toggle({ checked, onChange }) {
  return (
    <>
      <label className="switch">
        {/* <input type="checkbox" checked /> */}
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />

        <span className="slider round"></span>
      </label>
    </>
  );
}
