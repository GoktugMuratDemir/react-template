import { AuthRegistrationIntroduction } from "../../components/AuthRegistrationIntroduction";
import { PersonalInformationsContextProvider } from "../../sections/personal-inforations/context/PersonalInformationsContext";
import { FirstLoginForm } from "../../sections/personal-inforations/forms/FirstLoginForm";

export const Registration: React.FC = () => {
  return (
    <AuthRegistrationIntroduction>
      <PersonalInformationsContextProvider>
        <FirstLoginForm />
      </PersonalInformationsContextProvider>
    </AuthRegistrationIntroduction>
  );
};
