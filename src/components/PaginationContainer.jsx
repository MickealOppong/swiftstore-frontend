import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const navigate = useNavigate()
  const { search, pathname } = useLocation();
  console.log(search);
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  })

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search)
    searchParams.set('page', pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)
  }


  return <div className="flex justify-end gap-x-2">
    <button onClick={() => {
      let prevPage = page - 1;
      if (prevPage < 1) prevPage = pageCount;
      handlePageChange(prevPage)
    }} className="btn btn-primary uppercase">prev</button>
    {
      pages.map((pageNumber) => {
        return <button key={pageNumber} onClick={() => handlePageChange(pageNumber)} className={`btn btn-primary  ${pageNumber === page ? 'bg-neutral border-base-300' : ''}`}>{pageNumber}</button>
      })
    }
    <button onClick={() => {
      let nextPage = page + 1;
      if (nextPage > pageCount) nextPage = 1;
      handlePageChange(nextPage)
    }} className="btn btn-primary uppercase">next</button>
  </div>
}
export default PaginationContainer;