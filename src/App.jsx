import "../src/style.css";
import Blog from "./Components/Blog/Blog";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
function App() {
  return (
    <>
        <Header></Header>
      <Home ></Home>
      <Blog/>
    </>
  );
}

export default App;
