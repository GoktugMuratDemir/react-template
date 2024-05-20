import { useCustomSWR } from "../../hooks/useCustomSWR";

export const useSwrUsage: React.FC = () => {
  const { data } = useCustomSWR({
    url: "/carts",
    type: "get",
    params: { limit: 1 },
  });

  console.log(data);

  return <></>;
};
