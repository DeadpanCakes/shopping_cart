import { useState } from "react";
import { Link } from "react-router-dom";
import { UserConsumer } from "../../UserContext";
import useUsers from "../../useUsers";
import InfoSection from "./InfoSection";

const Profile = (props) => {
  const { users, editUser } = useUsers();
  const { editingPayment, setEditPayment } = useState(false);

  return (
    <UserConsumer>
      {(user) => {
        const { loggedUser } = user;
        return loggedUser ? (
          (() => {
            return (
              <div>
                <InfoSection title="Billing" info={loggedUser.billingInfo} />
                <InfoSection title="Shipping" info={loggedUser.shippingInfo} />
                <InfoSection title="Payment" info={loggedUser.paymentInfo} />
              </div>
            );
          })()
        ) : (
          <Link to="/profile/log-in">
            <button>Log In</button>
          </Link>
        );
      }}
    </UserConsumer>
  );
};

export default Profile;
