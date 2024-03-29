import React from "react";
import { useState } from "react";
import { useCollapse } from "react-collapsed";
import "./App.css";
import FormAddTask from "./FormAddTask";
import ToDoList from "./ToDoList";

function App() {
  const [listArray, setListArray] = useState([]);
  const { getCollapseProps, getToggleProps } = useCollapse();

  return (
    <div className="App">
      <div>
        <button {...getToggleProps()}>+</button>
        <section {...getCollapseProps()}>
          {
            <FormAddTask
              listArray={listArray}
              setListArray={setListArray}
            ></FormAddTask>
          }
        </section>
      </div>
      <div>
        <ToDoList listArray={listArray}></ToDoList>
      </div>
    </div>
  );
}

export default App;
