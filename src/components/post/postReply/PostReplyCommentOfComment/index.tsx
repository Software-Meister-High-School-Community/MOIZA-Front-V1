import React from 'react';
import * as S from './style';
import camera from '../../../../assets/img/post/Camera.svg';
import x from '../../../../assets/img/common/X.svg';
import PostReplyCOCForm from './PostReplyCOCForm';
import { ChildCommentsInterface } from '../../../../models/feeds/response';

// 주석 처리나 빈 공간은 댓글 작성 api 연결 때 추가

const PostReplyCommentOfComment: React.FC<ChildCommentsInterface> = ({ child_comments }) => {
  return (
    <>
      <S.PostReplyCOCBox>
        <S.PostReplyCOCInputWrap>
          {/*
          <p>{}/500?</p>
          <S.PostReplyCOCtextInputWrap>
            <S.PostReplyCOCTextarea name="text" />
            <S.PostReplyCOCSubmitButton>등록</S.PostReplyCOCSubmitButton>
          </S.PostReplyCOCtextInputWrap>
          <input type="file" accept="image/*" multiple id={`commentOfCommentFile${id}`>} />
          <S.PostReplyCOCFileInputLabel htmlFor={`commentOfCommentFile${id}`}>
            <img src={camera} alt="addPicture" />
            <strong>사진</strong>
            {}/4
          </S.PostReplyCOCFileInputLabel>
          <S.PostReplyCOCImgBox>
            {image_urls.map(img => {
              return (
                <S.PostReplyCOCImgWrap id={img}>
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
          </S.PostReplyCOCImgBox>*/}
        </S.PostReplyCOCInputWrap>
        <S.PostReplyCOCLine isInputHr={true} />
        <S.PostReplyCommentWrap>
          {child_comments?.length !== 0 && (
            <>
              {child_comments?.map((item, idx) => {
                return (
                  <React.Fragment>
                    <PostReplyCOCForm
                      author={item.author}
                      content={item.content}
                      created_at={item.created_at}
                      id={idx}
                      image_urls={item.image_urls}
                      is_mine={item.is_mine}
                      parent_comment_id={item.parent_comment_id}
                    />
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
