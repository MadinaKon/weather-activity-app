import "./App.css";
import Form from "./components/Form/Form";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from "./components/List/List";
import { useEffect, useState } from "react";
import Toggle from "./components/Toggle/Toggle";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const [weather, setWeather] = useState("");
  const [checked, setChecked] = useState(false);

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
      <h2> Condition {weather.condition}</h2>
      <h3>Temperature {weather.temperature}</h3>
      <Toggle checked={checked} onChange={setChecked} />
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
