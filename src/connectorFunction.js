import {connect} from 'react-redux'
import App from './App'
import {addName,deposit,withdraw,loan, pay} from './reduxComp/reduxStore'

const mapStateToProps = (state) => ({
    fullName: state.customer.fullName, 
    balance:state.account.balance,
    purpose:state.account.loanPurpose,
    loanAmount: state.account.loan,
    isLoad: state.account.isLoading
  })

  const mapDispatchToProps = (dispatch) => ({
    handleClick: (fullName,nationalID) => dispatch(addName(fullName,nationalID)), 
    handleDeposit: (amount,currency) => dispatch(deposit(amount,currency)),
    handleWithdraw: (amount) => dispatch(withdraw(amount)),
    handleLoan : (amount,purpose) => dispatch(loan(amount,purpose)),
    handlePay: () => dispatch(pay())
  });

  const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(App);

  export default ConnectedCounter;