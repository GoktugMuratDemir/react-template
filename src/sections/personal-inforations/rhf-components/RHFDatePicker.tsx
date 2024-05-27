import { FC, useState } from "react";
import { useFormContext, FieldError } from "react-hook-form";
import { ErrorMessage } from "../../../components/hook-form/RHFErrorMessage";
import { tr } from "date-fns/locale";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface DatePickerProps {
  name: string;
}

export const RHFDatePicker: FC<DatePickerProps> = ({
  name,
  //   ...props
}) => {
  const {
    setValue,
    formState: { errors },
  } = useFormContext();
  const error: FieldError | undefined = errors[name] as FieldError;
  const [selected, setSelected] = useState<Date | undefined>(undefined);

  return (
    <div>
      <DayPicker
        mode="single"
        captionLayout="dropdown-buttons"
        fromYear={1980}
        toYear={2024}
        locale={tr}
        selected={selected}
        onSelect={(newValue) => {
          setValue(name, newValue);
          setSelected(newValue);
        }}
      />
      <ErrorMessage error={error} />
    </div>
  );
};
