import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { postImages } from '../../utils/api/default';
import { verifyGraduate } from '../../utils/api/users';

const useGraduateCheck = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);

  const onChangeFile = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length) {
      setFile(e.target.files[0]);
    }
  }, []);

  const handleUploadFile = useCallback(async () => {
    //업로드 api 통신
    if (!file) return;
    const FD = new FormData();
    FD.append('images', file);
    const images = await postImages({ images: FD });
    verifyGraduate({ verifying_file_url: images.image_urls[0] }).then(() => {
      setFile(null);
      navigate('/graduateCheckSuccess');
    });
  }, [file]);

  return {
    file,
    setFile,
    onChangeFile,
    handleUploadFile,
  };
};

export default useGraduateCheck;
