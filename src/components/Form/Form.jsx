import "./Form.css";
export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    onAddActivity({
      name: event.target.name.value,
      isForGoodWeather: event.target.isForGoodWeather.checked,
    });
    event.target.reset();
    event.target.elements.name.focus();
  }
  return (
    <>
      <form className="activity-form" onSubmit={handleSubmit}>
        <h3>Add new Activity</h3>
        <div className="form-field">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
          ></input>
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
          ></input>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
