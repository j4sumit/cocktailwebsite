import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchCocktails = createAsyncThunk("cocktails/fetchCocktails", async ()=>{
   return fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=").then(res => res.json());
});

const cocktailSlice =createSlice({
    name:"cocktails",
    initialState:{
        loading:false,
        cocktails:[],
        error:null,
        cocktail:[]
    },
    extraReducer:{
        [fetchCocktails.pending]:(state,action) =>{
            state.loading = true
        },
        [fetchCocktails.fulfilled]:(state,action)=>{
            state.loading = false;
            state.cocktails=action.payload.drinks
        },
        [fetchCocktails.rejected]:(state, action)=>{
            state.loading=false;
            state.error=action.payload
        }
    }
})
export default cocktailSlice.reducer;