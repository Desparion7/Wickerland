import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { CSSProperties } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import styles from './ProductPhotoCarousel.module.css';

type PropsType = {
  img: string[];
  alt: string;
  setFullImg: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
};
const arrowStyles: CSSProperties = {
  position: 'absolute',
  zIndex: 4,
  top: 'calc(50% - 15px)',
  width: 30,
  height: 30,
  cursor: 'pointer',
  color: 'grey',
};

const ProductPhotoCarousel = ({
  img,
  alt,
  setFullImg,
  setCurrentSlide,
}: PropsType) => {
  // number of actual img for corrent zoom modal
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.productPhotoCarousel}>
      <Carousel
        onChange={handleSlideChange}
        showStatus={false}
        showIndicators={false}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <MdArrowBackIosNew
              type="button"
              onClick={onClickHandler}
              style={{ ...arrowStyles, left: 15 }}
            />
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <MdArrowForwardIos
              type="button"
              onClick={onClickHandler}
              style={{ ...arrowStyles, right: 15 }}
            />
          )
        }
      >
        {img.map((photo) => (
          <div
            key={photo}
            onClick={() => {
              setFullImg(true);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                setFullImg(true);
              }
            }}
            tabIndex={0}
            role="link"
          >
            <img src={photo} alt={alt} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductPhotoCarousel;
