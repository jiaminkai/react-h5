import React from "react"
class List extends React.Component{
    constructor(props){
        super(props)
        this.state={age:19}
    }
    render(){
        return(
            <div>我是List页面</div>
        )
    }
}

export default List