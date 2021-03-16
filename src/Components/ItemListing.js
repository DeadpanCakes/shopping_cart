const ItemListing = (props) => {
    const {item} = props

    const styling = {
        margin: '5px',
        backgroundColor: '#CFDBD5',
        listStyle: 'none'
    }

    return (
        <li style={styling}>
            <img alt={`${item.name}`} src={item.imgSrc} />
            <h2>{item.name}</h2>
            <h4>${item.price}</h4>
        </li>
    )
}

export default ItemListing;