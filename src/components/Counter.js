import React from "react"
import { connect } from "react-redux"

const Counter = ({ counter }) => {
  return(
    <div>
      <h3>counter: { counter }</h3>
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter.counter
})

export default connect(mapStateToProps)(Counter)