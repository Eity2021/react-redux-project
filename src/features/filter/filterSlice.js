import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tags:[],
    search:'',
}


// export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
//     const video = await getVideo(id);
//     return video
// })



const filterSlice =  createSlice ({

    name:'video',
    initialState,
    reducers: {
        tagSelected:(state,action) =>{
         
            state.tags.push(action.payload);
            
        },
        
        
        tagRemoved:(state,action) =>{

          const indexToRemove = state.tags.indexOf(action.payload);

          if(indexToRemove !== -1){
            state.tags.splice(indexToRemove, 1)
          }

        },
        searched:(state,action) => {
            state.search = action.payload
        }
    }

})

export default filterSlice.reducer;
export const {tagSelected,tagRemoved,searched} = filterSlice.actions;