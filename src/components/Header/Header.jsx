import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        className={s.logo}
        src="https://www.creativefabrica.com/wp-content/uploads/2021/01/20/1611184229/Love-you-more-than-yesterday-Yesterday-you-got-on-my-580x386.jpg"
        alt="#"
      />
    </header>
  );
};

export default Header;
