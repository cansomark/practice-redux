import { createSlice } from "@reduxjs/toolkit";
import * as actions from "../actions/animeActon";

function resetValues(state){
    state.title="";
    state.description="";
    state.isLoading=false;
}

const animeSlice=createSlice({
    name:"anime",
    initialState:{
        title:"",
        description:"",
        animeList:[],
        isLoading:false,
        error:null,
    },
    reducers:{
        changeTitle(state,action) {
            state.title=action.payload
        },
        changeDescription(state,action) {
            state.description=action.payload
        },
        changeIsLoading(state,action) {
            state.description=action.payload
        },
        getRequest(state,action) {
            state.isLoading=true
        },
        filterById(state,action){
            const filterData= state.animeList.filter(anime=>anime.id===action.payload)
            if(filterData.length > 0)
            {
                state.title=filterData[0].title;
                state.description=filterData[0].description;
            }else{
                resetValues(state)
            }
        },
        getAnimeList(state,action) {           
            state.animeList=action.payload
            state.isLoading=false
        },
        getError(state,action) {
            state.error=action.payload
            state.isLoading=false
        },
        updateAnime(state,action){
            const index = state.animeList.findIndex((anime) => anime.id === action.payload.id);
            if (index !== -1) {
                state.animeList[index] = action.payload;
            }
            resetValues(state)
           
        },
        postAnime(state,action){
            state.animeList.push(action.payload)
            resetValues(state)
        },
        removeAnime(state,action){ 
            state.animeList=state.animeList.filter(anime=>anime.id!==action.payload.id)
            resetValues(state)
        }
    }
})

export const {getAnimeList, getRequest, getError, postAnime, changeDescription,changeTitle, filterById, updateAnime, removeAnime}=animeSlice.actions;
export const anime=animeSlice.reducer;
