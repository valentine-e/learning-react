const Profile = () => {
  return (
    <main className="content">
      Main
      <div>
        <h1>Name</h1>
        <img
          className="avatar"
          src="https://i.pinimg.com/600x315/1e/d3/0d/1ed30d98f49be532ae58c62f33677b16.jpg"
          alt="avatar"
        />
        <p>info</p>
      </div>
      <div>
        <ul className="feed">
          <li className="post">a</li>
          <li className="post">2</li>
          <li className="post">3</li>
        </ul>
      </div>
    </main>
  );
};

export default Profile;
