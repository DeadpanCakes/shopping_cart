const Profile = (props) => {
  const { isLoggedIn, user } = props;
  return isLoggedIn ? (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.orders}</h2>
    </div>
  ) : (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Email
          <input></input>
        </label>
        <label>
          Password
          <input></input>
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default Profile;
