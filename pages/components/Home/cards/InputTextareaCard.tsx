const InputTextareaCard = (props: { title: string; placeholder: string }) => {
  return (
    <div className="h-[80%] bg-input-box-color rounded pt-2 pb-0 px-4 hover:border-2 focus-within:border-2 focus-within:border-primary-orange hover:border-primary-orange md:rounded-xl">
      <p className="text-sm font-bold text-primary-orange md:text-lg">{props.title}</p>
      <textarea
        placeholder={props.placeholder}
        className="bg-input-box-color text-lg font-semibold placeholder:text-placeholder-color pt-5 w-full h-[80%] outline-0 md:text-xl"
      />
    </div>
  );
};
export default InputTextareaCard;
