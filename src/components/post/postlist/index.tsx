import React, { useState } from 'react';
import * as S from './style';
import Vector from '../../../assets/img/post/vector.svg';
import Write from '../../../assets/img/common/writePen.svg';
import Path from '../../common/path';
import { postListPathArr } from '../constant';
import Dropdown from '../../common/select/dropdown';
import RadioButton from '../../common/select/radioButton';
import { typeArr } from '../constant';
import PostForm from '../../common/postform';
import PagiNation from '../../common/pagination';
import { sortOptions } from '../../common/select/dropdown/options';

const PostList: React.FC = () => {
  const [value, setValue] = useState(sortOptions[0].option);
  const [seleted, setSeleted] = useState('all');
  const [pagenation, setPagenation] = useState(1);

  return (
    <>
      <S.WriteBtn>
        <img src={Write} alt="" />
      </S.WriteBtn>
      <S.Wrapper>
        <S.PostHeadDiv>
          <Path pathArray={postListPathArr} />
          <S.PostNameDiv>
            <S.PostName>OOO 커뮤니티</S.PostName>
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
          <S.PosFormtDiv>
            <PostForm />
          </S.PosFormtDiv>
        </S.PostDiv>
        <nav className="pagenation">
          <PagiNation total={5} limit={1} page={pagenation} setPage={setPagenation} />
        </nav>
      </S.Wrapper>
    </>
  );
};

export default PostList;
