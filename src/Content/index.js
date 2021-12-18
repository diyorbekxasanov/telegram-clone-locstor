import React, { Component } from 'react'
import "./index.css"
export default class Content extends Component {
    state={
        input:``
    }
    inputChange=(ev)=>{
        this.setState({
            input:ev.target.value
        })
    }
    sendMessage=()=>{
        let from=3
        let to=this.props.selectUsered.id
        let text=this.state.input
        this.props.sendMessage(from,to,text)
        this.setState({
            input:``
        })

    }

    render() {
        const { selectUsered,message } = this.props
        // console.log(selectUsered)
        
        return (
            <div>
                {
                    selectUsered?
                    <div className="card">
                        <div className="card-header">
                            {
                                <h3> {selectUsered.lastname} {selectUsered.name} <span className={"float-end"}>{selectUsered.phone}</span></h3>
                            }
                        </div>
                        <div className="card-body heig">
                            {
                                message.filter(item=>item.from===3 && item.to===selectUsered.id || item.from===selectUsered.id && item.to===3)
                                .map((item,index)=>
                                    <div className="row mb-2" key={index}>
                                        <div className={`col-md-5 mes ${item.from===3?"offset-7":""}`}>
                                            <p className={"mb-0"}> {item.text} <span className={"float-end"}>{item.date}</span></p>
                                        </div>
                                    </div>
                                )
                                
                            }
                        </div>
                        <div className="card-footer">
                            <div className="input-group">
                                <input type="text" className={"form-control"} value={this.state.input} onChange={this.inputChange} />
                                <button className={"btn btn-success"} onClick={this.sendMessage}>send</button>
                            </div>
                        </div>
                    </div>:``
                }
            </div>
        )
    }
}
























// import React, { Component } from 'react'


// import "./index.css"

// export default class Content extends Component {
//     state = {
//         inputValue: ``
//     }

//     inputChangeValue = (event) => {
//         this.setState({
//             inputValue: event.target.value

//         })
//     }
//     sendMessages = () => {
//         let from = 3
//         let to = this.props.str.id
//         let text = this.state.inputValue
//         this.props.sendMessages(from, to, text)
//         this.setState({
//             inputValue:``
//         })
//     }
//     render() {
//         const { str, history } = this.props
//         const { inputValue } = this.state
//         return (
//             <div>
//                 {
//                     str ?
//                         <div className="content">
//                             <div className="row pe-3 ps-3">
//                                 <div className="col-12 ">
//                                     <div className="card">
//                                         <div className="card-header d-flex justify-content-between content-header">
//                                             <h3> {`${str.firstname}  ${str.lastname}`} </h3>
//                                             <h3> {`${str.phone}`} </h3>
//                                         </div>
//                                         <div className="card-body heigh">

//                                             {console.log(history)}
//                                             {
//                                                 history.map((item, index) =>
//                                                     <div className="row " key={index}>
//                                                         <div className={`col-md-5 ${item.from===3? "offset-7":""} `}>
//                                                             <p>{item.text} <span className={"float-end"}>{item.date} </span> </p>
//                                                         </div>
//                                                     </div>
//                                                 )
//                                             }
//                                         </div>
//                                         <div className="card-footer">
//                                             <div className="input-group">
//                                                 <input type="text" className={"form-control"} value={inputValue} onChange={this.inputChangeValue} aria-describedby="button-addon2" />
//                                                 <button className={"btn btn-success"} onClick={this.sendMessages} id="button-addon2" >Send</button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div> :
//                         ``
//                 }
//             </div>
//         )
//     }
// }
