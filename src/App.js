import React, { Component } from 'react'
import Content from './Content'
import Sider from './Sider'
export default class App extends Component {
    state={
        users:[],
        selectUsered:``,
        message:[],
    }
    inputChange=(lastname,name,phone)=>{

        const a=this.state.users
        a.push({id:this.state.users.length,lastname,name,phone})
        this.setState({
            users:a
        })
        localStorage.setItem("users",JSON.stringify(a))
    }

    selectUser=(item)=>{
        this.setState({
            selectUsered:item
        })
        localStorage.setItem("item",JSON.stringify(item))
    }

    sendMessage=(from,to,text)=>{
        let date= new Date()
        let message={
            from:from,
            to:to,
            text:text,
            date:date.getHours()+`:`+date.getMinutes()
        }
        let a=this.state.message
        a.push(message)
        this.setState({
            message:a
        })
        localStorage.setItem("message",JSON.stringify(a))
    }

    componentDidMount(){
        let us=localStorage.getItem("users")
        let get=JSON.parse(us)
        if(us){
            this.setState({
                users:get
            })
        }
        let select=localStorage.getItem("item")
        let getSelect=JSON.parse(select)
        if(select){
            this.setState({
                selectUsered:getSelect
            })
        }
        let mes=localStorage.getItem("message")
        let getmes=JSON.parse(mes)
        if(mes){
            this.setState({
                message:getmes
            })
        }
         
    }

    render() {
        const {users,selectUsered,message}=this.state
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3 parent-sider">
                            <Sider selectUsered={selectUsered} selectUser={this.selectUser} users={users} inputChange={this.inputChange} />
                        </div>
                        <div className="col-9">
                            <Content message={message} sendMessage={this.sendMessage} selectUsered={selectUsered} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}





































// import React, { Component } from 'react'
// import Sider from './Sider'
// import Content from './Content'
// import "./App.css"

// export default class App extends Component {
//     state = {
//         users: [],
//         str: "",
//         messages: [],
//         history:[]

//     }

//     AddUser = (firstname, lastname, phone) => {
//         let a = this.state.users
//         a.push({ id: a.length, firstname: firstname, lastname: lastname, phone: phone })
//         this.setState({
//             users: a
//         })
//         localStorage.setItem("users", JSON.stringify(a))
//     }

//     select = (users) => {
//         this.setState({
//             str: users
            
//         })
        
//         localStorage.setItem("str", JSON.stringify(users))
        

//         this.getMessagesHistory(users)

//     }

//     getMessagesHistory = (users) => {
//         let a = localStorage.getItem("messages")
//         let messages = JSON.parse(a)
//         if(messages){
//             let history=messages.filter(item => item.from === 3 && item.to === users.id || item.from === users.id && item.to === 3)
//             this.setState({
//                 history
//             })
//         }


//     }


//     sendMessages = (fromId, toId, text) => {
//         let date = new Date();
//         let messages = {
//             from: fromId,
//             to: toId,
//             text: text,
//             date: date.getHours() + `:` + date.getMinutes()
//         }
//         let a = this.state.messages
//         a.push(messages)
//         this.setState({
//             messages: a,
            
//         })
//         localStorage.setItem("messages", JSON.stringify(a))
//         this.getMessagesHistory(this.state.users.filter(item=>item.id===toId)[0])
//     }

//     componentDidMount() {
//         let users = localStorage.getItem("users")
//         if (users) {
//             let get = JSON.parse(users)
//             this.setState({
//                 users: get
//             })
//         }
//         let str = localStorage.getItem("str")
//         if (str) {
//             let a = JSON.parse(str)
//             this.setState({
//                 str: a
//             })
//             this.getMessagesHistory(a)
//         }
//         let messages = localStorage.getItem("messages")
//         if (messages) {
//             let a = JSON.parse(messages)
//             this.setState({
//                 messages: a
//             })
//         }
//     }




//     render() {
//         const { str, history } = this.state
//         return (
//             <div>
//                 <div className="container-fluid">
//                     <div className="row">
//                         <div className="col-3 parent-sider">
//                             <Sider select={this.select} users={this.state.users} AddUser={this.AddUser} str={str} />
//                         </div>
//                         <div className="col-9 parent-content m-0">
//                             <Content history={history} str={str} sendMessages={this.sendMessages} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
