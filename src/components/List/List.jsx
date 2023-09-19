import { Fragment } from "react";
import "./List.css";

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h2>
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"}
      </h2>
      {activities.map((activity) => (
        <Fragment key={activity.id}>
          <ul>
            <li key={activity.id}>
              {activity.name}{" "}
              <button
                className="btn-delete"
                type="button"
                onClick={() => onDeleteActivity(activity.id)}
              >
                X
              </button>
            </li>
          </ul>
        </Fragment>
      ))}
    </>
  );
}
