export const CartItemWrapper = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="relative bg-white flex border border-black">{children}</div>
  );
};
