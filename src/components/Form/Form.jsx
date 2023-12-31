import "./Form.css";
export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    onAddActivity({
      name: event.target.name.value,
      isForGoodWeather: event.target.isForGoodWeather.checked,
    });
    event.target.reset();
    event.target.elements.name.focus();
  }
  return (
    <form className="activity-form" onSubmit={handleSubmit}>
      <h3>Add New Activity:</h3>
      <div className="form-field">
        <label className="form-label" htmlFor="name">
          Activity:
        </label>
        <input
          className="form-input"
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div>
        <label className="form-label" htmlFor="isForGoodWeather">
          Good-weather activity:
        </label>
        <input
          className=" form-checkbox"
          type="checkbox"
          id="isForGoodWeather"
          name="isForGoodWeather"
        />
      </div>

      <button className="btn-submit" type="submit">
        Submit
      </button>
    </form>
  );
}
