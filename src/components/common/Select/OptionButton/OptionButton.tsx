import { IOptionButtonProps } from '../../../../interface/Common/Common.type';
import * as S from './style';
import checkIcon from '../../../../assets/img/common/check.svg';

const OptionButton: React.FC<IOptionButtonProps> = ({ text, isSelected, onClick }) => {
  return (
    <S.OptionButtonBox isSelected={isSelected} onClick={() => (onClick ? onClick(text) : null)}>
      <S.OptionButtonBoxText>{text}</S.OptionButtonBoxText>
      <S.OptionButtonCheckRect isSelected={isSelected} src={checkIcon} />
    </S.OptionButtonBox>
  );
};

export default OptionButton;
