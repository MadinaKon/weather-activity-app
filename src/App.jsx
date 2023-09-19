import "./App.css";
import Form from "./components/Form/Form";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from "./components/List/List";
import { useEffect, useState } from "react";

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
    fetchWeatherApi();
  }, []);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather.isGoodWeather
  );

  return (
    <>
      <h2> Condition {weather.condition}</h2>
      <h3>Temperature {weather.temperature}</h3>
      <List
        activities={filteredActivities}
        isGoodWeather={weather.isGoodWeather}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
