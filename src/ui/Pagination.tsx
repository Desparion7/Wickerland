import ReactPaginate from 'react-paginate';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Pagination.module.css';
import { GrNext, GrPrevious } from 'react-icons/gr';

interface PaginationPropsType {
	pages: number | undefined;
}
let activePage;

const Pagination = ({ pages }: PaginationPropsType) => {
	const navigate = useNavigate();
	const { pageNumber } = useParams();

	// Set active page on pagination
	if (pageNumber) {
		activePage = pageNumber;
	} else {
		activePage = 1;
	}

	const pageChange = (newPageNumber: number) => {
		if (pageNumber) {
			// If the pageNumber parameter is already present in the URL, replace it with the new value
			const newPath = window.location.pathname.replace(
				`/strona/${pageNumber}`,
				`/strona/${newPageNumber}`
			);
			navigate(newPath);
		} else {
			// If the pageNumber parameter is not present in the URL, add it as a new parameter
			navigate(`strona/${newPageNumber}`);
		}
	};

	return pages && pages > 1 ? (
		<>
			<ReactPaginate
				marginPagesDisplayed={1}
				breakLabel='...'
				nextLabel={<GrNext />}
				onPageChange={(newPageNumber) => pageChange(newPageNumber.selected + 1)}
				pageRangeDisplayed={2}
				pageCount={pages}
				forcePage={Number(activePage) - 1}
				previousLabel={<GrPrevious />}
				containerClassName={styles.pagination}
				activeClassName={styles.active_page}
			/>
		</>
	) : (
		<></>
	);
};

export default Pagination;
