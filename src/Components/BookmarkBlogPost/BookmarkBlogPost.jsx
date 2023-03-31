import SpendTime from "../SpendTime/SpendTime"
const BookmarkBlogPost = () => {

  return (
    <div className="sticky">
      <SpendTime />
      <div className="bookmark border-0 rounded mt-5 py-4">
        <div className="h6 ms-2 fw-semibold">Bookmarked Blogs : <span className="span">8</span></div>
        <div className="bookmarks fw-semibold">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sunt?</p>
        </div>
      </div>
    </div>
  );
};

export default BookmarkBlogPost;
