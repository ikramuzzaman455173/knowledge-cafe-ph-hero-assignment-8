import SpendTime from "../SpendTime/SpendTime"
const BookmarkBlogPost = () => {

  return (
    <div>
      <SpendTime />
      <div className="bookmark border-0 rounded mt-5 py-4">
        <div className="h6 ms-2">Bookmarked Blogs : <span>8</span></div>
        <div className="bookmarks">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sunt?</p>
        </div>
        <div className="bookmarks">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sunt?</p>
        </div>
        <div className="bookmarks">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sunt?</p>
        </div>
      </div>
    </div>
  );
};

export default BookmarkBlogPost;