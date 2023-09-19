import { Fragment } from "react";

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <ul>
      <h2>
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"}
      </h2>
      {activities.map((activity) => (
        <Fragment key={activity.id}>
          <li key={activity.id}>{activity.name}</li>
          <button type="button" onClick={() => onDeleteActivity(activity.id)}>
            X
          </button>
        </Fragment>
      ))}
    </ul>
  );
}
