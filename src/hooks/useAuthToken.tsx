import { useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { currentToken } from '../app/slices/authSlice';

interface TokenType {
  UserInfo: {
    id: string;
    email: string;
  };
}

const useAuthToken = () => {
  const token = useSelector(currentToken);
  // const token = useSelector((state: any) => state.auth.token);

  if (token) {
    const decoded = jwtDecode(token) as TokenType;

    const { id, email } = decoded.UserInfo;

    return { id, email };
  }
  return { id: '', email: '' };
};

export default useAuthToken;
