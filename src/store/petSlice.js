import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ConnectionAPI } from "../services/connectionAPI";

export const createPet = createAsyncThunk(
    'createPet',
    (data) => ConnectionAPI.createPet(data)
)
export const findPetById = createAsyncThunk(
    'findPerById',
    (petId) => ConnectionAPI.findPetById(petId)
)
export const findPetAll = createAsyncThunk(
    'findPetAll',
    ConnectionAPI.findPetAll()
)

const petSlice = createSlice({
    name: 'pet',
    initialState: {
        pet: JSON.parse(window.localStorage.getItem('pet'))||null,
        createPetState: {
            message: '',
            status: ''
        },
        findPetByIdState: {
            message: '',
            status: ''
        },
        findPetAllState: {
            message: '',
            status: ''
        }
    },
    reducers: {
        resetServiceMethodsMessage(state, action) {
            state[action.payload].message = '';
            state[action.payload].status = '';
        },
    },
    extraReducers: (builder) => {
        builder 
        .addCase(createPet.fulfilled, (state, action) => {
            console.log("createPet", action.payload)
            const {message, status} = action.payload
            state.createPetState = {
                message,
                status
            }
        })
        .addCase(findPetById.fulfilled, (state, action) => {
            console.log("findpet", action.payload)
            const {message,status} = action.payload
            state.findPetByIdState = {
                message,
                status
            }
            if (status === 'Failed') state.pet = null;
            if (status === 'Ok') {
            window.localStorage.setItem(
                'pet',
                JSON.stringify(action.payload.data)
            )
            }
            state.pet = action.payload.data
        })
        .addCase(findPetAll.fulfilled, (state, action) => {
            console.log("findpetAll", action.payload)
            const {message,status} = action.payload
            state.findPetAllState = {
                message,
                status
            }
            if (status === 'Failed') state.pet = null;
            if (status === 'Ok') {
            window.localStorage.setItem(
                'pet',
                JSON.stringify(action.payload.data)
            )
            }
            state.pet = action.payload.data
        })
    }
})

export const {resetServiceMethodsMessage} = petSlice.actions

export const selectPet = (state) => state.pet.pet
export const selectCreatePetState = (state) => state.pet.createPetState
export const selectFindPetByIdState = (state) => state.pet.findPetByIdState
export const selectFindPetAll = (state) => state.pet.findPetAllState

export default petSlice.reducer