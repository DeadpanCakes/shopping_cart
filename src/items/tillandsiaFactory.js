import itemFactory from './itemFactory';

const tillandsiaFactory = (id, name, price, tags, imgSrc) => {
    return itemFactory(id, name, price, 'tillandsia', tags, imgSrc)
}

export default tillandsiaFactory;