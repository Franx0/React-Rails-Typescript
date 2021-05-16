import {FETCH_HISTORY_OK} from './actions';

export default function surveyReducer(state: any = {}, action: any) {
  switch (action.type) {
    case FETCH_HISTORY_OK:
      if(Array.isArray(action.data))
        return {...state, data: action.data}
      else
        return {...state, data: [...state.data, action.data]}
    default:
      return state
  }
}
