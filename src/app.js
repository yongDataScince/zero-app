import React from "react"
import { connect } from "react-redux"
import Counter from "@components/Counter"
import { increment, decrement } from "./store/actions/counter"
const App = ({incrementCunter, decrementCounter}) => {
  return (
    <div className="container pt-3">
      <h1>Main App</h1>
      <Counter/>
      <div className="col" onClick={() => incrementCunter()}>
        <button className="btn btn-success">ADD</button>
      </div> 
      <div className="col" onClick={() => decrementCounter()}>
        <button className="btn btn-danger">MINUS</button>
      </div> 
    </div>
  )
}

const mapDispatchToProps = {
  incrementCunter: increment,
  decrementCounter: decrement
}

export default connect(null, mapDispatchToProps)(App);