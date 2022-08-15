import useNestedComment from '../../../../hooks/post/useComment';
import Index from '../../../common/button/submitButton';
import * as S from './style';
import x from '../../../../assets/img/common/X.svg';
import plus from '../../../../assets/img/common/plus.svg';

const PostReplyMakeForm = () => {
  const { makeCommentData, onChangeValue, onChangeFile, onRemoveFile } = useNestedComment();

  return (
    <S.PostReplyMakeFormBox>
      <S.PostReplyMakeFormHeaderWrap>
        <h1>답글</h1>
        <Index
          text="답글 등록"
          blue
          big
          disable={makeCommentData.text === '' && makeCommentData.picture.length === 0}
        />
      </S.PostReplyMakeFormHeaderWrap>
      <S.PostReplyMakeFormTextarea
        name="text"
        onChange={e => onChangeValue(e)}
        value={makeCommentData.text}
      />
      <S.PostReplyMakeFormCountText>{makeCommentData.text.length}/500</S.PostReplyMakeFormCountText>
      <S.PostReplyMakeFormFileForm>
        <S.PostReplyMakeFormFileHeaderWrap>
          <h1>첨부파일</h1>
          <p>{makeCommentData.picture.length}/4</p>
        </S.PostReplyMakeFormFileHeaderWrap>
        <hr />
        <S.PostReplyMakeFormFileMiddleWrap>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={e => onChangeFile(e, makeCommentData.picture.length)}
            id="commentFile"
          />
          {makeCommentData.picture.map(img => {
            return (
              <S.PostReplyMakeFormFileItemWrap>
                <S.PostReplyMakeFormFileImg alt={img.id} />
                <S.PostReplyMakeFormFileItemBottomWrap>
                  <pre>{img.name}</pre>
                  <button onClick={() => onRemoveFile(img.id)}>
                    <img src={x} alt="cancle" />
                  </button>
                </S.PostReplyMakeFormFileItemBottomWrap>
              </S.PostReplyMakeFormFileItemWrap>
            );
          })}
          {makeCommentData.picture.length !== 4 && (
            <S.PostReplyMakeFormFileAddLabel htmlFor="commentFile">
              <img src={plus} alt="addFile" />
            </S.PostReplyMakeFormFileAddLabel>
          )}
        </S.PostReplyMakeFormFileMiddleWrap>
      </S.PostReplyMakeFormFileForm>
    </S.PostReplyMakeFormBox>
  );
};

export default PostReplyMakeForm;
