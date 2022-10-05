const TechDesciptionListItem = (props: { className?: string; text: any; key: any }) => {
  return (
    <li key={props.key} className={`${props.className} flex flex-row gap-4 lg:text-3xl lg:gap-6`}>
      <p>✓</p>
      <p>{props.text}</p>
    </li>
  );
};
export default TechDesciptionListItem;
