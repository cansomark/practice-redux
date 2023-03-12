
import * as actions from "../actions/animeActon";
import { getAnimeList,getRequest,getError,postAnime,updateAnime, removeAnime } from "../slice/animeSlice";

//action
export const fetchData=()=>actions.ANIME_API({
    url:"/anime",
    method:"get",
    onSuccess:getAnimeList.type,
    onStart:getRequest.type,
    onError:getError.type
})

export const postData=(data)=>actions.ANIME_API({
    url:"/anime",
    method:"post",
    data:data,
    onSuccess:postAnime.type,
    onStart:getRequest.type,
    onError:getError.type
})

export const updateData=(id,data)=>actions.ANIME_API({
    url:`/anime/${id}`,
    method:"put",
    data:data,
    onSuccess:updateAnime.type,
    onStart:getRequest.type,
    onError:getError.type
})

export const deleteData=(id,data)=>actions.ANIME_API({
    url:`/anime/${id}`,
    method:"delete",
    data:data,
    params:id,
    onSuccess:removeAnime.type,
    onStart:getRequest.type,
    onError:getError.type
})