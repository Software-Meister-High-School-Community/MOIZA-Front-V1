import React, { useState, useCallback, useMemo } from 'react';
import * as S from './style';
import Path from '../../common/path';
import { PathType, UploadDataType } from '../../../utils/interface/common';
import { ChangeEvent } from 'react';
import RadioButton from '../../common/select/radioButton';
import UploadFiles from '../../common/upload/files/index';
import Index from '../../common/button/submitButton';
import { TCategory, TFeed, TWrite } from '../../../models/common';
import {
  saveTemporaries,
  patchTemporaries,
  patchFeed,
  postFeed,
} from '../../../utils/api/feeds/index';
import { postImages } from '../../../utils/api/default';

interface Props {
  categoryType: TCategory;
  postType: TWrite;
}

export interface postRadioInterface {
  id: TFeed;
  summary: '일반' | '질문';
}

const PostRadioTypeArray: postRadioInterface[] = [
  {
    id: 'COMMON',
    summary: '일반',
  },
  {
    id: 'QUESTION',
    summary: '질문',
  },
];

const TITLE = 'title';
const CONTENT = 'content';

const PostWrite: React.FC<Props> = ({ categoryType, postType }) => {
  const FD = new FormData();
  const [postContent, setPostContent] = useState<UploadDataType>({
    title: '',
    content: '',
    files: [],
  });
  const [seleted, setSeleted] = useState<TFeed>('QUESTION');

  const pathArray: PathType[] = useMemo(() => {
    return [
      {
        path: '카테고리',
        link: '/category',
      },
      {
        path: categoryType,
        link: '',
      },
      {
        path: '게시물작성',
        link: `/postwrite/${categoryType}`,
      },
    ];
  }, [categoryType]);

  const onChangeSelectedValue = useCallback(
    (status: string) => {
      const postStatus = status as TFeed;
      setSeleted(postStatus);
    },
    [seleted, setSeleted],
  );

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

  const onSubmitPost = useCallback(async () => {
    await postContent.files.forEach(eachFile => FD.append('files', eachFile));
    const images = await postImages({ images: FD });

    if (postType === 'POST') {
      postFeed({
        title: postContent.title,
        content: postContent.content,
        feed_type: seleted,
        category: categoryType,
        images_urls: images.image_urls,
      });
    } else if (postType === 'EDIT') {
      //patchFeed({ title: postContent.title, content: postContent.content, feed_type: seleted,  images_urls: images.image_urls, });
    } else {
      //patchTemporaries({ title: postContent.title, content: postContent.content });
    }
    // 게시글 수정과 임시저장 게시글 수정에서 feed_id는 params 공부 후 작성
  }, [postContent]);

  const onSaveTemproryPost = useCallback(async () => {
    await saveTemporaries({ title: postContent.title, content: postContent.content });
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
            setSelected={onChangeSelectedValue}
            radioArray={PostRadioTypeArray}
            name="typecheckbox"
          />
          <S.TempList>임시저장 게시물&gt;</S.TempList>
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
          handleClick={onSaveTemproryPost} /*임시저장 리스트로 보내는 함수 서버 나오면 만들기 */
          disable={!(postContent.title.length > 0 && postContent.content.length > 0)}
          yellow={false}
          blue={false}
        />
        <Index
          big={true}
          text="작성완료"
          handleClick={onSubmitPost}
          disable={!(postContent.title.length > 0 && postContent.content.length > 0)}
          yellow={false}
          blue={true}
        />
      </S.SubmitBtn>
    </S.Wrapper>
  );
};

export default PostWrite;
