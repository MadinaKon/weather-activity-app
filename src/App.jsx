import "./App.css";
import Form from "./components/Form/Form";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from "./components/List/List";
import { useEffect, useState } from "react";
import Child from "./components/Child/Child";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const [weather, setWeather] = useState("");

  async function fetchWeatherApi() {
    const response = await fetch("https://example-apis.vercel.app/api/weather");
    const data = await response.json();
    setWeather(data);
  }

  useEffect(() => {
    const intervalId = setInterval(fetchWeatherApi, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather.isGoodWeather
  );
  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <>
      <Child />
      <h2 className="weather-condition">{weather.condition}</h2>
      <h3 className="weather-temperature">{weather.temperature}&deg;C</h3>
      <Child />
      <List
        activities={filteredActivities}
        isGoodWeather={weather.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
