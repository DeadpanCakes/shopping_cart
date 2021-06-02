import ItemListingSm from "../ItemListingSm";

const OrderItems = (props) => {
    const {items} = props;
    return <ul>
        {items.map((item) => {
            return <ItemListingSm key={item.id} item={item} />
        })}
    </ul>
}

export default OrderItems;