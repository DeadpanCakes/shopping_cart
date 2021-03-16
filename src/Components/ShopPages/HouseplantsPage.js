import stock from '../../items/stock';
import ItemListing from '../ItemListing';

const HouseplantsPage = () => {
    return (
        <main>
            {stock.map(item => (
                <ItemListing key={item.id} item={item} />
            ))}
        </main>
    )
}

export default HouseplantsPage;