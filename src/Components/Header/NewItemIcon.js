import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

const NewItemIcon = () => {

  useEffect(() => {
    const icon = document.getElementById("newItemIcon");
    icon.classList.add("iconAnim");
    return () => icon.classList.remove("iconAnim");
  }, []);

  return <div id='newItemIcon' className='iconPreAnim'>
      <FontAwesomeIcon icon={faSeedling} size='xs' />
  </div>
};

export default NewItemIcon;
