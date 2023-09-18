export default function List({ activities, isGoodWeather }) {
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
        <li key={activity.id}>{activity.name}</li>
      ))}
    </ul>
  );
}
