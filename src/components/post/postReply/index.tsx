import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Path from '../../common/path';
import { postListReplyPathArr, seeMoreOption } from '../constant';
import * as S from './style';
import menuCircle from '../../../assets/img/common/seeMoreBtnIcon.svg';
import view from '../../../assets/img/common/openEye.svg';
import questionCircle from '../../../assets/img/post/QuestionIcon.svg';
import BookReadCircle from '../../../assets/img/post/BookReadIcon.svg';
import SubmitButton from '../../common/button/submitButton';
import PostReplyComment from './PostComment';
import ImgSplit from '../../common/ImgSplit';
import PostReplyMakeForm from './PostReplyMakeForm';
import SeeMoreModal from '../../common/seeMoreModal';
import HeartButton from '../../common/button/heartButton/index';
import { IGetFeedDetailResponse } from '../../../models/feeds/response';
import { getFeedDetail } from '../../../utils/api/feeds';
import { TFeed, TCategory, TSchool, TUser } from '../../../models/common';

const PostReply: React.FC = () => {
  const [postData, setPostData] = useState<IGetFeedDetailResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [isMake, setMake] = useState(false);
  const [seeMoreModalStatus, setSeeMoreModalStatus] = useState<boolean>(false);

  // exampledata를 위한 useState
  const [school, setSchool] = useState<TSchool>('DSM');
  const [user, setUser] = useState<TUser>('STUDENT');
  const [category, setCategory] = useState<TCategory>('FRONT-END');
  const [feed, setFeed] = useState<TFeed>('ALL');

  const { feedId } = useParams();
  const Id = Number(feedId);

  const exampleData = {
    author: {
      id: 1,
      profile_image_url: 'asdasd',
      name: '이정윤',
      school_name: school,
      type: user,
    },
    title: '이거 이렇게 하는게 맞나요?',
    content: '가르쳐주세요 ㅠㅠ',
    image_urls: ['a'],
    created_at: '22/08/15 8:30',
    feed_type: feed,
    category: category,
    is_mine: true,
    is_updated: false,
    like_count: 70,
    view_count: 10,
    comments: [
      {
        id: 1,
        author: {
          id: 1,
          profile_image_url: 'ads',
          name: '강석현',
          school_name: school,
          type: user,
        },
        is_mine: false,
        is_pinned: true,
        created_at: '22/08/17 8:00',
        content: '그것은 이렇게 하는거에요...',
        image_urls: ['a'],
        child_comments: [
          {
            id: 1,
            parent_comment_id: 1,
            author: {
              id: 3,
              profile_image_url: 'aaa',
              name: '이준서',
              school_name: school,
              type: user,
            },
            is_mine: false,
            image_urls: ['s'],
            created_at: '22/08/17 8:10',
            content: '그거 그렇게 하는거 아닌데...',
          },
        ],
      },
    ],
  };

  useEffect(() => {
    setPostData(exampleData);
    /*
    getFeedDetail(Id)
      .then(res => setPostData(res))
      .catch();
    setIsLoading(false);*/
  }, [setPostData, setIsLoading, feedId]);

  const closeModal = () => {
    setSeeMoreModalStatus(false);
  };

  return (
    <S.PostReplyBox>
      {isLoading ? (
        '로딩중...'
      ) : (
        <>
          {postData && (
            <>
              <Path pathArray={postListReplyPathArr} />
              <S.PostReplyWrap>
                <S.PostReplyHeaderWrap>
                  <S.PostReplyIconCircle src={questionCircle} alt="postIcon" />
                  <S.PostReplyInfoWrap>
                    <S.PostReplyTitle>{postData.title}</S.PostReplyTitle>
                    <S.PostReplyWriterWrap>
                      <S.PostReplyProfileCircle />
                      <S.PostReplyWriterInfoTextWrap>
                        <S.PostReplyWriterInfoText>
                          <strong>{postData.author.name}</strong>
                        </S.PostReplyWriterInfoText>
                        <S.PostReplyWriterBreakPoint />
                        <S.PostReplyWriterInfoText>
                          {postData.author.school_name}
                        </S.PostReplyWriterInfoText>
                        <S.PostReplyWriterBreakPoint />
                        <S.PostReplyWriterInfoText>
                          {postData.author.type}
                        </S.PostReplyWriterInfoText>
                      </S.PostReplyWriterInfoTextWrap>
                      <S.PostReplyDateInfoWrap>
                        <pre>작성일 {postData.created_at}</pre>
                      </S.PostReplyDateInfoWrap>
                      <S.PostReplyMenuButton onClick={() => setSeeMoreModalStatus(true)}>
                        <img src={menuCircle} alt="menu" />
                        {seeMoreModalStatus && (
                          <SeeMoreModal optionList={seeMoreOption} closeModal={closeModal} />
                        )}
                      </S.PostReplyMenuButton>
                    </S.PostReplyWriterWrap>
                  </S.PostReplyInfoWrap>
                </S.PostReplyHeaderWrap>
                <S.PostReplyMiddleWrap>
                  <S.PostReplyContentText withPicture={postData.image_urls.length ? true : false}>
                    {postData.content}
                  </S.PostReplyContentText>
                  <ImgSplit width={780} imgs={postData.image_urls} gap={20} />
                </S.PostReplyMiddleWrap>
                <S.PostReplyBottomWrap>
                  <S.PostReplyBottomLikeWrap>
                    <HeartButton feedId={Id} />
                    <p>{postData.like_count}</p>
                  </S.PostReplyBottomLikeWrap>
                  <S.PostReplyBottomViewWrap>
                    <img src={view} alt="view" />
                    <p>{postData.view_count}</p>
                  </S.PostReplyBottomViewWrap>
                </S.PostReplyBottomWrap>
                <S.PostReplyLine />
                {isMake ? (
                  <PostReplyMakeForm />
                ) : (
                  <S.PostReplyCommentTitleWrap>
                    <p>
                      답글 <strong>{postData.comments.length}</strong>
                    </p>
                    {postData?.comments?.length !== 0 && (
                      <SubmitButton text="답글 추가" big blue handleClick={() => setMake(true)} />
                    )}
                  </S.PostReplyCommentTitleWrap>
                )}
                {postData?.comments?.length ? (
                  <>
                    {postData?.comments.map((item, idx) => {
                      return (
                        <PostReplyComment
                          author={item.author}
                          content={item.content}
                          created_at={item.created_at}
                          image_urls={item.image_urls}
                          is_mine={item.is_mine}
                          is_pinned={item.is_pinned}
                          child_comments={item.child_comments}
                          key={idx}
                          id={idx}
                        />
                      );
                    })}
                  </>
                ) : (
                  <S.PostReplyNoCommentWrap>
                    <p>아직 답글이 없네요!</p>
                    <SubmitButton text="답글 추가" blue big />
                  </S.PostReplyNoCommentWrap>
                )}
              </S.PostReplyWrap>
            </>
          )}
        </>
      )}
    </S.PostReplyBox>
  );
};

export default PostReply;
