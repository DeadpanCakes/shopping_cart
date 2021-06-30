import { UserConsumer } from "../../UserContext";
import WishListing from "./WishListing";

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
                  <WishListing
                    item={item}
                    removeWish={() =>
                      editUser(loggedUser.id, "removeWish", item)
                    }
                  />
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
