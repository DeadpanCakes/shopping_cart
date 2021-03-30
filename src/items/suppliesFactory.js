import itemFactory from './itemFactory';

const suppliesFactory = (id, name, price, tags, imgSrc) => {
    return itemFactory(id, name, price, 'supply', tags, imgSrc)
}

export default suppliesFactory;