import React, { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import Path from '../../../common/path';
import { PathType, UploadDataType } from '../../../../utils/interface/common';
import { ChangeEvent } from 'react';
import RadioButton from '../../../common/select/radioButton';
import { radioTypeArr } from './constant';
import UploadFiles from '../../../common/upload/files/index';
import Index from '../../../common/button/submitButton';
import { TCategory } from '../../../../models/common';
import { saveTemporaries, patchTemporaries } from '../../../../utils/api/feeds/index';

interface Props {
  categoryType: TCategory;
}

const TITLE = 'title';
const CONTENT = 'content';

const EditTemp: React.FC<Props> = ({ categoryType }) => {
  const FD = new FormData();
  const [postContent, setPostContent] = useState<UploadDataType>({
    title: '',
    content: '',
    files: [],
  });
  const [seleted, setSeleted] = useState('question');

  const pathArray: PathType[] = useMemo(() => {
    return [
      {
        path: '카테고리',
        link: '/category',
      },
      {
        path: '임시저장 게시물 리스트',
        link: `/temprory/${categoryType}`,
      },
      {
        path: '임시저장 게시물 수정',
        link: `/postwrite/${categoryType}`,
      },
    ];
  }, [categoryType]);

  const onChangePostContent = useCallback(
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      if (
        (e.target.name === TITLE && e.target.value.length <= 30) ||
        (e.target.name === CONTENT && e.target.value.length <= 500)
      ) {
        setPostContent({
          ...postContent,
          [e.target.name]: e.target.value,
        });
      }
    },
    [postContent, setPostContent],
  );

  const onSaveTemproryPost = useCallback(async () => {
    await saveTemporaries({ title: postContent.title, content: postContent.content });
  }, [postContent]);

  const onPatchTemproryPost = useCallback(async () => {
    //await patchTemporaries();
  }, [postContent]);

  return (
    <S.Wrapper>
      <Path pathArray={pathArray} />
      <S.WriteForm>
        <S.Title>
          <p>제목</p>
          <label>
            <input name={TITLE} onChange={onChangePostContent} value={postContent.title} />
            <S.TextCount>{postContent.title.length}/30</S.TextCount>
          </label>
        </S.Title>
        <S.RadioDiv>
          <RadioButton
            selected={seleted}
            setSelected={setSeleted}
            radioArray={radioTypeArr}
            name="typecheckbox"
          />
          <Link to={`/temprory/${categoryType}`}>
            <S.TempList>임시저장 게시물&gt;</S.TempList>
          </Link>
        </S.RadioDiv>
        <S.PostMainContent
          name={CONTENT}
          onChange={onChangePostContent}
          value={postContent.content}
        />
        <S.TextCount marginTop="15px">{postContent.content.length}/500</S.TextCount>
      </S.WriteForm>
      <UploadFiles state={postContent} setStateFunction={setPostContent} />
      <S.SubmitBtn>
        <Index
          big={true}
          text="임시 저장"
          handleClick={onSaveTemproryPost}
          disable={!(postContent.title.length > 0 && postContent.content.length > 0)}
          yellow={false}
          blue={false}
        />
        <Index
          big={true}
          text="수정 완료"
          handleClick={
            onPatchTemproryPost
          } /*feed_id를 받기에는 서버가 열리고 하는게 좋을 것 같아서 보류 */
          disable={!(postContent.title.length > 0 && postContent.content.length > 0)}
          yellow={false}
          blue={true}
        />
      </S.SubmitBtn>
    </S.Wrapper>
  );
};

export default EditTemp;
