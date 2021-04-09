import { useEffect } from "react";

const PageNav = (props) => {
  const { shelves, page, setPage } = props;
  useEffect(() => {
    document.getElementById("pageSelect").selectedIndex = page;
  }, [page]);

  const turnPage = (direction) => {
    if (direction === "next") {
      setPage((prevPage) => prevPage + 1);
    } else {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='pageNav'
    >
      <button
        className="pgBtn"
        disabled={!shelves[parseInt(page) - 1] ? true : false}
        onClick={() => turnPage("prev")}
      >
        Prev
      </button>
      <div className="pgBtn">
        <select
          id="pageSelect"
          onChange={(e) => setPage(parseInt(e.target.value))}
        >
          {shelves[page]
            ? shelves.map((shelf, index) => (
                <option key={index} value={index}>
                  {index + 1}
                </option>
              ))
            : null}
        </select>
      </div>
      <button
        className="pgBtn"
        disabled={!shelves[parseInt(page) + 1] ? true : false}
        onClick={() => turnPage("next")}
      >
        Next
      </button>
    </form>
  );
};

export default PageNav;
