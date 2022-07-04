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

const PostReply: React.FC = () => {
  const [postData, setPostData] = useState<IGetFeedDetailResponse>();
  const [isLoading, setIsLoading] = useState(true);
  const [isMake, setMake] = useState(false);
  const [seeMoreModalStatus, setSeeMoreModalStatus] = useState<boolean>(false);

  const { feedId } = useParams();
  const Id = Number(feedId);

  useEffect(() => {
    getFeedDetail(Id)
      .then(res => setPostData(res))
      .catch();
    setIsLoading(false);
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
                          <strong>{postData.author.author.name}</strong>
                        </S.PostReplyWriterInfoText>
                        <S.PostReplyWriterBreakPoint />
                        <S.PostReplyWriterInfoText>
                          {postData.author.author.school_name}
                        </S.PostReplyWriterInfoText>
                        <S.PostReplyWriterBreakPoint />
                        <S.PostReplyWriterInfoText>
                          {postData.author.author.type}
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
