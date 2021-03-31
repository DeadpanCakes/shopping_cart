import { Link } from 'react-router-dom';
import useStock from '../items/itemHooks/useStock';

const HomePage = () => {
    const stock = useStock()
    console.log(stock)

    return (
        <div>
            <h1>Home</h1>
            <Link to='/shop'>Shop</Link>
        </div>
    )
}
export default HomePage;