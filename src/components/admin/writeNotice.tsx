import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import styled from "styled-components";
import Path from '../common/path';
import { writeNoticePathArr } from './constant';
import Switch from '../common/toggle/switch';
import UploadFiles from '../common/upload/files';
import { UploadDataType } from '../../utils/interface/common';
import SubmitButton from '../common/button/SubmitButton/SubmitButton';

const WriteNotice: React.FC = () => {
  const FD = new FormData();
  const [isFix, setIsFix] = useState(false);
  const [noticeContent, setNoticeContent] = useState<UploadDataType>({
    title: '',
    content: '',
    files: [],
  });
  const onChangeFixState = useCallback(() => {
    setIsFix(prev => !prev);
  }, [isFix]);
  const onChangeNoticeContent = useCallback(
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      if (
        (e.target.name === "title" && e.target.value.length <= 30) ||
        (e.target.name === "content" && e.target.value.length <= 500)
      ) {
        setNoticeContent({
          ...noticeContent,
          [e.target.name]: e.target.value,
        });
      }
    },
    [noticeContent, setNoticeContent],
  );

  const onSubmitNotification = useCallback(() => {
    FD.append('title', noticeContent.title);
    FD.append('content', noticeContent.content);
    noticeContent.filemap(eachFile => FD.append('files', eachFile));
  }, [noticeContent]);
  return (
    <Wrapper>
      <Path pathArray={writeNoticePathArr} />
      <InputContentBox>
        <Title>
          <p>제목</p>
          <label>
            <input name="title" onChange={onChangeNoticeContent} value={noticeContent.title} />
            <TextCount>{noticeContent.title.length}/30</TextCount>
          </label>
        </Title>
        <strong>
          <p>상단 고정</p>
          <Switch isFix={isFix} onChangeFixState={onChangeFixState} />
        </strong>
        <NoticeMainContent
          name="content"
          onChange={onChangeNoticeContent}
          value={noticeContent.content}
        />
        <TextCount marginTop="15px">{noticeContent.content.length}/500</TextCount>
      </InputContentBox>
      <UploadFiles state={noticeContent} setStateFunction={setNoticeContent} />
      <SubmitBtn>
        <SubmitButton
          big={false}
          text="작성완료"
          handleClick={onSubmitNotification}
          disable={!(noticeContent.title.length > 0 && noticeContent.content.length > 0)}
          yellow={false}
          blue={true}
        />
      </SubmitBtn>
    </Wrapper>
  );
};

export default WriteNotice;

const Wrapper = styled.section`
  width: 1200px;
  margin: 0 auto;
`
const InputContentBox = styled.form`
  background-color: #ffffff;
  margin-top: 73px;
  width: 100%;
  height: 800px;
  box-sizing: border-box;
  padding: 76px 100px 56px 110px;
  > strong {
    display: flex;
    justify-content: flex-end;
    margin: 25px 0;
    > p {
      margin-right: 20px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      color: #000000;
    }
  }
`
const Title = styled.strong`
  display: flex;
  align-items: center;
  > p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }
  > label {
        width: 924px;
        display: flex;
        background-color: #F9F9F9;
        border: 1px solid #E0E0E0;
        border-radius: 5px;
        margin-left: 12px;
    align-items: center;
      >input {
        border: none;
        outline: none;
        background-color: transparent;
        width: 874px;
        height: 40px;
        box-sizing: border-box;
        padding: 9px 0 10px 15px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #555555;
      }
  }
`
const NoticeMainContent = styled.textarea`
  background: #F9F9F9;
  border: 1px solid #E0E0E0;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  height: 489px;
  resize: none;
  padding: 20px 20px 28px 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #555555;
`
const PostOptionalFunction = styled.section`
  display: flex;
`
const SubmitBtn = styled.section`
  > button {
    margin: 148px auto 115px auto;
  }
`
const TextCount = styled.div<{ marginTop?: string }>`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: #999999;
  margin-top: ${(props) => props.marginTop};
`
