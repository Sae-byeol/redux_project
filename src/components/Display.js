import React from 'react'
import { connect } from 'react-redux'
const Display = (props) => {
  return (
    <div>
      <p>구독자 수 : {props.count}</p>
    </div>
  )
}
const mapStateToProps=({subscribers})=>{
    //리턴되는 count는 Display에 props로 넘겨짐
    return {
        count: subscribers.count
    }
}

export default connect(mapStateToProps)(Display)