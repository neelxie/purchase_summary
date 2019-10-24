import { PROMO_CODE } from "./types";

export const handdleChange = e => dispatch => {
  dispatch({
    type: PROMO_CODE,
    payload: e.target.value
  });
};
