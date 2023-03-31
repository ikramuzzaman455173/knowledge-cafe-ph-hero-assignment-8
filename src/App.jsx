import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import BookmarkBlogPost from "./Components/BookmarkBlogPost/BookmarkBlogPost";
import "../src/style.css"
function App() {
  return (
    <div>
        <Header></Header>
        <div className="main row">
        <div className="home-container col-md-9 mb-4">
          <Home></Home>
        </div>
        <div className="sideCart col-md-3   ">
          <BookmarkBlogPost></BookmarkBlogPost>
        </div>
      </div>
    </div>
  );
}

export default App;
