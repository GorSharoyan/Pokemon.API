import "./App.css";

//components
import SwitchRouter from "./routes/SwitchRouter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SwitchRouter />
      <Footer></Footer>
    </div>
  );
}

export default App;
