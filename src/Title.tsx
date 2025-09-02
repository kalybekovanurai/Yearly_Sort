interface TitleProps {
  text: string;
}
const Title = (props: TitleProps) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};

export default Title;
