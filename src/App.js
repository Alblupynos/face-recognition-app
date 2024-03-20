import "./App.css";
import Navigation from "./components/navigation/navigation.component";
import Logo from "./components/logo/logo.component";
import Rank from "./components/rank/rank.component";
import ImageLinkForm from "./components/image-link-form/image-link-form.component";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      <ParticlesBg
        color="#ffffff"
        type="circle"
        bg={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}

export default App;
