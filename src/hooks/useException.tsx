import { useNavigate } from 'react-router';

const useException = () => {
  const navigate = useNavigate();
  const moveTo404Page = () => {
    navigate('/404');
  };
  return {
    moveTo404Page,
  };
};

export default useException;
