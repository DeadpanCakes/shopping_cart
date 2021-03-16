import ItemListing from './ItemListing';
import stock from '../items/stock';

const ShopPage = () => {
    return (
        <main>
            <h1>Shop</h1>
            <h2>Section 1</h2>
            <div>
            <h2>Succulents</h2>
            {stock.succulents.map(item => (
                <ItemListing key={item.id} item={item}/>
            ))}
            </div>
            <h2>Section 3</h2>
            <h2>Section 4</h2>
        </main>
    )
}

export default ShopPage;