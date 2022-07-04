import React, { useEffect } from 'react';
import * as S from './style';
import camera from '../../../../assets/img/post/Camera.svg';
import x from '../../../../assets/img/common/X.svg';
import PostReplyCOCForm from './PostReplyCOCForm';
import useComment from '../../../../hooks/post/comment/useComment';
import { CommentInterface } from '../../../../models/feeds/response';

const PostReplyCommentOfComment: React.FC<CommentInterface> = ({ child_comments }) => {
  const {
    makeCommentData,
    currentShowCOC,
    setCurrentShowCOC,
    onChangeValue,
    onChangeFile,
    onRemoveFile,
    onSubmitNestedReply,
  } = useComment();

  useEffect(() => {
    if (commentOfComment) {
      setCurrentShowCOC(commentOfComment);
    }
  }, [setCurrentShowCOC, commentOfComment]);

  return (
    <>
      <S.PostReplyCOCBox>
        <S.PostReplyCOCInputWrap>
          <p>{makeCommentData.text.length}/500?</p>
          <S.PostReplyCOCtextInputWrap>
            <S.PostReplyCOCTextarea
              name="text"
              onChange={e => onChangeValue(e)}
              value={makeCommentData.text}
            />
            <S.PostReplyCOCSubmitButton onClick={() => onSubmitNestedReply(makeCommentData)}>
              등록
            </S.PostReplyCOCSubmitButton>
          </S.PostReplyCOCtextInputWrap>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={e => onChangeFile(e, makeCommentData.picture.length)}
            id={`commentOfCommentFile${id}`}
          />
          <S.PostReplyCOCFileInputLabel htmlFor={`commentOfCommentFile${id}`}>
            <img src={camera} alt="addPicture" />
            <strong>사진</strong>
            {makeCommentData.picture.length}/4
          </S.PostReplyCOCFileInputLabel>
          <S.PostReplyCOCImgBox>
            {makeCommentData.picture.map(img => {
              return (
                <S.PostReplyCOCImgWrap id={img.id}>
                  <S.PostReplyCOCImg />
                  <S.PostReplyCOCImgBottomWrap>
                    <p>{img.name}</p>
                    <S.PostReplyCOCImgBottomButton onClick={() => onRemoveFile(img.id)}>
                      <img src={x} alt="cancle" />
                    </S.PostReplyCOCImgBottomButton>
                  </S.PostReplyCOCImgBottomWrap>
                </S.PostReplyCOCImgWrap>
              );
            })}
          </S.PostReplyCOCImgBox>
        </S.PostReplyCOCInputWrap>
        <S.PostReplyCOCLine isInputHr={true} />
        <S.PostReplyCommentWrap>
          {currentShowCOC?.length !== 0 && (
            <>
              {currentShowCOC?.map(comment => {
                return (
                  <React.Fragment>
                    <PostReplyCOCForm commentOfComment={comment} />
                    <S.PostReplyCOCLine isInputHr={false} />
                  </React.Fragment>
                );
              })}
            </>
          )}
        </S.PostReplyCommentWrap>
      </S.PostReplyCOCBox>
    </>
  );
};

export default PostReplyCommentOfComment;
