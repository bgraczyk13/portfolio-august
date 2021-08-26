import "./App.css";
import Navigation from "./screens/navigationBar/NavigationBar";
import ParticleAnimation from "react-particle-animation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <ParticleAnimation
        style={{ height: "96vh" }}
        background={{ r: 225, g: 135, b: 155, a: 5 }}
        particleSpeed={0.1}
        particleRadius={1.5}
        color={{ r: 158, g: 220, b: 244, a: 265 }}
      />
    </div>
  );
}

export default App;
