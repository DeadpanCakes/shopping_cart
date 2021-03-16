import itemFactory from './itemFactory';
import succulentFactory from './succulentFactory';

const suppliesFactory = (id, name, price, tagArr) => {
    return itemFactory(id, name, price, 'supply', tagArr)
}

export default suppliesFactory;