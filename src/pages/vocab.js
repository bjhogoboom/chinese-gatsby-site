import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Vocab1 from './vocabPage';

const Vocab = () => {
  return (
    <Router>
      <Route path="/vocab" exact component={Vocab1} />
    </Router>
  )
}

export default Vocab
