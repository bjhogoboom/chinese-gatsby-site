import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Lesson from './lessonPage'

const Lessons = () => {
  return (
    <Router>
      <Route path="/lessons" exact component={Lesson} />
    </Router>
  )
}

export default Lessons
