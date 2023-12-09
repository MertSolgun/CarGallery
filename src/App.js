import "./App.css";
import Cars from "./components/Cars";
import data from "./helper/data";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [filterinput, setFilterinput] = useState(data);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const filteredInput = data.filter((item) => {
      return (
        item.model.toLowerCase().includes(inputValue.toLowerCase().trim()) ||
        item.make.toLowerCase().includes(inputValue.toLowerCase().trim())
      );
    });
    setFilterinput(filteredInput);
  };
  return (
    <div>
      <Header handleChange={handleChange} />
      <div className="main">
        <Cars filterinput={filterinput} />
      </div>
    </div>
  );
}

export default App;
