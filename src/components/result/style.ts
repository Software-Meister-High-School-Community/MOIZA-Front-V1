import styled from 'styled-components';

export const SearchResult = styled.strong`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  margin: 60px 0 49px 0;
  > .keyword,
  .totalCount {
    color: ${({ theme }) => theme.color.main_blue_color};
    font-weight: inherit;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  /* display:flex; */
  width: 1200px;
  height: 34px;
  margin: 0 auto 72px auto;
`;

export const Options = styled.div`
  display: flex;
  height: 34px;
  align-items: center;
`;
export const DropdownBox = styled.div`
  display: flex;
  width: 378px;
  margin-left: auto;
  > .dropdownWrapper {
    margin: 0;
    :first-child {
      margin-right: 32px;
    }
  }
`;
