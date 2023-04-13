import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../src/style.css";
import Blog from "./Components/Blog/Blog";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
function App() {
  return (
    <>
        <Header></Header>
      <Home ></Home>
      <Blog />
      <ToastContainer />
    </>
  );
}
export default App;