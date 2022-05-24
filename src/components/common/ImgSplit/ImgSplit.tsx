import { useState } from 'react';
import BigImage from '../bigImage/BigImage';
import * as S from './style';

interface IImgSplit {
  width: number;
  imgs: any[];
  gap: number;
}

const ImgSplit: React.FC<IImgSplit> = ({ width, imgs, gap }) => {
  const [isBigImage, setIsBigImage] = useState<boolean>(false);

  const imgHandleFunc = (imgLength: number) => {
    switch (imgLength) {
      case 1:
        return <img width={width} height="100%" src={imgs[0]} alt="img" />;

      case 2:
        return (
          <S.ImgSplitRowBox gap={gap}>
            <img width={width / 2 - gap / 2} height="100%" src={imgs[0]} alt="img" />
            <img width={width / 2 - gap / 2} height="100%" src={imgs[1]} alt="img" />
          </S.ImgSplitRowBox>
        );

      case 3:
        return (
          <S.ImgSplitRowBox gap={gap}>
            <img width={width / 2 - gap / 2} height="100%" src={imgs[0]} alt="img" />
            <S.ImgSplitColumnBox gap={gap}>
              <img width={width / 2 - gap / 2} height="50%" src={imgs[1]} alt="img" />
              <img width={width / 2 - gap / 2} height="50%" src={imgs[2]} alt="img" />
            </S.ImgSplitColumnBox>
          </S.ImgSplitRowBox>
        );

      case 4:
        return (
          <S.ImgSplitColumnBox gap={gap}>
            <S.ImgSplitRowBox gap={gap}>
              <img width={width / 2 - gap / 2} height="100%" src={imgs[0]} alt="img" />
              <img width={width / 2 - gap / 2} height="100%" src={imgs[1]} alt="img" />
            </S.ImgSplitRowBox>
            <S.ImgSplitRowBox gap={gap}>
              <img width={width / 2 - gap / 2} height="100%" src={imgs[2]} alt="img" />
              <img width={width / 2 - gap / 2} height="100%" src={imgs[3]} alt="img" />
            </S.ImgSplitRowBox>
          </S.ImgSplitColumnBox>
        );

      default:
        return <img width={width} height="100%" alt="img" />;
    }
  };

  return (
    <>
      <S.ImgSplitBox width={width} gap={gap} onClick={() => setIsBigImage(true)}>
        {imgHandleFunc(imgs.length)}
      </S.ImgSplitBox>
      {isBigImage && <BigImage imgs={imgs} handleDisplay={setIsBigImage} />}
    </>
  );
};

export default ImgSplit;
