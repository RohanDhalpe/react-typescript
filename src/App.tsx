import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    firstname: "Rohan",
    lastname: "Dhalpe",
  };

  const nameList = [
    {
      firstName: "Rohan",
      lastName: "Dhalpe",
    },
    {
      firstName: "Rohan",
      lastName: "Dhalpe",
    },
    {
      firstName: "Rohan",
      lastName: "Dhalpe",
    },
  ];
  return (
    <div className="App">
      <Greet name="Rohan" lectureCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
