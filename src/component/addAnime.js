import React, { Component, } from "react";
import { connect } from "react-redux";
import { postData, changeDescription, changeTitle } from "../store";
class AddAnime extends Component {
    constructor(props){
        super(props);
        this.state={

        };
        
    }
  
    handelSave(){
        const {title,description}=this.props
        this.props.onSave({title,description})
    }

    handelChangeFeild(events){
        const {name, value}=events.target;       
        switch(name){
            case "title":
                this.props.onChangeTitle(value)
                break;        
            case "description":
                this.props.onChangeDescription(value)
                break;            
            default:
                break;
        }
    }
  
    render(){
        return(
            <div>
                <label>
                    Title:
                </label>
                <input type="text" name="title" value={this.props.title} onChange={(e)=>this.handelChangeFeild(e)}/>
                <label>
                    Description:
                </label>
                <textarea type="text" name="description" value={this.props.description} onChange={(e)=>this.handelChangeFeild(e)} >
                   {this.props.description}
                </textarea>
                <button onClick={this.handelSave.bind(this)}>Add</button>
            </div>
            
        )
    }
}

const mapsStateToProps=(state)=>({
    title:state.anime.title,
    description:state.anime.description
})

const mapsDispatchToProps=(dispatch)=>({
    dispatch,
    onChangeTitle:(value)=>dispatch(changeTitle(value)),
    onChangeDescription:(value)=>dispatch(changeDescription(value)),
    onSave:({title,description})=>dispatch(postData({title,description}))
})

export default connect(mapsStateToProps,mapsDispatchToProps)(AddAnime);