import heroImg from './img/shopHomeHeroImg.png';

const ShopHomeHero = () => {    
    const containerStyle = {
        position: 'relative',
        backgroundImage: `url(${heroImg})`,
        height: '55vh'
    }

    const textStyle = {
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        color: 'white'
    }

    return (
        <div style={containerStyle}>
            <h1 style={textStyle}>Shop By Category</h1>
        </div>
    )
}

export default ShopHomeHero