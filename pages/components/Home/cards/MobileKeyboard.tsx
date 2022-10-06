const MobileKeyboard = (props: { className: string; text: string }) => {
  return (
    <div className={`h-14 ${props.className}`}>
      <div>{props.text}</div>
    </div>
  );
};
export default MobileKeyboard;
