export const formatPrice = (price: number) => {
  const stringPrice = price.toFixed(2);

  return stringPrice.replace('.', ',')
}