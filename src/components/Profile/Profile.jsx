import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <main className={s.content}>
      Main
      <div>
        <h1>Name</h1>
        <img
          className={s.avatar}
          src="https://i.pinimg.com/600x315/1e/d3/0d/1ed30d98f49be532ae58c62f33677b16.jpg"
          alt="avatar"
        />
        <p>info</p>
      </div>
      <MyPosts />
    </main>
  );
};

export default Profile;
