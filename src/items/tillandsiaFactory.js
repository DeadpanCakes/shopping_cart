import itemFactory from './itemFactory';

const tillandsiaFactory = (id, name, price, tagArr, imgSrc) => {
    return itemFactory(id, name, price, 'tillandsia', tagArr, imgSrc)
}

export default tillandsiaFactory;