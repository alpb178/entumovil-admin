import clsx from "clsx";

export function PageAnimation(props) {
  const { children, className, direction } = props;
  return (
    <div className={clsx(`page-enter-from-${direction ?? "right"} mt-5`, className)}>
      {children}
    </div>
  );
}
