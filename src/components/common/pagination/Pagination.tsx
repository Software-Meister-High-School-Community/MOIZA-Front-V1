import React from 'react';
import * as S from './style';
import LeftArrow from '../../../assets/img/common/prevBtnIcon.svg';
import RightArrow from '../../../assets/img/common/nextBtnIcon.svg';
import { IPaginationProps } from '../../../interface/Common/Common.type';
const Pagination: React.FC<IPaginationProps> = ({ total, limit, page, setPage }) => {
  const totalPages = Math.ceil(total / limit);
  return (
    <>
      <S.Container>
        <S.MoveButton
          src={LeftArrow}
          onClick={() => setPage(page === 1 ? page : page - 1)}
          disabled={page === 1}
        />
        {Array(totalPages)
          .fill(0)
          .map((_, i) => (
            <S.Button key={i + 1} onClick={() => setPage(i + 1)} current={page === i + 1}>
              {i + 1}
            </S.Button>
          ))}
        <S.MoveButton
          src={RightArrow}
          onClick={() => setPage(page === totalPages ? page : page + 1)}
          disabled={page === totalPages}
        />
      </S.Container>
    </>
  );
};

export default Pagination;
