import { useState } from "react";
import { Link } from "react-router-dom";
import { UserConsumer } from "../../UserContext";
import InfoSection from "./InfoSection";

const Profile = () => {
  const [editingPayment, setEditPayment] = useState(false);
  const toggleEditPayment = () => setEditPayment((prevState) => !prevState);
  const [editingBilling, setEditBilling] = useState(false);
  const toggleEditBilling = () => setEditBilling((prevState) => !prevState);
  const [editingShipping, setEditShipping] = useState(false);
  const toggleEditShipping = () => setEditShipping((prevState) => !prevState);

  return (
    <UserConsumer>
      {(user) => {
        const { loggedUser, editUser } = user;
        return loggedUser ? (
          (() => {
            return (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gridTemplateRows: "1fr 1fr",
                  minHeight: '100vh'
                }}
              >
                <section style={{ display: "flex", flexDirection: "column" }}>
                  <h1>Profile</h1>
                  <p>{loggedUser.email}</p>
                  <button>Subscribe To Newsletter</button>
                  <button>Change Password</button>
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
            );
          })()
        ) : (
          <>
            <Link to="/profile/log-in">
              <button>Log In</button>
            </Link>
            <button onClick={() => console.log(user)}>check</button>
          </>
        );
      }}
    </UserConsumer>
  );
};

export default Profile;
