import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to='/shop'>Shop</Link>
        </div>
    )
}
export default HomePage;