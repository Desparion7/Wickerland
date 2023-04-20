import ReactPaginate from 'react-paginate';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Pagination.module.css';

interface PaginationPropsType {
  pages: number | undefined;
}
let activePage;

const Pagination = ({ pages }: PaginationPropsType) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const pageNumber = queryParams.get('strona');

  // Set active page on pagination
  if (pageNumber) {
    activePage = pageNumber;
  } else {
    activePage = 1;
  }

  const pageChange = (newPageNumber: number) => {
    queryParams.set('strona', newPageNumber.toString());
    const newSearch = queryParams.toString();

    navigate({
      pathname: location.pathname,
      search: newSearch,
    });
  };

  return pages && pages > 1 ? (
    <ReactPaginate
      marginPagesDisplayed={1}
      breakLabel="..."
      nextLabel={<GrNext />}
      onPageChange={(newPageNumber) => pageChange(newPageNumber.selected + 1)}
      pageRangeDisplayed={2}
      pageCount={pages}
      forcePage={Number(activePage) - 1}
      previousLabel={<GrPrevious />}
      containerClassName={styles.pagination}
      activeClassName={styles.active_page}
    />
  ) : (
    <div />
  );
};

export default Pagination;
