import styles from './ShopTools.module.css';
import { TfiLayoutGrid4Alt } from 'react-icons/tfi';
import { BsFillGrid3X3GapFill, BsFillGridFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux';
import { shopGrid } from '../../app/slices/shopViewSlice';
import { setGrid } from '../../app/slices/shopViewSlice';
import PriceFilterMobile from './PriceFilterMobile';

const ShopTools = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { size, pageNumber } = useParams();
	const [isFilterMenu, setIsFilterMenu] = useState(false);
	const [productsOnPage, setProductsOnPage] = useState('9');
	const isDesktop = useMediaQuery({ minWidth: '1000px' });
	const isSmallDesktop = useMediaQuery({ minWidth: '1250px' });
	const grid = useSelector(shopGrid);

	const handlerChangeGrid = (gridNumber: number) => {
		dispatch(setGrid(gridNumber));
	};

	const handlerPageSize = (newSize: string) => {
		if (size) {
			// If the size parameter is already present in the URL, replace it with the new value
			if (pageNumber) {
				const newPath = window.location.pathname
					.replace(`/nastronie/${size}`, `/nastronie/${newSize}`)
					.replace(`/strona/${pageNumber}`, `/strona/1`);

				navigate(newPath);
			} else {
				const newPath = window.location.pathname.replace(
					`/nastronie/${size}`,
					`/nastronie/${newSize}`
				);

				navigate(newPath);
			}
		} else {
			// If the size parameter is not present in the URL, add it as a new parameter
			navigate(`nastronie/${newSize}`);
		}

		setProductsOnPage(newSize);
	};

	return (
		<>
			{isFilterMenu && <PriceFilterMobile setIsFilterMenu={setIsFilterMenu} />}
			<div className={styles.shopTools}>
				{isSmallDesktop && (
					<div className={styles.shopTools_path}>
						<Link to='/' className={styles.active_main}>
							Strona główna
						</Link>
						<span>/</span>
						<p className={styles.active_shopNav}>Sklep</p>
					</div>
				)}

				<div className={styles.shopTools_options}>
					{isDesktop && (
						<>
							<div className={styles.shopTools_options_amount}>
								<div>Pokaż</div>
								<p
									className={`${styles.shopTools_options_amount_number} ${
										productsOnPage === '9' &&
										styles.shopTools_options_amount_number_active
									} `}
									onClick={() => {
										handlerPageSize('9');
									}}
								>
									9
								</p>
								<span>/</span>
								<p
									className={`${styles.shopTools_options_amount_number} ${
										productsOnPage === '12' &&
										styles.shopTools_options_amount_number_active
									} `}
									onClick={() => {
										handlerPageSize('12');
									}}
								>
									12
								</p>
								<span>/</span>
								<p
									className={`${styles.shopTools_options_amount_number} ${
										productsOnPage === '18' &&
										styles.shopTools_options_amount_number_active
									} `}
									onClick={() => {
										handlerPageSize('18');
									}}
								>
									18
								</p>
								<span>/</span>
								<p
									className={`${styles.shopTools_options_amount_number} ${
										productsOnPage === '24' &&
										styles.shopTools_options_amount_number_active
									} `}
									onClick={() => {
										handlerPageSize('24');
									}}
								>
									24
								</p>
							</div>
							<div className={styles.shopTools_options_view}>
								<BsFillGridFill
									className={`${
										grid === 2 && styles.shopTools_options_view_active
									}`}
									onClick={() => {
										handlerChangeGrid(2);
									}}
								/>
								<BsFillGrid3X3GapFill
									className={`${
										grid === 3 && styles.shopTools_options_view_active
									}`}
									onClick={() => {
										handlerChangeGrid(3);
									}}
								/>
								<TfiLayoutGrid4Alt
									className={`${
										grid === 4 && styles.shopTools_options_view_active
									}`}
									onClick={() => {
										handlerChangeGrid(4);
									}}
								/>
							</div>
						</>
					)}
					{!isDesktop && (
						<>
							<div
								className={styles.shopTools_options_filtrs}
								onClick={() => {
									setIsFilterMenu(true);
								}}
							>
								<GiHamburgerMenu />
								<p>Pokaż Filtry</p>
							</div>
						</>
					)}
					<div className={styles.shopTools_options_sorting}>
						<select name='sort' id='sort'>
							<option>Sortuj po cenie od najniższej</option>
							<option>Sortuj po cenie od najwyższej</option>
						</select>
					</div>
				</div>
			</div>
		</>
	);
};

export default ShopTools;
