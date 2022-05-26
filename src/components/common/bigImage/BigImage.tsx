import { AnimatePresence, useViewportScroll } from 'framer-motion';
import React, { Dispatch, SetStateAction } from 'react';
import * as S from './style';
import useBigImage from '../../../hooks/common/useBigImage';
import plusMG from '../../../assets/img/common/BigImage/plusMagnifyingGlass.svg';
import minusMG from '../../../assets/img/common/BigImage/minusMagnifyingGlass.svg';
import LeftArrow from '../../../assets/img/common/prevBtnIcon.svg';
import RightArrow from '../../../assets/img/common/nextBtnIcon.svg';

interface IBigImageProps {
  imgs: string[];
  handleDisplay: Dispatch<SetStateAction<boolean>>;
}

const BigImage: React.FC<IBigImageProps> = ({ imgs, handleDisplay }) => {
  const {
    index,
    direction,
    swipeRefSpeed,
    swipePower,
    increaseIndex,
    decreaseIndex,
    imageSize,
    imageZoomHandle,
  } = useBigImage(imgs.length);

  const { scrollY } = useViewportScroll();

  return (
    <React.Fragment>
      <S.BigImageOverlay onClick={() => handleDisplay(false)} />
      <S.BigImageBox
        isFull={imageSize.width >= 1920}
        currentY={scrollY.get()}
        style={{
          width: imageSize.width,
          height: imageSize.height,
        }}
      >
        <S.BigImageWrap>
          <AnimatePresence initial={false} custom={direction}>
            <S.BigImageRow
              variants={S.rowVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: 'tween', duration: 0.5 }}
              key={index}
              custom={direction}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeRefSpeed) {
                  increaseIndex();
                } else if (swipe > swipeRefSpeed) {
                  decreaseIndex();
                }
              }}
            >
              <S.BigImageImg src={imgs[index]} alt={imgs[index]} />
            </S.BigImageRow>
          </AnimatePresence>
        </S.BigImageWrap>
      </S.BigImageBox>
      <S.BigImageButton direction="left" onClick={decreaseIndex} currentY={scrollY.get()}>
        <img src={LeftArrow} alt="next" />
      </S.BigImageButton>
      <S.BigImageButton direction="right" onClick={increaseIndex} currentY={scrollY.get()}>
        <img src={RightArrow} alt="prev" />
      </S.BigImageButton>
      <S.BigImageMagnifyButton
        style={{ top: scrollY.get() + 807 }}
        direction="left"
        onClick={() => imageZoomHandle('enlargement', imageSize)}
      >
        <img src={plusMG} alt="enlargement" />
      </S.BigImageMagnifyButton>
      <S.BigImageMagnifyButton
        style={{ top: scrollY.get() + 807 }}
        direction="right"
        onClick={() => imageZoomHandle('reduction', imageSize)}
      >
        <img src={minusMG} alt="reduction" />
      </S.BigImageMagnifyButton>
    </React.Fragment>
  );
};

export default BigImage;
