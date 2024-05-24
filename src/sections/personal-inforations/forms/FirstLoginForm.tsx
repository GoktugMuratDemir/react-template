import React, { useContext } from "react";

import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PersonalInformationsContext } from "../context/PersonalInformationsContext";
import { FirstLoginFormValues } from "../values";
import { RHFFormValues } from "../../../components/hook-form/RHFFormValues";
import { renderFormElement } from "../rhf-components/renderFormElement";
import { Stepper } from "../components/Stepper";

type PersonalFormValues = {
  gender: string;
  size: string;
  currentWeight: string;
  targetWeight: string;
  birthDate: string;
};

const schema = yup.object().shape({
  gender: yup.string().required("Gender is required"),
  size: yup.string().required("Size is required"),
  currentWeight: yup.string().required("Current Weight is required"),
  targetWeight: yup.string().required("Target Weight is required"),
  birthDate: yup.string().required("Birth Date is required"),
});

const defaultValues: PersonalFormValues = {
  gender: "",
  size: "",
  currentWeight: "",
  targetWeight: "",
  birthDate: "",
};

export const FirstLoginForm: React.FC = () => {
  const { step, forwardStep } = useContext(PersonalInformationsContext);
  const form = useForm<PersonalFormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { handleSubmit, trigger } = form;
  const showStep = FirstLoginFormValues.find((value) => value.step === step);

  const handleNext = async () => {
    if (showStep) {
      const isValid = await trigger(showStep.name as keyof PersonalFormValues);
      console.log(isValid);
      if (isValid && showStep.step !== FirstLoginFormValues.length - 1) {
        forwardStep();
      }
    }
  };

  const onSubmit = (data: PersonalFormValues) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form
        className="w-full px-20 flex flex-col gap-9 min-h-screen mt-24 max-sm:px-8 max-sm:mt-16"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Stepper values={FirstLoginFormValues} />

        <div className="text-4xl font-bold pb-7">{showStep?.label}</div>
        {showStep && renderFormElement(showStep)}
        <button
          type="button"
          onClick={handleNext}
          className="w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-700"
        >
          Sonraki
        </button>
        <hr />
        <RHFFormValues />
      </form>
    </FormProvider>
  );
};
