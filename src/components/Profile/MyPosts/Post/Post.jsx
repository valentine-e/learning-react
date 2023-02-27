import s from "./Post.module.css";

const Post = (props) => {
  return (
    <li className={s.item}>
      {props.message}
      <div>
        <button>like</button>
        {props.likescount}
      </div>
    </li>
  );
};

export default Post;
