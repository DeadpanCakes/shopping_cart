import useStock from "./useStock";
import Fuse from "fuse.js";

const useSearch = () => {
  const stock = useStock();

  const fuse = new Fuse(stock, { keys: ["name", "tags.all"] });

  const search = (query) => {
    return fuse.search(query).map((result) => result.item);
  };

  return search;
};

export default useSearch;
