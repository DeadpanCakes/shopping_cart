import { useState, useEffect } from "react";

const useUser = () => {
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers((prevState) => prevState.concat(newUser));
  };

  const editUser = (user, field, newValue) => {
    switch (field) {
      case "addOrder":
        addOrder(user, newValue);
        break;
      case "addWish":
        addWish(user, newValue);
        break;
      case "removeWish":
        removeWish(user, newValue);
        break;
      case "editShipping":
        editShipping(user, newValue);
        break;
      case "editBilling":
        editBilling(user, newValue);
        break;
      case "editPayment":
        editPayment(user, newValue);
        break;
      default:
        throw new Error("Invalid Field");
    }
  };

  const addOrder = (targetUser, newOrder) => {
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === targetUser.id) {
          return { ...user, orders: user.orders.concat(newOrder) };
        }
        return user;
      });
    });
  };

  const addWish = (targetUser, newWish) => {
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === targetUser.id) {
          return { ...user, wishList: user.wishList.concat(newWish) };
        }
        return user;
      });
    });
  };

  const removeWish = (targetUser, targetWish) => {
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === targetUser.id) {
          return {
            ...user,
            wishList: user.wishList.filter((item) => item !== targetWish),
          };
        }
        return user;
      });
    });
  };

  const editShipping = (targetUser, updatedInfo) => {
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === targetUser.id) {
          return {
            ...user,
            shippingInfo: updatedInfo,
          };
        }
        return user;
      });
    });
  };

  const editBilling = (targetUser, updatedInfo) => {
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === targetUser.id) {
          return {
            ...user,
            billingInfo: updatedInfo,
          };
        }
        return user;
      });
    });
  };

  const editPayment = (targetUser, updatedInfo) => {
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === targetUser) {
          return {
            ...user,
            paymentInfo: updatedInfo,
          };
        }
        console.log('user not reached')
        return user;
      });
    });
  };

  useEffect(() => {
    const storedUsers = window.localStorage.getItem("users");
    if (storedUsers) {
      const parsedUsers = JSON.parse(storedUsers);
      setUsers(parsedUsers);
    }
  }, []);

  useEffect(() => {
    const usersJSON = JSON.stringify(users);
    window.localStorage.setItem("users", usersJSON);
  }, [users]);

  return { users, addUser, editUser };
};

export default useUser;
