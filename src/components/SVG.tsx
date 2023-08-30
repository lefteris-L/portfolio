const SVG = (props: React.ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      {props.children}
    </svg>
  );
};
export default SVG;
