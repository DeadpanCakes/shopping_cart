import itemFactory from './itemFactory';

const suppliesFactory = (id, name, price, tagArr) => {
    return itemFactory(id, name, price, 'supply', tagArr)
}

export default suppliesFactory;