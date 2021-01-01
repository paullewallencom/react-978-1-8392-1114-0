import { fromJS } from 'immutable';

const typeMap = fromJS({
  SELECT_CATEGORY: state =>
    state.update('items', items => items.clear()),
  FETCH_ARTICLES: (state, payload) =>
    state.set('items', fromJS(payload)),
});

export default (state, { type, payload }) =>
  typeMap.get(type, s => s)(state, payload);
