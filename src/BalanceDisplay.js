function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({bal}) {
  return <div className="balance">{formatCurrency(bal)}</div>;
}

export default BalanceDisplay;
