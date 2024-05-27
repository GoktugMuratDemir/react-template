import { CustomButton } from "../../components/customs/custom-button";
import { useRouter } from "../../hooks/useRouter";
import { paths } from "../../routes/paths";

export const SuccessPassword: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center">
      <img src="/icons/ic_double-star.svg" alt="" />
      <div className="flex flex-col gap-3">
        <p className="font-bold text-3xl">Parola Değiştirildi!</p>
        <p className="text-gray-600">
          Parolanız başarıyla değiştirildi. Yeni paralonızla hesabınıza giriş
          yapabilirsiniz.
        </p>
      </div>
      <div className="w-3/4">
        <CustomButton
          label="Giriş Yap"
          variant="contained"
          color="black"
          onClick={() => router.push(`/${paths.auth.root}/${paths.auth.login}`)}
        />
      </div>
    </div>
  );
};
