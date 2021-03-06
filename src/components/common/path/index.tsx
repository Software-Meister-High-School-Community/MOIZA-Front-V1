import React, { useMemo } from 'react';
import * as S from './styles';
import { PathType } from '../../../utils/interface/common';
import { Link } from 'react-router-dom';
import PathArrow from '../../../assets/img/common/nextBtnIcon.svg';

interface PropsType {
  pathArray: PathType[];
}

const Path: React.FC<PropsType> = ({ pathArray }) => {
  const PathList = useMemo(() => {
    return pathArray.map((item, index) => (
      <li>
        <Link to={item.link}>
          <S.Path>{item.path}</S.Path>
        </Link>
        <img src={PathArrow} />
      </li>
    ));
  }, [pathArray]);
  return <S.Wrapper className="path">{PathList}</S.Wrapper>;
};
export default Path;
