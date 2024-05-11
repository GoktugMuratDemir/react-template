import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  email: string;
  password: string;
  social: {
    facebook: string;
    twitter: string;
  };
  phoneNumbers: string[];
  users: {
    name: string;
    age: number;
  }[];
};

export const TemplateHookForm: React.FC = () => {
  const form = useForm<FormValues>({
    // mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      social: {
        facebook: "",
        twitter: "",
      },
      phoneNumbers: ["", ""],
      users: [
        {
          name: "Mehmet",
          age: 13,
        },
        {
          name: "Zerya Betül",
          age: 12,
        },
      ],
    },
  });
  const { register, control, handleSubmit, formState, watch } = form;
  const { errors } = formState;

  const values = watch();

  const { fields, remove, append } = useFieldArray({
    control,
    name: "users",
  });

  const onSubmit = (data: FormValues) => {
    console.log("data", data);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
              React-Hook-Form
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="flex flex-col gap-3 rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "This is required",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                    validate: {
                      notAdmin: (fieldValue: string) =>
                        fieldValue !== "admin@example.com" ||
                        "Enter valid email",
                      notBlackedList: (fieldValue: string) =>
                        !fieldValue.includes("blacklist") ||
                        "This email is blacklisted",
                    },
                  })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500 transition-colors duration-200"
                  placeholder="Email address"
                />
                <p className="text-red-500">{errors.email?.message}</p>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "This is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Minimum length should be 6",
                    },
                  })}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500 transition-colors duration-200"
                  placeholder="Password"
                />
                <p className="text-red-500">{errors.password?.message}</p>
              </div>
              <div>
                <label htmlFor="facebook" className="sr-only">
                  Facebook
                </label>
                <input
                  id="facebook"
                  type="text"
                  {...register("social.facebook", {
                    required: {
                      value: true,
                      message: "This is required",
                    },
                  })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500 transition-colors duration-200"
                  placeholder="Facebook"
                />
                <p className="text-red-500">
                  {errors.social?.facebook?.message}
                </p>
              </div>
              <div>
                <label htmlFor="twitter" className="sr-only">
                  Twitter
                </label>
                <input
                  id="twitter"
                  type="text"
                  {...register("social.twitter", {
                    required: {
                      value: true,
                      message: "This is required",
                    },
                  })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500 transition-colors duration-200"
                  placeholder="Twitter"
                />
                <p className="text-red-500">
                  {errors.social?.twitter?.message}
                </p>
              </div>
              <div>
                <label htmlFor="primaryPhoneNumber" className="sr-only">
                  Primary Phone Number
                </label>
                <input
                  id="primaryPhoneNumber"
                  type="text"
                  {...register("phoneNumbers.0", {
                    required: {
                      value: true,
                      message: "This is required",
                    },
                  })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500 transition-colors duration-200"
                  placeholder="Primary Phone Number"
                />
                <p className="text-red-500">
                  {errors.phoneNumbers?.[0]?.message}
                </p>
              </div>
              <div>
                <label htmlFor="secondaryPhoneNumber" className="sr-only">
                  Secondary Phone Number
                </label>
                <input
                  id="secondaryPhoneNumber"
                  type="text"
                  {...register("phoneNumbers.1", {
                    required: {
                      value: true,
                      message: "This is required",
                    },
                  })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500 transition-colors duration-200"
                  placeholder="Secondary Phone Number"
                />
                <p className="text-red-500">
                  {errors.phoneNumbers?.[1]?.message}
                </p>
              </div>

              <div>
                <label htmlFor="">List of Users</label>
                <div className="mt-4">
                  {fields.map((field, index) => (
                    <div
                      key={field.id}
                      className="flex gap-3 p-4 border border-gray-200 rounded-md mb-4"
                    >
                      <input
                        type="text"
                        {...register(`users.${index}.name`, {
                          required: {
                            value: true,
                            message: "This is required",
                          },
                        })}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500 transition-colors duration-200"
                        placeholder="Name"
                      />
                      <input
                        type="number"
                        {...register(`users.${index}.age`, {
                          required: {
                            value: true,
                            message: "This is required",
                          },
                        })}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500 transition-colors duration-200"
                        placeholder="Age"
                      />
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <div className="flex items-center w-full justify-center">
                    <button
                      type="button"
                      onClick={() => append({ name: "", age: 0 })}
                      className="px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 mx-auto"
                    >
                      Add New User Section
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:shadow-lg transition-colors duration-200"
              >
                Login
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <code>{JSON.stringify(values.email, null, 2)}</code>
              <code>{JSON.stringify(values.password, null, 2)}</code>
              <code>{JSON.stringify(values.social, null, 2)}</code>
              <code>{JSON.stringify(values.phoneNumbers, null, 2)}</code>
              <code>{JSON.stringify(values.users, null, 2)}</code>
            </div>
          </form>
        </div>
      </div>

      <DevTool control={control} />
    </>
  );
};
