import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

type FormField = {
  name: string;
  label: string;
  type: string;
  validation?: object;
};

type Props = {
  fields: FormField[];
  onSubmit: SubmitHandler<FieldValues>;
  title?: string;
  buttonText: string;
};

const Form = ({ fields, onSubmit, title, buttonText }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
            rounded-md"
    >
      <h1
        className="
                    text-center
                    text-3xl
                    font-bold
                    "
      >
        {title}
      </h1>
      {fields.map((field) => (
        <div
          key={field.name}
          className="flex
                    flex-col
                    mb-4"
        >
          <label
            htmlFor={field.name}
            className="text-md
                    ml-0
                    text-[#FFFFFF]
                    "
          >
            {field.name}
          </label>
          <input
            className="
                    h-10
                    w-[250px]
                    rounded-md
                    border border-gray-300
                    bg-gray-100
                    focus:bg-white
                    focus:outline-none
                    px-2
                    "
            type={field.type}
            id={field.name}
            {...register(field.name, field.validation)}
          />

          {errors[field.name] && (
            <p
              className="text-[#000000]
                         text-sm
                         text-center"
            >
              {errors[field.name]?.message as string}
            </p>
          )}
        </div>
      ))}
      <div className="flex
                    justify-center">
      <button
        className="mt-2
                  w-[140px]
                  bg-[#025E73]
                  hover:bg-[#025E73]
                  h-10
                  text-white
                  rounded-full"
        type="submit"
      >
        {buttonText}
      </button>
      </div>
      
    </form>
  );
};

export default Form;
