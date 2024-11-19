import {applyMiddleware, createStore} from 'redux'
import { combineReducers } from 'redux'
import { thunk } from 'redux-thunk'


const initialCustomer ={
    fullName:"",
    nationalID: 0,
    createdAt:""
}

const initialAccount = {
    balance:0,
    loan:0,
    loanPurpose:"",
    isLoading: false
}

function customerReducer(state = initialCustomer,action){
    switch(action.type){
        case 'customer/createCustomer':
            return{...state, fullName:action.payload.fullName, nationalID:action.payload.nationalID, createdAt: new Date().toISOString()}
        case 'customer/updateCustomer':
            return {...state, fullName:action.payload.fullName}
        default:
            return state
    }
}

function accountReducer(state = initialAccount,action){
    switch(action.type){
        case 'deposit':
            return {...state,balance:state.balance+action.payload,isLoading:false}
        case 'withdraw':
            return {...state,balance: state.balance-action.payload}
        case 'loan':
            return{...state, balance:state.balance+action.payload.amount, loanPurpose:action.payload.purpose, loan:action.payload.amount}
        case 'payLoan':
            return {...state,balance:state.balance-state.loan,loan:0, loanPurpose:""}
        case 'currencyConverting':
            return {...state,isLoading:true}
        default:
            return state
    }
}

const rootReducer = combineReducers({
    customer:customerReducer,
    account : accountReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk))

export function addName(fullName, nationalID){
    return {type:"customer/createCustomer", payload:{fullName,nationalID}}
}

export function updateName(fullName){
    return{type:"updateCustomer", payload:{fullName}}
}

export function deposit(amount,currency){
    if(currency ==="USD") {
        return({type:'deposit', payload:amount})
    }
    
    return async function (dispatch,getState){
        dispatch({type:'currencyConverting'})
        const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`)
        const data = await res.json();
        
        const converted = data.rates.USD

        dispatch({type:"deposit", payload:converted})


    }
}

export function withdraw(amount){
    return({type:'withdraw', payload:amount})
}

export function loan(amount, purpose){
    return({type:'loan', payload:{amount,purpose}})
}

export function pay(){
    return({type:"payLoan"})
}


export default store