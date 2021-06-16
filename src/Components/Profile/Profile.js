import { useState } from "react";
import { Link } from "react-router-dom";
import { UserConsumer } from "../../UserContext";
import InfoSection from "./InfoSection";

const Profile = (props) => {
  const [ editingPayment, setEditPayment ] = useState(false);
  const toggleEditPayment = () => setEditPayment((prevState) => !prevState);
  const [ editingBilling, setEditBilling ] = useState(false);
  const toggleEditBilling = () => setEditBilling((prevState) => !prevState);
  const [ editingShipping, setEditShipping ] = useState(false);
  const toggleEditShipping = () => setEditShipping((prevState) => !prevState);

  return (
    <UserConsumer>
      {(user) => {
        const { loggedUser, editUser } = user;
        return loggedUser ? (
          (() => {
            return (
              <div>
                <InfoSection
                  section="Billing"
                  info={loggedUser.billingInfo}
                  user={user}
                  editUser={editUser}
                  isBeingEdited={editingBilling}
                  toggleEdit={toggleEditBilling}
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
                  section="Payment"
                  info={loggedUser.paymentInfo}
                  user={user}
                  editUser={editUser}
                  isBeingEdited={editingPayment}
                  toggleEdit={toggleEditPayment}
                  test={loggedUser}
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
