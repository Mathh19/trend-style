export const calculateDiscount = (price: number, discount: number) => {
  const discountPercent = price * (discount / 100);
  return price - discountPercent;
};
