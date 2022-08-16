import * as S from './style';
import menuCircle from '../../../../assets/img/common/seeMoreBtnIcon.svg';
import commentIcon from '../../../../assets/img/common/comment.svg';
import ImgSplit from '../../../common/ImgSplit';
import { useState } from 'react';
import PostReplyCommentOfComment from '../PostReplyCommentOfComment';
import { seeMoreOption } from '../../constant';
import SeeMoreModal from '../../../common/seeMoreModal';
import FixPin from '../../../../assets/img/post/Pin.svg';
import { CommentInterface } from '../../../../models/feeds/response';

const PostComment: React.FC<CommentInterface> = ({
  author,
  child_comments,
  content,
  created_at,
  id,
  image_urls,
  is_mine,
  is_pinned,
}) => {
  const [fold, setFold] = useState(true);
  const [seeMoreModalStatus, setSeeMoreModalStatus] = useState(false);
  const [fixState, setFixState] = useState(true);
  const [writerState, setWriterState] = useState(true);
  const closeModal = () => {
    setSeeMoreModalStatus(false);
  };
  return (
    <>
      {fixState ? (
        <S.Fix>
          <img src={FixPin} alt="" />
          <p>작성자님이 고정한 댓글</p>
        </S.Fix>
      ) : (
        ''
      )}
      <S.PostReplyCommentBox fold={fold}>
        <S.PostReplyCommentHeaderWrap>
          <S.PostReplyCommentProfileImg />
          <S.PostReplyCommentWriterWrap>
            <span>
              <strong>{author.name}</strong>
            </span>
            <S.PostReplyCommentBreakPoint />
            <span>{author.school_name}</span>
            <S.PostReplyCommentBreakPoint />
            <span>{author.type}</span>
            {writerState ? (
              <S.WriterProof>
                <p>작성자</p>
              </S.WriterProof>
            ) : (
              ''
            )}
          </S.PostReplyCommentWriterWrap>
          <S.PostReplyCommentDate>{created_at}</S.PostReplyCommentDate>
          <S.PostReplyCommentMenuButton
            onClick={() => {
              setSeeMoreModalStatus(status => !status);
            }}
          >
            <img src={menuCircle} alt="menu" />
            {seeMoreModalStatus && (
              <SeeMoreModal optionList={seeMoreOption} closeModal={closeModal} />
            )}
          </S.PostReplyCommentMenuButton>
        </S.PostReplyCommentHeaderWrap>
        <S.PostReplyCommentMiddleWrap>
          <S.PostReplyCommentContentText withPicture={image_urls.length ? true : false}>
            {content}
          </S.PostReplyCommentContentText>
          <ImgSplit width={380} imgs={image_urls} gap={10} />
        </S.PostReplyCommentMiddleWrap>
        <S.PostReplyCommentBottomWrap>
          <S.PostReplyCommentCommentWrap onClick={() => setFold(!fold)}>
            <img src={commentIcon} alt="comment" />
            {child_comments?.length || '0'}
          </S.PostReplyCommentCommentWrap>
        </S.PostReplyCommentBottomWrap>
      </S.PostReplyCommentBox>
      {!fold && (
        <>
          <PostReplyCommentOfComment child_comments={child_comments} />
          <S.PostReplyCommentLine />
        </>
      )}
    </>
  );
};

export default PostComment;
