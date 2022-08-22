import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const searchParamsSlice = createSlice({
    name: 'searchParamsSlice',
    initialState: {
        searchParams: '',
    },
    reducers: {
        setSearchParams(state, action: PayloadAction<string>) {
            state.searchParams = action.payload;
        }
    }
});

export default searchParamsSlice.reducer;
export const {
    setSearchParams,
} = searchParamsSlice.actions;