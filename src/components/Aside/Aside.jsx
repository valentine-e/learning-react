import s from "./Aside.module.css";

const Aside = () => {
  return (
    <aside className={s.menu}>
      <ul>
        <li className={s.item}>
          <a href="/Profile">Profile</a>
        </li>
        <li className={s.item}>
          <a href="/Dialogs">Chats</a>
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
