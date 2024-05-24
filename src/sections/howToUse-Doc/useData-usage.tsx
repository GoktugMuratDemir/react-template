import { requests } from "../../api/requests";
import { ApplicationJson, useData, withHandleControl } from "../../hooks/useData";

const jsonData = {
  username: "mor_2314",
  password: "83r5^_",
};

export const UseDataUsage: React.FC = () => {
  const { data: getData, error: getError } = useData<unknown>(
    requests.getCart,
    "GET",
    {
      limit: 5,
    }
  );

  const {
    data: postData,
    error: postError,
    isLoading: loading,
    mutate,
  } = useData<unknown>(
    requests.login,
    "POST",
    jsonData,
    ApplicationJson,
    withHandleControl
  );

  // // Create FormData object for multipart/form-data request
  // const formData = new FormData();
  // formData.append("file", new Blob(["file content"]), "example.txt");
  // const {
  //   data: formPostData,
  //   error: formPostError
  // } = useData<any>("/endpoint", "POST", formData, "multipart/form-data");

  console.log("getData", getData, getError);

  console.log("postData", postData, postError, loading);

  const handleLogin = () => {
    mutate();
  };

  return (
    <div>
      <button onClick={handleLogin}>clicked</button>
    </div>
  );
};
