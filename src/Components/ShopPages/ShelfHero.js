import houseplantHero from "./img/houseplantHero.png";
import succulentHero from "./img/succulentHero.png";
import tillyHero from "./img/tillandsiaHero.png";
import supplyHero from "./img/gardeningTools.jpg";
import allHero from "./img/allHero.png";
import { useState, useEffect } from "react";

const ShopHero = (props) => {
  const { category } = props;

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
            return setImg(allHero)
    }
  }, [category]);


  const heroBGStyle = {
    backgroundImage: `url(${img})`,
    width: '100%',
    minHeight: '130px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <div className="heroImg" style={heroBGStyle}>
      <div className="heroText">
        <h1 style={{fontSize:'1.5em', padding: '10px 0'}}>{category}</h1>
      </div>
    </div>
  );
};

export default ShopHero;
