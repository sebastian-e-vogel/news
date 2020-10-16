import axios from "axios";
import * as dayjs from "dayjs";

export const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";

export const fetchNewsRequest = () => {
  return { type: FETCH_NEWS_REQUEST };
};
export const fetchNewsSuccess = (news) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: news,
  };
};

export const fetchNews = (api) => {
  const date = dayjs(new Date()).format("YYYY[-]MM[-]DD");
  const url =
    api === undefined
      ? `https://api.canillitapp.com/latest/${date}`
      : `https://api.canillitapp.com/news/category/${api}`;
  return (dispatch) => {
    dispatch(fetchNewsRequest());
    axios.get(url).then((response) => {
      const news = response.data.slice(0, 10);
      dispatch(fetchNewsSuccess(news));
    });
  };
};

export const searchNew = (palabra) => {
  const url = `https://api.canillitapp.com/search/${palabra}`;
  return (dispatch) => {
    dispatch(fetchNewsRequest());
    axios.get(url).then((response) => {
      const news = response.data.slice(0, 10);
      dispatch(fetchNewsSuccess(news));
    });
  };
};
