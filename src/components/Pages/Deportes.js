/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Card } from "../Card";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions";

const Deportes = (props) => {
  const dispatch = useDispatch();
  const [news, setNews] = useState([]);
  const buscador = useSelector((state) => state);

  useEffect(() => {
    dispatch(actions.fetchNews(5));
  }, []);
  useEffect(() => {
    const tenNews = buscador.news;
    setNews(tenNews);
  }, [buscador]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {buscador.loading
        ? "cargando"
        : news.map((news) => {
            return (
              <div>
                <Card
                  key={news.url}
                  imgUrl={news.img_url}
                  info={news.title}
                  linkMore={news.url}
                  portal={news.source_name}
                />
              </div>
            );
          })}
    </div>
  );
};

export { Deportes };
