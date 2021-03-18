import itemFactory from './itemFactory';

const suppliesFactory = (id, name, price, tagArr, imgSrc) => {
    return itemFactory(id, name, price, 'supply', tagArr, imgSrc)
}

export default suppliesFactory;