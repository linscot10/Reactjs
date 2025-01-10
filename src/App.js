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
import User from "./User";
import Dashboard from "./Dashboard";
import Profile_1 from "./Profile_1";
import Settings from "./Settings";
import HomeRedirect from "./HomeRedirect";
import NotFound from "./NotFound";
import RecipeDetails from "./RecipeDetails";
import RecipeHome from "./RecipeHome";
import Recipes from "./Recipes";
import CounterReducer from "./CounterReducer";
import ToggleTheme from "./contextApi/ToggleTheme";
import ConsumeTheme from "./contextApi/ConsumeTheme";
import FormData from "./forms/FormData";
import UncontrolledFormData from "./forms/UncontrolledFormData";
import BasicFormValidation from "./forms/BasicFormValidation";
import FromikForm from "./forms/FromikForm";
function App() {
  return (
    <div className="App">

      <ToggleTheme>
        <ConsumeTheme />
      </ToggleTheme>
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
          <Link to="/">Home</Link> | <Link to="/about">About Us</Link> | <Link to="/contact">Contact Us</Link> | <Link to="/todoApp">TODO App</Link> | <Link to="/logger">Logger</Link> | <Link to="/UsersList">UserList</Link> | <Link to="/posts">Posts</Link> | <Link to="/user/1" >User 1</Link> | <Link to="/user/2" >User 2</Link> | <Link to="/user/osuru" >User osuru</Link>   <Link to="/dashboard" >Dashboard</Link> || <Link to='/homeRecipe'> Home Page</Link> || <Link to='/recipe'> Recipe Page</Link> || <Link to='/recipeDetails/mchele'> Recipe Details Page</Link> || <Link to='/reduceCounter'> Reducer Counter</Link>  || <Link to='/form'>Form</Link>  || <Link to='/unform'>FormData</Link> || <Link to='/validationform'>Validation</Link> || <Link to='/formik'>Formik Validation</Link>
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
          <Route path="/user/:id" element={<User />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="profile_1" element={<Profile_1 />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="/homeRedirect" element={<HomeRedirect />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homeRecipe" element={<RecipeHome />} />
          <Route path="/recipeDetails/:id" element={<RecipeDetails />} />
          <Route path="/recipe" element={<Recipes />} />
          <Route path="/reduceCounter" element={<CounterReducer />} />
          <Route path="/form" element={<FormData />} />
          <Route path="/unform" element={<UncontrolledFormData />} />
          <Route path="/validationform" element={<BasicFormValidation />} />
          <Route path="/formik" element={<FromikForm />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;