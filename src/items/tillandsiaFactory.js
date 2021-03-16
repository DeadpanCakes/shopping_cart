import itemFactory from './itemFactory';

const tillandsiaFactory = (id, name, price, tagArr) => {
    return itemFactory(id, name, price, 'tillandsia', tagArr)
}

export default tillandsiaFactory;