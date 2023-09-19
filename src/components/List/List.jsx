import { Fragment } from "react";
import "./List.css";

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
          <div>
            <li key={activity.id}>
              {activity.name}{" "}
              <button
                type="button"
                onClick={() => onDeleteActivity(activity.id)}
              >
                X
              </button>
            </li>
          </div>
        </Fragment>
      ))}
    </ul>
  );
}
