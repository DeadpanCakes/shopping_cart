import houseplantHero from "./img/houseplantHero.png";
import succulentHero from "./img/succulentHero.png";
import tillyHero from "./img/tillyHero.png";
import supplyHero from "./img/suppliesHero.png";

const ShopHero = (props) => {
    const { category, src, alt } = props 
        switch(category) {
            case 'Houseplants': 
            return <img style={{width:'100%'}} src={houseplantHero} alt="A row of potted houseplants" />
        case "Succulents":
            return <img style={{width:'100%'}} src={succulentHero} alt="A pastel succulent arrangement" />
        case "Tillandsia":
            return <img style={{width:'100%'}} src={tillyHero} alt="A pile of healthy tillandsia" />
        case "Supplies":
            return <img style={{width:'100%'}} src={supplyHero} alt="A box of gardening tools" />
        default:
            return <img style={{width:'100%'}} src={src} alt={alt} />
        }
}

export default ShopHero;