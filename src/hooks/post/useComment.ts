import React, { useCallback, useState } from 'react';

import { ICommnet } from '../../utils/interface/Post';

const useComment = () => {
  const [makeCommentData, setMakeCommentData] = useState<ICommnet>({
    id: 0,
    name: '멩쓴쥬',
    studentState: '재학생',
    profileImg: 'asdas',
    school: '미림마이스터고',
    createDate: '22/01/21  8:29',
    text: '',
    picture: [],
  });
  const [currentShowCOC, setCurrentShowCOC] = useState<ICommnet[]>([]);
  // COC : comment of comment

  const onChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setMakeCommentData(prev => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  const onChangeFile = useCallback((e: React.ChangeEvent<HTMLInputElement>, saveId: number = 0) => {
    if (e.target.files && e.target.files.length) {
      // setMakeCommentData((prev) => ({ ...prev, picture: [] }));
      if (e.target.files.length > 4) {
        window.alert('사진은 최대 4장 가능합니다.');
        return;
      }

      //saveId도 이미지 배열 길이이기 때문에 변수 따로 안 만들고 saveId로 함
      if (saveId + e.target.files.length > 4) {
        window.alert('사진은 최대 4장 가능합니다.');
        return;
      }

      const formData = new FormData();
      let count = saveId;
      for (const file of Array.from(e.target.files)) {
        formData.append('img', file);
        const handleFile = {
          id: count,
          name: file.name,
        };
        setMakeCommentData(prev => ({
          ...prev,
          picture: [...prev.picture, handleFile],
        }));
        count++;
      }
    }
  }, []);

  const onRemoveFile = useCallback((id: number) => {
    setMakeCommentData(prev => ({
      ...prev,
      picture: [...prev.picture.filter(item => item.id !== id)],
    }));
  }, []);

  const onSubmitNestedReply = (reply: ICommnet) => {
    setCurrentShowCOC(prev => [...prev, reply]);
  };

  return {
    makeCommentData,
    currentShowCOC,
    setCurrentShowCOC,
    onChangeValue,
    onChangeFile,
    onRemoveFile,
    onSubmitNestedReply,
  };
};

export default useComment;
