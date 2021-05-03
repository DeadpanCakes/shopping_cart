import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

const NewItemIcon = () => {
  useEffect(() => {
    const icon = document.getElementById("newItemIcon");
    setTimeout(() => {
      icon.classList.add("iconAnim");
    }, 100);
    return () => icon.classList.remove("iconAnim");
  }, []);

  return (
    <div id="newItemIcon">
      <FontAwesomeIcon icon={faSeedling} size="xs" />
    </div>
  );
};

export default NewItemIcon;
