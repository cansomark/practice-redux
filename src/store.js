import { configureStore } from "@reduxjs/toolkit"
import { anime, postAnime, changeDescription, changeTitle, filterById } from "./slice/animeSlice";
import { fetchData, postData, updateData, deleteData } from "./actions/actionCreator";
import animeMid from "./middleware/animeMid";
const store=configureStore({
    reducer:{
        anime,
    },
    middleware:[animeMid]
})

export {store, fetchData, postAnime, changeDescription, changeTitle, postData, filterById, updateData, deleteData};