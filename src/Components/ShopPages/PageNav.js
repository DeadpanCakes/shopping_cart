import { useEffect } from "react";

const PageNav = (props) => {
  const { shelves, page, setPage } = props;
  useEffect(() => {
    document.getElementById("pageSelect").selectedIndex = page + 1;
  }, [page]);

  const turnPage = (direction) => {
    if (direction === 'next') {
      setPage((prevPage) => prevPage + 1);
    } else {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <button
        disabled={!shelves[parseInt(page) - 1] ? true : false}
        onClick={() => turnPage("prev")}
      >
        Prev
      </button>
      <select
        id="pageSelect"
        onChange={(e) => setPage(parseInt(e.target.value))}
      >
        <option>Jump To Page</option>
        {shelves[page]
          ? shelves.map((shelf, index) => (
              <option key={index} value={index}>
                {index + 1}
              </option>
            ))
          : null}
      </select>
      <button
        disabled={!shelves[parseInt(page) + 1] ? true : false}
        onClick={() => turnPage("next")}
      >
        Next
      </button>
    </form>
  );
};

export default PageNav;
