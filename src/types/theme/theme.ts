export interface ThemedComponent {
  className?: string;
  children?: string | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
}