import React, { Component } from 'react'
import { Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap'

import "./index.css"
export default class Sider extends Component {
    state={
        visible:false
    }
    inToggle=()=>{
        console.log("salom")
        this.setState({
            visible:!this.state.visible
        })
    }
    inputChange=(ev)=>{
        ev.preventDefault()
        let lastname=ev.target[0].value
        let name=ev.target[1].value
        let phone=ev.target[2].value
        console.log(lastname)
        this.props.inputChange(lastname,name,phone)
        this.inToggle()
    }
    selectUser=(item)=>{
        this.props.selectUser(item)
    }
    
    render() {
        const {users,selectUsered}=this.props
        const{visible}=this.state
        return (
            <div>
                <div className={"d-grid mt-2"}>
                    <button className={"btn btn-dark "} onClick={this.inToggle}>Add User</button>
                </div>
                {
                    console.log(users)
                }
                <ul className={"list-group"}>
                    {
                        users.map((item,index)=>
                        <li className={`list-group-item sider-li ${selectUsered.id===item.id?"active":""}`} key={index} onClick={()=>this.selectUser(item)}>  {item.lastname} {item.name} </li>
                        )
                    }
                </ul>
                <Modal isOpen={visible} toggle={this.inToggle}>
                    <ModalHeader>
                        <h3 className={"text-center"}>User</h3>
                    </ModalHeader>
                    <ModalBody>
                        <form id="form" onSubmit={this.inputChange}>
                            Lastname:<input type="text" placeholder="lastname" className="form-control" required />
                            Name:<input type="text" placeholder="name" className="form-control" required />
                            Phone:<input type="text" placeholder="phone" className="form-control" required />
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <button className={"btn btn-success"} form="form">Save</button>
                        <button className={"btn btn-danger"} onClick={this.inToggle}>Cancel</button>
                    </ModalFooter>
                
                </Modal>    
            </div>
        )
    }
}




































// import React, { Component } from 'react'
// import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

// import "./index.css"

// export default class Sider extends Component {
//     state = {
//         visible: false
//     }
//     isToggle = () => {
//         this.setState({
//             visible: !this.state.visible
//         })
//     }
//     FormSave = (ev) => {
//         ev.preventDefault();
//         let firstname = ev.target[0].value
//         let lastname = ev.target[1].value
//         let phone = ev.target[2].value
//         this.props.AddUser(firstname, lastname, phone)
//         this.isToggle()
//     }

//     UserChange=(users)=>{
//         this.props.select(users)
//     }

//     render() {
//         const { visible } = this.state
//         const { users,str } = this.props
//         return (
//             <div>
//                 <div className="d-grid mt-2">
//                     <button className="btn btn-dark" onClick={this.isToggle}>sider</button>
//                 </div>
//                 <hr />
//                 <ul className={"list-group"}>
//                     {
//                         users.map((item, index) =>
//                             (<li key={index} className={`list-group-item sider-li ${str.id===item.id?"active":""} `} onClick={()=>this.UserChange(item)}> {item.firstname} {item.lastname}  </li>)
//                         )
//                     }

//                 </ul>
//                 <Modal isOpen={visible} toggle={this.isToggle}>
//                     <ModalHeader>
//                         <h3>User</h3>
//                     </ModalHeader>
//                     <ModalBody>
//                         <form onSubmit={this.FormSave} id="sub">
//                             FirstName<input type="text" className="form-control" required />
//                             LastName<input type="text" className="form-control" required />
//                             Phone<input type="text" className="form-control" required />
//                         </form>
//                     </ModalBody>
//                     <ModalFooter>
//                         <button className="btn btn-success" form={"sub"}>Save</button>
//                         <button className="btn btn-primary" onClick={this.isToggle}>Cancel</button>
//                     </ModalFooter>
//                 </Modal>
//             </div>
//         )
//     }
// }
