import "./pagination.css";
import { useState, useEffect } from "react";

const API = "https://dummyjson.com/products?limit=100";
export default function Pagination() {
  const [data, setData] = useState("");
  const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(true); For conditional Rendering

  const fetchData = async () => {
    const data = await fetch(API);
    const json = await data.json();
    setData(json.products);
    // setLoading(false);
  };

  useEffect(() => {
    fetchData();

    return () => {};
  }, []);

  // if (loading === true) {
  //   return <h2>Loading...</h2>;
  // } ----------- For conditional Rendering

  const pageHandler = (pageNumber) => {
    if(pageNumber >= 1 && pageNumber!==page && pageNumber <= data.length/10)
    setPage(pageNumber);
  };

  return (
    <div>
      {data.length > 0 && (
        <div className="products">
          {data.slice(page * 10 - 10, page * 10).map((items) => (
            <span key={items.id} className="products__single">
              <img src={items.thumbnail} alt={items.title} />
              <span>{items.title}</span>
            </span>
          ))}
        </div>
      )}

      {data.length > 0 && (
        <div className="pagination">
          <span onClick={()=> pageHandler(page-1)}>◀</span>
          {[...Array(data.length / 10)].map((_, i) => (
            <span onClick={() => pageHandler(i + 1)} className={page==i+1 ? "selected__page": ""} key={i}>
              {i + 1}
            </span>
          ))}
          <span onClick={()=> pageHandler(page+1)}>▶</span>
        </div>
      )}
    </div>
  );
}
