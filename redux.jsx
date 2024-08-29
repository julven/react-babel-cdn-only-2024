
const { configureStore, createSlice } = RTK;
let randId = () => Math.random().toString(36).substring(8);
let reduxList = {
    value: [
        { fname: "julven", lname: "condor", bday: "1990-07-07", gender: "male", id: randId() },
        { fname: "john", lname: "doe", bday: "2000-01-01", gender: "male", id: randId() },
        { fname: "jane", lname: "smith", bday: "2001-02-02", gender: "female", id: randId() },
    ]
}
let reduxPerson = {
    value: {
        fname: "", lname: "", bday: "", gender: "", id: ""
    }
}
const reduxListSlice = createSlice({
    name: "list",
    initialState: reduxList,
    reducers: {
        addList: (state, action) => {
            let person = { ...action.payload, id: randId() }
            state.value = [...state.value, person]
        },
        editList: (state, action) => {
            state.value.forEach((x, i) => {
                if (x.id === action.payload.value.id) {
                    state.value[i] = { ...action.payload.value };
                }
            })
        },
        deletesList: (state, action) => {
            state.value = state.value.filter(x => x.id !== action.payload)
        },
    }
})
let reduxPersonSlice = createSlice({
    name: "person",
    initialState: reduxPerson,
    reducers: {
        updatePerson: (state, action) => {
            state.value = action.payload
        },
        resetPerson: (state) => {
            state.value = reduxPerson.value
        }
    }
})
const { addList, editList, deletesList } = reduxListSlice.actions;
const { updatePerson, resetPerson } = reduxPersonSlice.actions;
const store = configureStore({
    reducer: {
        list: reduxListSlice.reducer,
        person: reduxPersonSlice.reducer
    }
})