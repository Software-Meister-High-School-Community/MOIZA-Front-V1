import useGraduateCheck from '../../../hooks/graduateCheck/useGraduateCheck';
import { byteTransform } from '../../../utils/function/byteTransform';
import * as S from './style';
import { GraduateCheckFooterWrap } from '../style';
import Index from '../../common/button/submitButton';
import plusIcon from '../../../assets/img/common/plus.svg';
import deleteIcon from '../../../assets/img/common/X.svg';

const GraduateCheckForm: React.FC = () => {
  const { file, setFile, onChangeFile, handleUploadFile } = useGraduateCheck();
  return (
    <>
      <S.GraduateCheckFormBox>
        <S.GraduateCheckFormTitle>파일 첨부</S.GraduateCheckFormTitle>
        <input
          type="file"
          accept="image/*"
          id="graduateCheck-fileInput"
          onChange={e => onChangeFile(e)}
          disabled={file !== null}
        />
        <S.GraduateCheckFormInputLabel htmlFor="graduateCheck-fileInput" isNull={file === null}>
          {file !== null ? (
            <>
              <S.GraduateCheckFormFileInfoBar>
                <p>{file?.name}</p>
              </S.GraduateCheckFormFileInfoBar>
              <S.GraduateCheckFormFileSizeText>
                {byteTransform(file?.size)}
              </S.GraduateCheckFormFileSizeText>
              <S.GraduateCheckFormFileDeleteButton onClick={() => setFile(null)}>
                <img src={deleteIcon} alt="delete" />
              </S.GraduateCheckFormFileDeleteButton>
            </>
          ) : (
            <S.GraduateCheckFormFileAddImg src={plusIcon} />
          )}
        </S.GraduateCheckFormInputLabel>
        <S.GruduateCheckFormGuideText>
          졸업사진, 졸업장, 학생증 등 재학 이력을 증명할 수 있는 사진은 무엇이든 제출 가능합니다.
        </S.GruduateCheckFormGuideText>
      </S.GraduateCheckFormBox>
      <GraduateCheckFooterWrap>
        <Index big blue disable={file === null} text="인증 신청" handleClick={handleUploadFile} />
      </GraduateCheckFooterWrap>
    </>
  );
};

export default GraduateCheckForm;
