export const CartItemWrapper = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return <div className="bg-white flex border border-black">{children}</div>;
};
