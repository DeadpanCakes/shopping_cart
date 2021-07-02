import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserConsumer } from "../../UserContext";
import InfoSection from "./InfoSection";
import Banner from "../Generic/Banner";
import Notification from "../Generic/Notification";

const Profile = () => {
  const [editingPayment, setEditPayment] = useState(false);
  const toggleEditPayment = () => setEditPayment((prevState) => !prevState);
  const [editingBilling, setEditBilling] = useState(false);
  const toggleEditBilling = () => setEditBilling((prevState) => !prevState);
  const [editingShipping, setEditShipping] = useState(false);
  const toggleEditShipping = () => setEditShipping((prevState) => !prevState);
  const [message, setMessage] = useState("");
  const changePassword = () => {
    setMessage("Request received. You should receive an email within 1 hour.");
    setTimeout(() => setMessage(""), 2000);
  };

  const history = useHistory();

  return (
    <UserConsumer>
      {(user) => {
        const { loggedUser, editUser } = user;

        (() => {
          if (!loggedUser) {
            history.push("/profile/log-in");
          }
        })();

        return loggedUser ? (
          (() => {
            const handleToggle = () => {
              if (loggedUser.isSubscribed) {
                setMessage("You have unsubscribed to our newsletter.");
                editUser(loggedUser.id, "toggleSub");
                setTimeout(() => setMessage(""), 2000);
              } else {
                setMessage("You have subscribed to our newsletter!");
                editUser(loggedUser.id, "toggleSub");
                setTimeout(() => setMessage(""), 2000);
              }
            };
            return (
              <div>
                <Banner text="Profile" />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gridTemplateRows: "1fr 1fr",
                    minHeight: "125vh",
                    justifyItems: "center",
                    alignItems: "center",
                    alignContent: "start",
                    margin: "30px 0",
                  }}
                >
                  <section
                    style={{
                      border: "#2a2b2a 2px solid",
                      borderRadius: 10,
                      padding: "100px 200px",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h1>Profile</h1>
                      <p>Email: {loggedUser.email}</p>
                      <button style={{ marginTop: 10 }} onClick={handleToggle}>
                        {loggedUser.isSubscribed
                          ? "Unsubscribe To Newsletter"
                          : "Subscribe To Newsletter"}
                      </button>
                      <button onClick={changePassword}>Change Password</button>
                    </div>
                    <div style={{ position: "relative" }}>
                      {message ? (
                        <Notification
                          message={message}
                          notificationType="confirmation"
                          miscStyle={{
                            position: "absolute",
                            right: "-50%",
                            minWidth: "20vw",
                          }}
                        />
                      ) : null}
                    </div>
                  </section>
                  <InfoSection
                    section="Payment"
                    info={loggedUser.paymentInfo}
                    user={user}
                    editUser={editUser}
                    isBeingEdited={editingPayment}
                    toggleEdit={toggleEditPayment}
                  />
                  <InfoSection
                    section="Shipping"
                    info={loggedUser.shippingInfo}
                    user={user}
                    editUser={editUser}
                    isBeingEdited={editingShipping}
                    toggleEdit={toggleEditShipping}
                  />
                  <InfoSection
                    section="Billing"
                    info={loggedUser.billingInfo}
                    user={user}
                    editUser={editUser}
                    isBeingEdited={editingBilling}
                    toggleEdit={toggleEditBilling}
                  />
                </div>
              </div>
            );
          })()
        ) : (
          <>
            <Link to="/profile/log-in">
              <button>Log In</button>
            </Link>
          </>
        );
      }}
    </UserConsumer>
  );
};

export default Profile;
