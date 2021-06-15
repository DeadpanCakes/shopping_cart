import { UserConsumer } from "../../UserContext";
import useUsers from "../../useUsers";

const Profile = (props) => {
  const { users, editUser } = useUsers();

  return (
    <UserConsumer>
      {(user) => {
        const { loggedUser } = user;
        return loggedUser ? (
          (() => {
            const { name, cardNumber, expiration } = loggedUser.paymentInfo;
            return (
              <div>
                <section>
                  <div style={{ display: "flex" }}>
                    <h2>Payment Info</h2>
                    <button>Edit</button>
                  </div>
                  {[name, cardNumber, expiration].every(
                    (info) => info !== ""
                  ) ? (
                    <>
                      <p>Name: {name}</p>
                      <p>Card Number: {cardNumber}</p>
                      <p>Expires: {expiration}</p>
                    </>
                  ) : (
                    <p>No Information Available</p>
                  )}
                </section>
              </div>
            );
          })()
        ) : (
          <p>Go log in</p>
        );
      }}
    </UserConsumer>
  );
};

export default Profile;
