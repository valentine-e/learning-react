import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <h3>My posts</h3>
      <p>New Post</p>
      <textarea></textarea>
      <button>Add post</button>
      <button>Remove</button>
      <ul className={s.feed}>
        <Post message="Hi, How are you?" likescount="0" />
        <Post message="This is my first post" likescount="14" />
        <Post message="Blabla" />
        <Post />
      </ul>
    </div>
  );
};

export default MyPosts;
