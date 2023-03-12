import React,{ Component } from "react";
import { connect } from "react-redux";
import { fetchData, deleteData } from "../store";
import AddAnime  from "./addAnime";
import DetailAnime from "./detailAnime";
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showDetail:false,
      animeId:0,
      loading:false,
      error:null
    }
  }

  onSaveHandel(value){
    this.setState({onSave:value})
  }

  componentDidMount(){
    this.props.dispatch(fetchData())    
  }

  handelShowDetail(e){
    this.setState({showDetail:true})
    this.setState({animeId:e.target.id})
  }
  showMainPage(value){
    this.setState({showDetail:value})
  }
  async deleteRecord(e){
    e.stopPropagation();
    await this.props.dispatch(deleteData(e.target.dataset.id)) 
    await this.props.dispatch(fetchData()); 
   
  }
  render(){
    if(this.props.isLoading) {
      return <p>Loading...</p>
    }
    if(this.props.error) {
      return <p>Something went wrong</p>
    }
    return(
      <div>
        {
            this.state.showDetail ?
                <DetailAnime animeId={this.state.animeId} showMain={this.showMainPage.bind(this)}/>
            :
            <>
                <AddAnime />
                <ul>
                    {this.props.animeList.map((anime)=>
                        <li key={anime.id} id={anime.id} onClick={this.handelShowDetail.bind(this)}>{anime.title} 
                        <button data-id={anime.id} onClick={(e)=>{this.deleteRecord(e)}}>Delete</button></li>
                    )}
                </ul>
            </>
        }
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  animeList:state.anime.animeList,
  isLoading:state.anime.isLoading,
  error: state.anime.error
})

const mapDispatchToProps=(dispatch)=>({
  dispatch
})

export default connect(mapStateToProps,mapDispatchToProps)(App);