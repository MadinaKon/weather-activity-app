export default function List({ activities, isGoodWeather }) {
  return (
    <>
      <ul>
        <h2>
          {isGoodWeather
            ? "The weather is awesome! Go outside and:"
            : "Bad weather outside! Here's what you can do now:"}
        </h2>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </>
  );
}
