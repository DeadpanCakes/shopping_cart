import { UserConsumer } from "../../UserContext";

const Wishlist = (props) => {
  return (
    <UserConsumer>
      {(user) => {
        return (
          <div>
            {user.loggedUser ? (
              user.loggedUser.wishList.map((item) => {
                return <p key={item.name}>{item.name}</p>;
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
