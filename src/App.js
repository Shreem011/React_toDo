import { useState } from "react";
import Box from "./Components/Box";
import Input from "./Components/Input";

function App() {
  const [todos, setToDos] = useState([]);

  const removeToDo = (id) => {
    const newToDos = todos.filter((d, index) => {
      if (index !== id) {
        return true;
      } else {
        return false;
      }
    });
    setToDos(newToDos);
  };

  const addToDoHandler = (item) => {
    setToDos([
      ...todos,
      {
        item,
        time: new Date().toLocaleTimeString(),
      },
    ]);
  };

  return (
    <div className="bg-black h-screen p-3">
      <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-white">
        <Input handler={addToDoHandler} />
        <Box data={todos} removeHandler={removeToDo} />
      </div>
    </div>
  );
}

export default App;
