import { UserConsumer } from "../../UserContext";

const Wishlist = (props) => {
  return (
    <UserConsumer>
      {(user) => {
        const { loggedUser, editUser } = user;
        return (
          <div>
            {user.loggedUser ? (
              user.loggedUser.wishList.map((item) => {
                return (
                  <li key={item.name}>
                    <p>{item.name}</p>;
                    <button
                      onClick={() =>
                        editUser(loggedUser.id, "removeWish", item)
                      }
                    >
                      Remove
                    </button>
                  </li>
                );
              })
            ) : (
              <p>Go log in</p>
            )}
          </div>
        );
      }}
    </UserConsumer>
  );
};

export default Wishlist;
