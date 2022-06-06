// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { DELETE_EXPENSE, GET_CURRENCIES, SET_EXPENSE } from '../actions';

const initialState = ({
  currencies: [],
  expenses: [],
});

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return ({
      ...state,
      currencies: action.currencies,
    });
  case SET_EXPENSE:
    return ({
      ...state,
      expenses: [...state.expenses, action.expense],
    });
  case DELETE_EXPENSE:
    return ({
      ...state,
      expenses: [...state.expenses
        .filter((expense) => expense.id !== action.id)],
    });
  default:
    return state;
  }
};

export default wallet;
