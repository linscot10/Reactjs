import React from "react";
import { Greetings, Hello } from "./Greetings";
import Welcome from "./Welcome";
import Profile from "./Profile";
import Counter from "./Counter";
// import components from "./Greetings";

function App() {
  return (
    <div className="App">
      {/* <components.Greetings name='Lawrence' />
      <components.Greetings name='Osuru' />
      <components.Hello jina='scott' /> */}

      <Greetings name='Lawrence' />
      <Greetings name='Osuru' />
      <Hello jina='scott' />
      <Hello jina='Caleb' />
      <Welcome message="Welcome to React 18!" />

      {/* Profilecard */}
      <Profile
        image="https://via.placeholder.com/150"
        name="Lawrence Osuru"
        about='A software engineer who loves React!'

      />
      <Profile
        image="https://via.placeholder.com/150"
        name="Caleb Oduor"
        about='A software engineer who loves React!'

      />

      <Counter />


    </div>
  );
}

export default App;