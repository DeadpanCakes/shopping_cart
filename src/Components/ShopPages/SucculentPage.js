import stock from '../../items/stock';
import ItemListing from '../ItemListing';

const SucculentPage = () => {
    const styling = {
        display: 'grid'
    }

    return (
        <main style={styling}>
            {stock.succulents.map(item => (
                <ItemListing key={item.id} item={item} />
            ))}
        </main>
    )
}

export default SucculentPage;