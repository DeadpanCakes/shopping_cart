import { CartConsumer } from "../../CartContext";
import { UserConsumer } from "../../UserContext";
import WishListing from "./WishListing";
import EmptyWishlist from "./EmptyWishlist";
import { useHistory } from "react-router-dom";
import Hero from "../Generic/Hero";
import heroImg from "../../img/aboutImg3.webp";

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
                <div style={{ minHeight: "100vh" }}>
                  <Hero img={heroImg}>
                    <h1
                      style={{
                        color: "aliceblue",
                        textShadow: "0 0 5px black",
                        position: "absolute",
                        bottom: "5%",
                        left: "3%",
                      }}
                    >
                      Wishlist
                    </h1>
                  </Hero>
                  {user.loggedUser.wishList.length > 0 ? (
                    <>
                      <ul
                        style={{
                          width: "70vw",
                          marginLeft: "15vw",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {user.loggedUser ? (
                          user.loggedUser.wishList.map((item) => {
                            return (
                              <WishListing
                                item={item}
                                removeWish={() =>
                                  editUser(loggedUser.id, "removeWish", item)
                                }
                                addToCart={() =>
                                  addItem({ ...item, quantity: 1 })
                                }
                              />
                            );
                          })
                        ) : (
                          <p>Go log in</p>
                        )}
                      </ul>{" "}
                    </>
                  ) : (
                    <EmptyWishlist />
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
