import * as actions from "../actions/animeActon";
import axios from "axios";
const animeMid=({dispatch})=>next=>async action=>{
    if(action.type !== actions.ANIME_API.type) return next(action);
    const {url, data, method, onSuccess, onError, onStart}=action.payload;
    dispatch({type:onStart})
    next(action);
    try {
        const responce=await axios.request({
            baseURL:"http://localhost:4000",
            url,
            method,
            data,
            onSuccess,
            onError,
        })
        dispatch({type:onSuccess,payload:responce.data})
        console.log("success")
    }catch(error){
        dispatch({type:onError,payload:error})
        console.log("error")
    }
}

export default animeMid;