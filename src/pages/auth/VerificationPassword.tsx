import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { RHFTextfield } from "../../components/hook-form/RHFTextfield";
import { RHFSubmitButton } from "../../components/hook-form/RHFSubmitButton";
// import { RHFFormValues } from "../../components/hook-form/RHFFormValues";
import { paths } from "../../routes/paths";
import { AuthHeader } from "../../sections/auth/AuthHeader";
import { AuthLink } from "../../sections/auth/AuthLink";
import { useRouter } from "../../hooks/useRouter";

export type FormValues = {
  verificationCode: string;
};

const schema = yup.object().shape({
  verificationCode: yup.string().required("Verification Code is required"),
});

const defaultValues: FormValues = {
  verificationCode: "1234",
};

export const VerificationPassword: React.FC = () => {
  const router = useRouter();
  const form = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { control, handleSubmit } = form;

  const onSubmit = (data: FormValues) => {
    handlePush(`/${paths.auth.root}/${paths.auth.successPassword}`)
    console.log(data);
  };

  const handlePush = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <FormProvider {...form}>
          <form
            className="w-full px-20 flex flex-col gap-9"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <AuthHeader
              title="Doğrulama"
              subtitle="E-posta adresinize gönderdiğimiz doğrulama kodunu girin."
            />

            <div className="flex flex-col gap-6">
              <RHFTextfield name="verificationCode" label="Doğrulama Kodu" />
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <RHFSubmitButton label="Onayla" color="black" />
              <AuthLink
                title="Kod almadınız mı?"
                rootText="Tekrar gönder"
                path={`/${paths.auth.root}/${paths.auth.register}`}
              />
            </div>

            {/* <RHFFormValues /> */}
          </form>
        </FormProvider>
      </div>

      <DevTool control={control} />
    </>
  );
};
