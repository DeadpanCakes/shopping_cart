import { CartConsumer } from "../../CartContext";
import { UserConsumer } from "../../UserContext";
import WishListing from "./WishListing";

const Wishlist = (props) => {
  return (
    <CartConsumer>
      {(cart) => {
        const {addItem} = cart;
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
                          addToCart={() => addItem({...item, quantity: 1})}
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
      }}
    </CartConsumer>
  );
};

export default Wishlist;
