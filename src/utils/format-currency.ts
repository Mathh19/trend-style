export const formatCurrency = (price: number) => {
  const Dollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return Dollar.format(price);
};
