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

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      {/* <components.Greetings name='Lawrence' />
      <components.Greetings name='Osuru' />
      <components.Hello jina='scott' /> */}

      {/* <Greetings name='Lawrence' />
      <Greetings name='Osuru' />
      <Hello jina='scott' />
      <Hello jina='Caleb' /> */}
      <Welcome message="Welcome to React 18!" />

      Profilecard
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

      {/* <Posts />

      <TodoApp /> */}

      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About Us</Link> | <Link to="/contact">Contact Us</Link> | <Link to="/todoApp">TODO App</Link> | <Link to="/logger">Logger</Link> | <Link to="/UsersList">UserList</Link> | <Link to="/posts">Posts</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/profile" element={<Profile
            image="https://via.placeholder.com/150"
            name="Caleb Oduor"
            about='A software engineer who loves React!'
          />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/logger" element={<Logger />} />
          <Route path="/UsersList" element={<UsersList />} />
          <Route path="/toggleText" element={<ToggleText />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/TodoApp" element={<TodoApp />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;