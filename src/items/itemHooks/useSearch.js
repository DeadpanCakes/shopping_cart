import useStock from "./useStock";
import Fuse from "fuse.js";

const useSearch = () => {
  const stock = useStock();

  const fuseOptions = {
    keys: ["name", "tags.all"],
  };

  const fuse = new Fuse(stock, fuseOptions);

  const search = (query) => {
    const results = fuse.search(query);
    return results.sort((prevResult, result) => {
        return Math.floor(prevResult.score) - Math.floor(result.score)
    })
  };

  return search;
};

export default useSearch;
