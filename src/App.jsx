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
  const [isLoading, setIsLoading] = useState(false);

  async function fetchWeatherApi() {
    try {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setIsLoading(true);
      setWeather(data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(fetchWeatherApi, 2000);

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
      {isLoading && (
        <>
          <h3 className="weather-temperature">{weather.temperature}&deg;C</h3>
          <List
            activities={filteredActivities}
            isGoodWeather={weather.isGoodWeather}
            onDeleteActivity={handleDeleteActivity}
          />
        </>
      )}
      <Child />

      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
