import React from 'react'
import { connect } from 'react-redux'
import { addSubscriber } from '../redux/index'

const Subscribers = ({count, addSubscriber}) => {
    
  return (
    <div className='items'>
        <h2>구독자 수: {count}</h2>
        <button onClick={()=>addSubscriber()}>구독하기!</button>
    </div>
  )
}

//connect 공식문서 참고
const mapStateToProps=({subscribers})=>{
    return{
        count: subscribers.count
    }
}
//dispatch 사용해 component와 action 연결
/*function ver.
const mapDispatchToProps=(dispatch)=>{
    return{
        //import 해온 action인 addSubscriber를 실행하는 addSubscriber 생성
        addSubscriber:()=>dispatch(addSubscriber())
    }
}*/
//object ver.
const mapDispatchToProps={
    addSubscriber
}
export default connect(mapStateToProps, mapDispatchToProps)(Subscribers)