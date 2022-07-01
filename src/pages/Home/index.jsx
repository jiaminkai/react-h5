import { Link, Outlet } from "react-router-dom"
import { connect } from 'react-redux'
import NavBars from "@/components/NavBar/NavBar"
import Card from './components/card'
import './index.less'

let cardlist=[
    {
        title:'进销存',
        list:[
            {
                icon:'',
                name:'备货计划',
                path:''
            },
            {
                icon:'',
                name:'只能备货'
            },            {
                icon:'',
                name:'只能备货'
            },            {
                icon:'',
                name:'只能备货'
            },            {
                icon:'',
                name:'只能备货'
            },            {
                icon:'',
                name:'只能备货'
            }
        ]
    },
    {
        title:'财务',
        list:[
            {
                icon:'',
                name:'付款申请'
            },
            {
                icon:'',
                name:'付款申请'
            },            {
                icon:'',
                name:'付款申请'
            },            {
                icon:'',
                name:'付款申请'
            }
        ]
    },
    {
        title:'产品',
        list:[
            {
                icon:'',
                name:'品牌'
            },
            {
                icon:'',
                name:'产品'
            },            {
                icon:'',
                name:'只能备货'
            },            {
                icon:'',
                name:'只能备货'
            }
        ]
    },
    {
        title:'授权',
        list:[
            {
                icon:'',
                name:'只能备货'
            },
            {
                icon:'',
                name:'只能备货'
            },            {
                icon:'',
                name:'只能备货'
            },            {
                icon:'',
                name:'只能备货'
            },            {
                icon:'',
                name:'只能备货'
            }
        ]
    },
]

function handleClick(props) {
    console.log("Home:", props)
    props.SendStore('send_add')

}
function Home(props) {
    return (
        <>
            <NavBars right={false}  left={false} title={'75°ERP'}  sticky={true}>
                
            </NavBars>
            <div className="cardList pa-10">
                {cardlist.map(item => { return <Card key={item.title} list={item}></Card>})}
            </div>
            <Outlet />  
        </>
    )
}
const MapDispatch = (dispatch) => {
    return {
        SendStore: () => {
            dispatch({
                type: 'send_add'
            })
        }
    }
}
const setList = (stateProps, dispatchProps, ownProps) =>{
    return Object.assign( stateProps, dispatchProps, ownProps)
}
export default connect(null, MapDispatch,setList)(Home)