import { IButtonProps } from "../interfaces/IButtonProps";

function Button(props: IButtonProps) {
  return (
    <button
      {...props}
      style={{ backgroundColor: props.color }}
      className="button-shape"
    >
      {props.title}
    </button>
  );
}

export default Button;
