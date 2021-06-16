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

  const addOrder = (targetId, newOrder) => {
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === targetId) {
          return { ...user, orders: user.orders.concat(newOrder) };
        }
        return user;
      });
    });
  };

  const addWish = (targetId, newWish) => {
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === targetId) {
          return { ...user, wishList: user.wishList.concat(newWish) };
        }
        return user;
      });
    });
  };

  const removeWish = (targetId, targetWish) => {
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === targetId) {
          return {
            ...user,
            wishList: user.wishList.filter((item) => item !== targetWish),
          };
        }
        return user;
      });
    });
  };

  const editShipping = (targetId, updatedInfo) => {
    console.log(targetId, updatedInfo)
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === targetId) {
          return {
            ...user,
            shippingInfo: updatedInfo,
          };
        }
        return user;
      });
    });
  };

  const editBilling = (targetId, updatedInfo) => {
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === targetId) {
          return {
            ...user,
            billingInfo: updatedInfo,
          };
        }
        return user;
      });
    });
  };

  const editPayment = (targetId, updatedInfo) => {
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === targetId) {
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
