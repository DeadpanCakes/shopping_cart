const ItemListing = (props) => {
    const {item} = props
    return (
        <li key={item.id}>
            <h2>{item.name}</h2>
            <h4>${item.price}</h4>
        </li>
    )
}

export default ItemListing;