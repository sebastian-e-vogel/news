/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../../actions";
import './searchbar.css'

const Searcher = (props) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(actions.searchNew(text));
    setText("");
  };

  const handlerInput = (e) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={text} onChange={handlerInput} placeholder="buscar noticia"/>

      <button>Buscar</button>
    </form>
  );
};

export { Searcher };
