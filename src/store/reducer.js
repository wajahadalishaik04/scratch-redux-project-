import { createReducer } from "@reduxjs/toolkit";
export const userReducer = createReducer({users:[]},(builder)=>
{
    builder.addCase("addUsers",(state,action)=>
    {
        state.users = action.payload;
    })
})
export const productReducer = createReducer({products:[]},(builder)=>
{
    builder.addCase("addProducts",(state,action)=>
    {
        state.products = action.payload;
    })
    
})
export const productCount = createReducer({count:0},(builder)=>
    {
        builder.addCase("countProducts",(state)=>
        {
            state.count = state.count+1;
        })
    })
    export const userCount = createReducer({CountCard:0},(builder)=>
        {
            builder.addCase("countUsers",(state)=>
            {
                state.CountCard = state.CountCard+1;
            })
        })