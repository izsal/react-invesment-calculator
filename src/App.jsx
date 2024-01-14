import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userinput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const inpusIsValid = userinput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} UserInput={userinput} />
      {!inpusIsValid && (
        <p className="center">Please enter a duration greater then zero </p>
      )}
      {inpusIsValid && <Results input={userinput} />}
    </>
  );
}

export default App;
