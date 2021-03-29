import houseplantHero from "./img/houseplantHero.png";
import succulentHero from "./img/succulentHero.png";
import tillyHero from "./img/tillyHero.png";
import supplyHero from "./img/suppliesHero.png";
import { useState, useEffect } from "react";

const ShopHero = (props) => {
  const { category, src } = props;

  const [img, setImg] = useState(houseplantHero);
  useEffect(() => {
      switch (category) {
        case "Houseplants":
            setImg(houseplantHero);
            break;
        case "Succulents":
            setImg(succulentHero);
            break;
        case "Tillandsia":
            setImg(tillyHero)
              break;
        case "Supplies":
            setImg(supplyHero)
            break;
        default:
            return null
    }
  }, [category]);


  const heroBGStyle = {
    backgroundImage: `linear-gradient(80deg, rgba(0, 0, 0, 0.3), rgba(43,204,38, 0.3)), url(${img})`,
    width: '100%',
    height: '10vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <div className="heroImg" style={heroBGStyle}>
      <div className="heroText">
        <h1>{category}</h1>
      </div>
    </div>
  );
};

export default ShopHero;
