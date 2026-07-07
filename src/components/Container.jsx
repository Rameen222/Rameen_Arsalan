export default function Container({ children, className = "", ...props }) {
  return (
    <div className={`w-full px-8 sm:px-30 ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
