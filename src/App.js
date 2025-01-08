import React from "react";
import { Greetings, Hello } from "./Greetings";
import Welcome from "./Welcome";
import Profile from "./Profile";
import Counter from "./Counter";
import Logger from "./Logger";
import UsersList from "./UsersList";
import ToggleText from "./ToggleText";
// import ToDoApp from "./ToDoApp";
import Posts from './Posts'
import TodoApp from "./TodoApp";
// import components from "./Greetings";

function App() {
  return (
    <div className="App">
      {/* <components.Greetings name='Lawrence' />
      <components.Greetings name='Osuru' />
      <components.Hello jina='scott' /> */}

      {/* <Greetings name='Lawrence' />
      <Greetings name='Osuru' />
      <Hello jina='scott' />
      <Hello jina='Caleb' />
      <Welcome message="Welcome to React 18!" /> */}

      {/* Profilecard */}
      {/* <h1>Props</h1>
      <Profile
        image="https://via.placeholder.com/150"
        name="Lawrence Osuru"
        about='A software engineer who loves React!'

      />
      <Profile
        image="https://via.placeholder.com/150"
        name="Caleb Oduor"
        about='A software engineer who loves React!'

      /> */}

      <h1>UseState and useeffect</h1>

      {/* <Counter />
      <Logger />
      <UsersList />
      <ToggleText /> */}

      {/* <Posts /> */}

      <TodoApp />
    </div>
  );
}

export default App;