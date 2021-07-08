import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import TechnologyList from "./components/TechnologyList";
import ProjectsList from "./components/ProjectsList";
import Contact from "./components/Contact";
import data from "./data.json";

function App() {
  const [language, setLanguage] = useState("english");

  return (
    <div className="App">
      <Header data={data} />
      <LandingPage data={data[language].introduction} />
      <TechnologyList data={data[language].technologies} />
      <ProjectsList data={data[language].projectList} />
      <Contact data={data[language].contact} />
    </div>
  );
}

export default App;
