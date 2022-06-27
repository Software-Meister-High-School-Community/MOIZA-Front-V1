import { IOptionButtonProps } from '../../../../utils/interface/common';
import * as S from './style';
import checkIcon from '../../../../assets/img/common/check.svg';

const OptionButton: React.FC<IOptionButtonProps> = ({ text, isSelected, onClick, optionId }) => {
  return (
    <S.OptionButtonBox isSelected={isSelected} onClick={() => (onClick ? onClick(optionId) : null)}>
      <S.OptionButtonBoxText>{text}</S.OptionButtonBoxText>
      <S.OptionButtonCheckRect isSelected={isSelected} src={checkIcon} />
    </S.OptionButtonBox>
  );
};

export default OptionButton;
