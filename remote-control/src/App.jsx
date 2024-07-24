import "./App.css";

// Import remote modules using static imports.
// Use them inside the app component.
import Button from "homepage/Button";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Payment</h1>
      <div className="navBar">
        <div>
          <Button caption="Pay" />
        </div>
      </div>
    </div>
  );
}

export default App;
