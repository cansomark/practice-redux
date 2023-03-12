import React,{Component} from "react";
import { connect } from "react-redux";
import { filterById, changeDescription,changeTitle, updateData, fetchData } from "../store";
class DetailAnime extends Component {
    constructor(props) {
        super(props);
        this.state={
            animeDetails:[]
        }
    }
    componentDidMount(){      
        this.props.dispatch(filterById(parseInt(this.props.animeId)))
    }

    handelChange(e){
        const {name, value}=e.target;
       
        switch(name) {
            case "title":
                this.props.dispatch(changeTitle(value))
                break;
            case "description":
                this.props.dispatch(changeDescription(value))
                break;
            default:
                break;
        }
    }

    handelUpdate(){
        const {title,description,animeId}=this.props;
        this.props.dispatch(updateData(animeId,{
            title,
            description
        }));
     
        this.props.showMain(false)
       
        
    }
    render(){
      
        return(
            <div>
               <input type="text" name="title" value={this.props.title} onChange={(e)=>this.handelChange(e)}/>
                <textarea type='text' name="description" value={this.props.description} onChange={(e)=>this.handelChange(e)}/>                    
                <button onClick={this.handelUpdate.bind(this)}>Update</button>
            </div>
        )
    }
}
const mapsStateToProps=(state)=>({
    title:state.anime.title,
    description:state.anime.description,
    isLoading:state.anime.isLoading
    
});

const mapsDispatchToProps=(dispatch)=>({
    dispatch
})
export default connect(mapsStateToProps, mapsDispatchToProps)(DetailAnime);