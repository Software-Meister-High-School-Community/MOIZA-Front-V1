import { ICommnet } from '../../../../../utils/interface/Post';
import Index from '../../../../common/ImgSplit';
import * as S from './style';
import SeeMoreModal from '../../../../common/seeMoreModal';
import menuCircle from '../../../../../assets/img/common/seeMoreBtnIcon.svg';
import { seeMoreOption } from '../../../constant';
import { useState } from 'react';

interface IPostReplyCOCFormProps {
  commentOfComment: ICommnet;
}

const PostReplyCOCForm: React.FC<IPostReplyCOCFormProps> = ({ commentOfComment }) => {
  const [seeMoreModalStatus, setSeeMoreModalStatus] = useState<boolean>(false);
  const closeModal = () => {
    setSeeMoreModalStatus(false);
  };
  return (
    <S.PostReplyCOCFormWrap>
      <S.PostReplyCOCFormHeaderWrap>
        <S.PostReplyCOCFormHeaderText>
          <span>
            <strong>{commentOfComment.name}</strong>
          </span>
          <S.PostReplyCOCFormBreakPoint />
          <span>{commentOfComment.school}</span>
          <S.PostReplyCOCFormBreakPoint />
          <span>{commentOfComment.studentState}</span>
        </S.PostReplyCOCFormHeaderText>
        <S.miniWrap>
          <S.PostReplyCOCFormHeaderDate>{commentOfComment.createDate}</S.PostReplyCOCFormHeaderDate>
          <S.PostReplyMenuButton onClick={() => setSeeMoreModalStatus(true)}>
            <img src={menuCircle} alt="menu" />
            {seeMoreModalStatus && (
              <SeeMoreModal optionList={seeMoreOption} closeModal={closeModal} />
            )}
          </S.PostReplyMenuButton>
        </S.miniWrap>
      </S.PostReplyCOCFormHeaderWrap>
      <S.PostReplyCOCFormText withPicture={commentOfComment?.picture?.length !== 0}>
        {commentOfComment?.text}
      </S.PostReplyCOCFormText>
      {commentOfComment?.picture.length !== 0 && (
        <Index imgs={commentOfComment.picture} width={188} gap={5} />
      )}
    </S.PostReplyCOCFormWrap>
  );
};

export default PostReplyCOCForm;
