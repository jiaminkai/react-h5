import React from "react"
import {connect} from "react-redux"
class List extends React.Component{
    constructor(props){
        super(props)
        this.state={age:19}
    }
    render(){
        console.log(this.props.currot)
        return(
            <>
            <div>我是List页面</div>
            <div>数字:{this.props.currot}</div>
            </>
        )
    }
}
const mapStateTo = state =>{
    console.log('List: ', state);
    return state
}


export default connect(mapStateTo,null)(List)