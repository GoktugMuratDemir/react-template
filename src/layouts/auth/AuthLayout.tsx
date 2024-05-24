import { Outlet } from "react-router-dom";
import { AuthRegistrationIntroduction } from "../../components/AuthRegistrationIntroduction";

export const AuthLayoutMain: React.FC = () => {
  return (
    <AuthRegistrationIntroduction>
      <Outlet />
    </AuthRegistrationIntroduction>
  );
};
