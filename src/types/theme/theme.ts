export interface ThemedComponent {
  className?: string;
  children: string | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}