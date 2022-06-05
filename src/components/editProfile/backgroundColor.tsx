import React from 'react';
import { backgroundColorListArray } from './constant';
import { TBackGroundColor } from '../../models/common';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { profileElementState } from '../../store/editProfile/profileElement';

const BackgroundColor: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useRecoilState(profileElementState);
  const onChangeBackground = (color: TBackGroundColor) => {
    setBackgroundColor({
      ...backgroundColor,
      profile_background_color: color,
    });
  };
  return (
    <>
      <p className="backgroundColor editTitle">배경 컬러 변경</p>
      <ColorList>
        {backgroundColorListArray.map((backgroundcolor, index) => (
          <EachColorBox
            key={index}
            onClick={() => {
              onChangeBackground(backgroundcolor);
            }}
            backgroundcolor={backgroundcolor}
          />
        ))}
      </ColorList>
    </>
  );
};
export default BackgroundColor;

const ColorList = styled.ul`
  width: 756px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 13px;
`;
const EachColorBox = styled.li<{ backgroundcolor: TBackGroundColor }>`
  width: 70px;
  height: 70px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  margin: 0 38px 30px 0;
  box-sizing: border-box;
  background-color: ${props => props.backgroundcolor};
  cursor: pointer;
`;
