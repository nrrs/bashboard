import {searchSubs} from "../util/api.util";

// ACTIONS
export const RECEIVE_SUBS = "RECEIVE_SUBS";
export const receiveSubs = subs => ({type: RECEIVE_SUBS, subscriptions: subs});

export const RECEIVE_RESULTS = "RECEIVE_RESULTS";
export const receiveResults = results => ({type: RECEIVE_RESULTS, results});
export const fetchResults = query => dispatch => {
  return searchSubs(query).then(res => {
    dispatch(receiveResults(res.data));
  });
};

export const CLEAR_RESULTS = "CLEAR_RESULTS";
export const clearResults = () => ({type: CLEAR_RESULTS});

// REDUCER
const defaultState = () => ({subscriptions: [], searchResults: []});

export const SubsReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  const copyState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_SUBS:
      // console.log("copyState.subscriptions", copyState.subscriptions);
      // console.log("action.subscriptions", action.subscriptions);
      // var set = new Set(copyState.subscriptions);
      // action.subscriptions.forEach(sub => set.add(sub));

      copyState.subscriptions = action.subscriptions;
      // copyState.subscriptions = Array.from(set);
      // copyState.subscriptions.add(action.subscriptions)
      return copyState;

    case RECEIVE_RESULTS:
      let results = [];

      action
        .results
        .data
        .children
        .some(child => {
          let result = {
            id: child.data.id,
            name: child.data.display_name
          };

          if (!state.subscriptions.some(i => i.id === result.id)) {
            results.push(result);
          }

          return (results.length >= 5)
            ? true
            : false;
        });
      copyState.searchResults = results;

      return copyState;

    case CLEAR_RESULTS:
      copyState.searchResults = [];
      return copyState;

    default:
      return copyState;
  }
};
