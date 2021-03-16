const ItemListing = (props) => {
    const {item} = props

    const styling = {
        margin: '5px',
        backgroundColor: '#CFDBD5'
    }

    return (
        <li key={item.id} style={styling}>
            <h2>{item.name}</h2>
            <h4>${item.price}</h4>
        </li>
    )
}

export default ItemListing;