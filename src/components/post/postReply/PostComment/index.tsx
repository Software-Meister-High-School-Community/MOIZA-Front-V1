import { ICommnet } from '../../../../utils/interface/Post';
import * as S from './style';
import menuCircle from '../../../../assets/img/common/seeMoreBtnIcon.svg';
import commentIcon from '../../../../assets/img/common/comment.svg';
import ImgSplit from '../../../common/ImgSplit';
import { useState } from 'react';
import PostReplyCommentOfComment from '../PostReplyCommentOfComment';
import { seeMoreOption } from '../../constant';
import SeeMoreModal from '../../../common/seeMoreModal';
import FixPin from '../../../../assets/img/post/Pin.svg';

interface IPostReplyCommentProps {
  commentData: ICommnet;
  id: number;
}

const PostComment: React.FC<IPostReplyCommentProps> = ({ commentData, id }) => {
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
              <strong>{commentData.name}</strong>
            </span>
            <S.PostReplyCommentBreakPoint />
            <span>{commentData.school}</span>
            <S.PostReplyCommentBreakPoint />
            <span>{commentData.studentState}</span>
            {writerState ? (
              <S.WriterProof>
                <p>작성자</p>
              </S.WriterProof>
            ) : (
              ''
            )}
          </S.PostReplyCommentWriterWrap>
          <S.PostReplyCommentDate>{commentData.createDate}</S.PostReplyCommentDate>
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
          <S.PostReplyCommentContentText withPicture={commentData.picture.length ? true : false}>
            {commentData.text}
          </S.PostReplyCommentContentText>
          <ImgSplit width={380} imgs={commentData.picture} gap={10} />
        </S.PostReplyCommentMiddleWrap>
        <S.PostReplyCommentBottomWrap>
          <S.PostReplyCommentCommentWrap onClick={() => setFold(!fold)}>
            <img src={commentIcon} alt="comment" />
            {commentData.commentOfComment?.length || '0'}
          </S.PostReplyCommentCommentWrap>
        </S.PostReplyCommentBottomWrap>
      </S.PostReplyCommentBox>
      {!fold && (
        <>
          <PostReplyCommentOfComment commentOfComment={commentData.commentOfComment} id={id} />
          <S.PostReplyCommentLine />
        </>
      )}
    </>
  );
};

export default PostComment;
