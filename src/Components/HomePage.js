import { Link } from 'react-router-dom';
import RecommendedSection from './RecommendedSection';

const HomePage = () => {
    return (
        <div>
            <h1>Home</h1>
            <RecommendedSection itemArr={[]} />
            <Link to='/shop'>Shop</Link>
        </div>
    )
}
export default HomePage;