const MobileKeyboard = (props: { className: string; text: string }) => {
  return <div className={`h-14 ${props.className}`}>{props.text}</div>;
};
export default MobileKeyboard;
