const ShopHero = (props) => {
    const { src, alt } = props 
    return (
        <img  src={src} alt={alt} style={{width: '100%'}} />
    )
}

export default ShopHero;