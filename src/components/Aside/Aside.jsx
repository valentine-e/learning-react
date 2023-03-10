import s from "./Aside.module.css";

const Aside = () => {
  return (
    <aside className={s.menu}>
      <ul>
        <li className={s.item}>
          <a href="/profile">Profile</a>
        </li>
        <li className={s.item}>
          <a href="/dialogs">Chats</a>
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
