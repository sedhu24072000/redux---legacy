import CreateCustomer from './CreateCustomer'
import Customer from './Customer'
import AccountOperation from './AccountOperations'
import Balance from './BalanceDisplay'
function App({handleClick, fullName, handleDeposit, handleWithdraw, handleLoan,loanAmount, purpose, handlePay, balance, isLoad}) {
  
  return (
    <div>
      <h1>The React-Redux Bank</h1>
      {fullName === "" ? <CreateCustomer handle={handleClick}></CreateCustomer> : <><Customer name={fullName}></Customer>
      <AccountOperation isLoading={isLoad} handleDep={handleDeposit} handleWith={handleWithdraw} handleLoan={handleLoan} amountLoan={loanAmount} loanPurposeAmt={purpose} handlepay={handlePay}></AccountOperation>
      <Balance bal={balance}></Balance></>}
      
      
    </div>
  );
}

export default App;
