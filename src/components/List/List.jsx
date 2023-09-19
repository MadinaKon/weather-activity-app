export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );
  return (
    <ul>
      <h2>
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"}
      </h2>
      {filteredActivities.map((activity) => (
        <>
          <li key={activity.id}>{activity.name}</li>
          <button type="button" onClick={() => onDeleteActivity(activity.id)}>
            X
          </button>
        </>
      ))}
    </ul>
  );
}
