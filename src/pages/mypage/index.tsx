import MyPageComponent from '../../components/mypage';
import WithAuthorization from '../../hoc/withAuthorization';

const MyPage = () => {
  return <MyPageComponent />;
};
// export default WithAuthorization(MyPage);
export default MyPage;
