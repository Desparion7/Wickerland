import { useState, useEffect } from 'react';
import styles from './PriceFilter.module.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useNavigate, useParams } from 'react-router-dom';

const PriceFilter = () => {
	const params = useParams();
	const navigate = useNavigate();
	const [minValue, setMinValue] = useState<number>(0);
	const [maxValue, setMaxValue] = useState<number>(2000);

	// Price filter reset when path don't have min  and max price
	useEffect(() => {
		if (!params.max) {
			setMinValue(0);
			setMaxValue(2000);
		}
	}, [params]);

	const handleSliderChange: (value: number | number[]) => void = (value) => {
		if (Array.isArray(value)) {
			// user
			setMinValue(value[0]);
			setMaxValue(value[1]);
		} else {
			// value is a single number, which means the user clicked on one of the dots
			const middle = (maxValue - minValue) / 2;
			if (value < middle) {
				setMinValue(value);
			} else {
				setMaxValue(value);
			}
		}
	};

	const handlerPriceFilter = () => {
		navigate(`cena/${minValue}/${maxValue}`);
	};

	return (
		<div className={styles.priceFilter}>
			<div className={styles.priceFilter_name}>Filtruj po cenie</div>
			<div className={styles.priceFilter_slider}>
				<Slider
					min={0}
					max={2000}
					range={true}
					allowCross={false}
					value={[minValue, maxValue]}
					onChange={handleSliderChange}
					railStyle={{ backgroundColor: '#ddd' }}
					handleStyle={[
						{
							backgroundColor: '#70a01f',
							borderColor: '#108ee9',
							borderRadius: '0',
							width: '8px',
							height: '20px',
							border: 'none',
							marginTop: '-8px',
							opacity: '1',
							boxShadow: 'none',
						},
						{
							backgroundColor: '#70a01f',
							borderColor: '#108ee9',
							borderRadius: '0',
							width: '8px',
							height: '20px',
							border: 'none',
							marginTop: '-8px',
							opacity: '1',
							boxShadow: 'none',
						},
					]}
					dotStyle={{
						backgroundColor: '#70a01f',
						borderColor: '#108ee9',
					}}
					activeDotStyle={{
						backgroundColor: '#70a01f',
						borderColor: '#70a01f',
					}}
					trackStyle={{ backgroundColor: '#70a01f' }}
				/>
			</div>
			<div className={styles.priceFilter_value}>
				<div className={styles.priceFilter_value_range}>
					<p>Cena:</p>
					<p>{minValue} zł</p>
					<span>-</span>
					<p>{maxValue} zł</p>
				</div>
				<button onClick={handlerPriceFilter}>Filtruj</button>
			</div>
		</div>
	);
};

export default PriceFilter;
