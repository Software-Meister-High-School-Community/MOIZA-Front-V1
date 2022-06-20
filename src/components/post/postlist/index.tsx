import React, { useMemo, useState } from 'react';
import * as S from './style';
import Vector from '../../../assets/img/post/vector.svg';
import Write from '../../../assets/img/common/writePen.svg';
import Path from '../../common/path';
import { categoryList } from '../constant';
import Dropdown from '../../common/select/dropdown';
import RadioButton from '../../common/select/radioButton';
import { typeArr } from '../constant';
import PostForm from '../../common/form/postForm';
import PagiNation from '../../common/pagenation';
import { sortOptions } from '../../common/select/dropdown/options';
import { TCategory } from '../../../models/common';
import { PathType } from '../../../utils/interface/common';

interface IProps {
  categoryType: TCategory;
}

const PostList: React.FC<IProps> = ({ categoryType }) => {
  const [value, setValue] = useState(sortOptions[0].option);
  const [seleted, setSeleted] = useState('all');
  const [pagenation, setPagenation] = useState(1);
  const categoryName = useMemo(() => {
    const index = categoryList.findIndex(item => item.id === categoryType);
    return categoryList[index].summary;
  }, [categoryType]);
  const pathArray: PathType[] = useMemo(() => {
    return [
      {
        path: '카테고리',
        link: `/category`,
      },
      {
        path: categoryType,
        link: '',
      },
    ];
  }, [categoryType]);
  return (
    <>
      <S.WriteBtn>
        <img src={Write} alt="" />
      </S.WriteBtn>
      <S.Wrapper>
        <S.PostHeadDiv>
          <Path pathArray={pathArray} />
          <S.PostNameDiv>
            <S.PostName>{categoryName} 커뮤니티</S.PostName>
            <S.PostVector src={Vector} alt="" />
          </S.PostNameDiv>
        </S.PostHeadDiv>
        <S.PostDiv>
          <S.SelectDiv>
            <S.RadioBtnDiv>
              <RadioButton
                selected={seleted}
                setSelected={setSeleted}
                radioArray={typeArr}
                name="typecheckbox"
              />
            </S.RadioBtnDiv>
            <Dropdown value={value} onChangeValue={setValue} options={sortOptions} />
          </S.SelectDiv>
          <S.PosFormtDiv>{/*<PostForm />*/}</S.PosFormtDiv>
        </S.PostDiv>
        <nav className="pagenation">
          <PagiNation total={5} limit={1} page={pagenation} setPage={setPagenation} />
        </nav>
      </S.Wrapper>
    </>
  );
};

export default PostList;
