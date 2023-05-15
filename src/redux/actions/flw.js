import { server } from "../../server";
import axios from "axios";

export const getFlwPubKey = () => async (dispatch) => {
    try {
      const { data } = await axios.get(`${server}/payment/stripeapikey`);
      dispatch({
        type: "FlwPubKey",
        payload: data.stripeApikey,
      });
    } catch (error) {
      dispatch({
        type: "getFlwPubKeyFailed",
        payload: error?.response?.data?.message,
      });
    }
  };