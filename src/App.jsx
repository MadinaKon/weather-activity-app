import "./App.css";
import Form from "./components/Form/Form";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState(" ");

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }
  return (
    <>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
