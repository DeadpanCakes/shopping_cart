const OrderItems = (props) => {
    const {items} = props;
    return <ul>
        {items.map((item) => {
            return <li key={item.id}></li>
        })}
    </ul>
}

export default OrderItems;