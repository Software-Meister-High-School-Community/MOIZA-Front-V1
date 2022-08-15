import Index from '../../../../common/ImgSplit';
import * as S from './style';
import SeeMoreModal from '../../../../common/seeMoreModal';
import menuCircle from '../../../../../assets/img/common/seeMoreBtnIcon.svg';
import { seeMoreOption } from '../../../constant';
import { useState } from 'react';
import { ChildCommentsFormInterface } from '../../../../../models/feeds/response';

const PostReplyCOCForm: React.FC<ChildCommentsFormInterface> = ({
  author,
  content,
  created_at,
  id,
  image_urls,
  is_mine,
  parent_comment_id,
}) => {
  const [seeMoreModalStatus, setSeeMoreModalStatus] = useState<boolean>(false);
  const closeModal = () => {
    setSeeMoreModalStatus(false);
  };
  return (
    <S.PostReplyCOCFormWrap>
      <S.PostReplyCOCFormHeaderWrap>
        <S.PostReplyCOCFormHeaderText>
          <span>
            <strong>{author.name}</strong>
          </span>
          <S.PostReplyCOCFormBreakPoint />
          <span>{author.school_name}</span>
          <S.PostReplyCOCFormBreakPoint />
          <span>{author.type}</span>
        </S.PostReplyCOCFormHeaderText>
        <S.miniWrap>
          <S.PostReplyCOCFormHeaderDate>{created_at}</S.PostReplyCOCFormHeaderDate>
          <S.PostReplyMenuButton onClick={() => setSeeMoreModalStatus(true)}>
            <img src={menuCircle} alt="menu" />
            {seeMoreModalStatus && (
              <SeeMoreModal optionList={seeMoreOption} closeModal={closeModal} />
            )}
          </S.PostReplyMenuButton>
        </S.miniWrap>
      </S.PostReplyCOCFormHeaderWrap>
      <S.PostReplyCOCFormText withPicture={image_urls?.length !== 0}>
        {content}
      </S.PostReplyCOCFormText>
      {image_urls?.length !== 0 && <Index imgs={image_urls} width={188} gap={5} />}
    </S.PostReplyCOCFormWrap>
  );
};

export default PostReplyCOCForm;
