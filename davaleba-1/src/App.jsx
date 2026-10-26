
import './App.css'

function App() {
  const username = "gio";
  const age = 36;

  function ageCheck() {
    if (age >= 18) {
      return " good";
    } else {
      return "bad guy";
    }
  }

  return (
    <>
      <div style={{ background: "blue", color: "white" }}>
        <div>
          <h1>
            you are <div>{ageCheck()}</div>
          </h1>
        </div>

        <h1 style={{ color: "tomato" }}>this is cs class</h1>
        <p style={{ color: "green" }}>bleh bleh bleh</p>
      </div>
    </>
  );
}

export default App
