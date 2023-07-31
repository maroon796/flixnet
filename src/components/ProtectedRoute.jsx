import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { user } = UserAuth();
  console.log(user);

  if (!user) {
    <Navigate to="/" />;
  } else {
    return children;
  }
}

export default ProtectedRoute;
