// const formatter = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "BDT",
//   minimumFractionDigits: 2,
// });

// export default formatter.format;

export default function MoneyFormatter(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
