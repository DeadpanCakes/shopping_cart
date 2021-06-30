import { CartConsumer } from "../../CartContext";
import { UserConsumer } from "../../UserContext";
import WishListing from "./WishListing";
import { useHistory } from "react-router-dom";

const Wishlist = (props) => {
  const history = useHistory();
  return (
    <CartConsumer>
      {(cart) => {
        const { addItem } = cart;
        return (
          <UserConsumer>
            {(user) => {
              (() => {
                if (!user.loggedUser) {
                  history.push("/profile/log-in");
                }
              })();
              const { loggedUser, editUser } = user;
              return (
                <div>
                  <ul>
                    {user.loggedUser ? (
                      user.loggedUser.wishList.map((item) => {
                        return (
                          <WishListing
                            item={item}
                            removeWish={() =>
                              editUser(loggedUser.id, "removeWish", item)
                            }
                            addToCart={() => addItem({ ...item, quantity: 1 })}
                          />
                        );
                      })
                    ) : (
                      <p>Go log in</p>
                    )}
                  </ul>
                </div>
              );
            }}
          </UserConsumer>
        );
      }}
    </CartConsumer>
  );
};

export default Wishlist;
