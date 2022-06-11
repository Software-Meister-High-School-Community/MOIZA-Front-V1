import EditProfile from '../../components/editProfile';
import WithAuthorization from '../../hoc/withAuthorization';

const EditProfilePage = () => {
  return <EditProfile />;
};
export default WithAuthorization(EditProfilePage);
