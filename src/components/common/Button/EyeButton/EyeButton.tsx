import { IEyeButtonProps } from '../../../../interface/Common/Common.type';
import * as S from './style';
import closeEye from '../../../../assets/img/common/closeEye.svg';
import openEye from '../../../../assets/img/common/openEye.svg';

const EyeButton: React.FC<IEyeButtonProps> = ({ isShow, onClick, left }) => {
  return (
    <S.EyeButtonBox onClick={() => (onClick ? onClick(!isShow) : null)} left={left}>
      <S.EyeButtonImg src={isShow ? closeEye : openEye} />
    </S.EyeButtonBox>
  );
};

export default EyeButton;
