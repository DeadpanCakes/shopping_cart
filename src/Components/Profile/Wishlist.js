const Wishlist = (props) => {
  const { wishlist } = props;
  return (
    <div>
      <ul>
        {wishlist.map((item) => {
          return (
            <li>
              <p>{item.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Wishlist;
