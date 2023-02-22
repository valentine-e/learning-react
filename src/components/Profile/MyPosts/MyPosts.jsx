import s from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div>
      <ul className={s.feed}>
        <li className={s.item}>1</li>
        <li className={s.item}>2</li>
        <li className={s.item}>3</li>
      </ul>
    </div>
  );
};

export default MyPosts;
