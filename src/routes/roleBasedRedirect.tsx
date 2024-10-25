import { useAppSelector } from "../hooks/hooke";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux";

type RoleRoutes = {
  [key: string]: string;
};

interface RoleBasedRedirectProps {
  roles: RoleRoutes;
}

export const RoleBasedRedirect: React.FC<RoleBasedRedirectProps> = ({ roles }) => {
    const {data} = useAppSelector((state:RootState)=>state.user)
    
    if (!data || !data.role) {
        return <div>Loading...</div>;
      }
      
      if (!roles[data.role]) {
        return <Navigate to="/adminLogin" replace />;
      }
      
      return <Navigate to={roles[data.role]} replace />;
};
