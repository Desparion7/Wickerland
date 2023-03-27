import styles from './ShopTools.module.css';
import { TfiLayoutGrid4Alt } from 'react-icons/tfi';
import { BsFillGrid3X3GapFill, BsFillGridFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const ShopTools = () => {
	const isDesktop = useMediaQuery({ minWidth: '1000px' });
	const isSmallDesktop = useMediaQuery({ minWidth: '1200px' });

	return (
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
							<p className={styles.shopTools_options_amount_number}>9</p>
							<span>/</span>
							<p className={styles.shopTools_options_amount_number}>12</p>
							<span>/</span>
							<p className={styles.shopTools_options_amount_number}>18</p>
							<span>/</span>
							<p className={styles.shopTools_options_amount_number}>24</p>
						</div>
						<div className={styles.shopTools_options_view}>
							<BsFillGridFill />
							<BsFillGrid3X3GapFill />
							<TfiLayoutGrid4Alt />
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
	);
};

export default ShopTools;
