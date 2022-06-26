import React, {useState} from 'react'
import { connect } from 'react-redux'
import { addView } from '../redux/index'

const Views = ({count, addView}) => {
    const [number, setNumber]=useState(1);
  return (
    <div className='items'>
        <h2>조회 수: {count}</h2>
        <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        <button onClick={()=>addView(number)}>조회하기!</button>
    </div>
  )
}

//connect 공식문서 참고
const mapStateToProps=({views})=>{
    return{
        count: views.count
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
    addView: (number)=>addView(number)
}
export default connect(mapStateToProps, mapDispatchToProps)(Views)