import { useCustomSWR } from "../../hooks/useCustomSWR";
import { TemplateHookForm } from "../../sections/howToUse-Doc/example-template-react-hooh-form";

export const Home: React.FC = () => {
  const { data } = useCustomSWR({
    url: "https://fakestoreapi.com/carts",
    type: "get",
    params: { limit: 1 },
  });

  console.log(data);

  return (
    <div>
      <TemplateHookForm />
    </div>
  );
};
