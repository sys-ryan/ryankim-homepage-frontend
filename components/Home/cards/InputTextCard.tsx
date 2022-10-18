import { LegacyRef } from "react";

const InputTextCard = (props: {
  title: string;
  placeholder: string;
  inputRef: LegacyRef<HTMLInputElement> | undefined;
}) => {
  return (
    <div className="h-[80%] bg-input-box-color rounded pt-2 pb-0 px-4 hover:border-2 focus-within:border-2 focus-within:border-primary-orange hover:border-primary-orange md:rounded-xl">
      <p className="text-sm font-bold text-primary-orange md:text-lg">{props.title}</p>
      <input
        type="text"
        placeholder={props.placeholder}
        className="bg-input-box-color text-lg font-semibold placeholder:text-placeholder-color pt-5 w-full outline-0 md:text-xl"
        ref={props.inputRef}
      />
    </div>
  );
};
export default InputTextCard;
