import React, { useState } from 'react';
import * as S from './styles';
import RadioButton from '../../common/select/radioButton';
import { mypageOptionArray } from '../constant';
import Dropdown from '../../common/select/dropdown/index';
import { departmentOptions, sortOptions } from '../../common/select/dropdown/options';

interface PropsType {
  isMine: boolean;
}

const PostList: React.FC<PropsType> = ({ isMine }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [field, setField] = useState(departmentOptions[0].value);
  const [sort, setSort] = useState(sortOptions[0].value);
  return (
    <S.Wrapper>
      <S.Options>
        <S.Title>
          {isMine ? (
            '나'
          ) : (
            <>
              <p>장정원</p>님
            </>
          )}
          의 게시글
        </S.Title>
        <RadioButton
          name="mypageOption"
          selected={selectedOption}
          setSelected={setSelectedOption}
          radioArray={mypageOptionArray}
        />
        <Dropdown options={departmentOptions} value={field} onChangeValue={setField} />
        <Dropdown options={sortOptions} value={sort} onChangeValue={setSort} />
      </S.Options>
      <S.List></S.List>
    </S.Wrapper>
  );
};
export default PostList;
