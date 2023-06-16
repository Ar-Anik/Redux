import { useDispatch, useSelector } from "react-redux";
import { pageSelect } from "../../features/pagination/paginationSlice";

const Pagination = () => {
  const { pageNumber } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  const handlePageNumber = (event) => {
    dispatch(pageSelect(Number(event.target.getAttribute("value"))));
  };

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        <div
          className={`bg-blue-${pageNumber === 1 ? 600 : 100} text-${
            pageNumber === 1 ? `white` : `blue-${600}`
          } px-4 py-1 rounded-full`}
          value={1}
          onClick={handlePageNumber}
        >
          1
        </div>
        <div
          className={`bg-blue-${pageNumber === 2 ? 600 : 100} text-${
            pageNumber === 2 ? `white` : `blue-${600}`
          } px-4 py-1 rounded-full`}
          value={2}
          onClick={handlePageNumber}
        >
          2
        </div>
        <div
          className={`bg-blue-${pageNumber === 3 ? 600 : 100} text-${
            pageNumber === 3 ? `white` : `blue-${600}`
          } px-4 py-1 rounded-full`}
          value={3}
          onClick={handlePageNumber}
        >
          3
        </div>
        <div
          className={`bg-blue-${pageNumber === 4 ? 600 : 100} text-${
            pageNumber === 4 ? `white` : `blue-${600}`
          } px-4 py-1 rounded-full`}
          value={4}
          onClick={handlePageNumber}
        >
          4
        </div>
      </div>
    </section>
  );
};

export default Pagination;
