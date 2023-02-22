import s from "./Aside.module.css";

const Aside = () => {
  return (
    <aside className={s.menu}>
      <ul>
        <li className={s.item}>
          <a href="#a">Profile</a>
        </li>
        <li className={s.item}>
          <a href="#a">Chats</a>
        </li>
        <li className={s.item}>
          <a href="#a">News</a>
        </li>
        <li className={s.item}>
          <a href="#a">Music</a>
        </li>
        <li className={s.item}>
          <a href="#a">Settings</a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
