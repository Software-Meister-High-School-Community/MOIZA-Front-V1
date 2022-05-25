import * as S from './style';
import { NoticeProps } from '../../../utils/interface/Notice';
import OutsideClickHandler from 'react-outside-click-handler';

const Notice: React.FC<NoticeProps> = ({ noticeState, noticeClose }) => {
  const date = new Date();
  const notices = [
    { id: 1, name: '', message: '공지사항이 올라 왔습니다', date: date },
    { id: 1, name: '정우재', message: '공지사항이 올라 왔습니다', date: date },
    { id: 1, name: '', message: '공지사항이 올라 왔습니다', date: date },
    { id: 1, name: '정우재', message: '공지사항이 올라 왔습니다', date: date },
    { id: 1, name: '정우재', message: '공지사항이 올라 왔습니다', date: date },
  ];

  return (
    <S.Container disabled={noticeState}>
      <OutsideClickHandler onOutsideClick={noticeClose}>
        <S.NoticeForm>
          <S.Day>22/01/22</S.Day>
          {notices.map(item => (
            <S.ItemContainer>
              {item.name ? (
                <>
                  <S.Name>{item.name}</S.Name>
                  <S.ItemMessage>님 {item.message}</S.ItemMessage>
                </>
              ) : (
                <S.ItemMessage>{item.message}</S.ItemMessage>
              )}
            </S.ItemContainer>
          ))}
        </S.NoticeForm>
      </OutsideClickHandler>
    </S.Container>
  );
};

export default Notice;
