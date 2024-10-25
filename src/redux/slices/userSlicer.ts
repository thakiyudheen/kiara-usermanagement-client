import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signupAction } from '../actions/admin/signupAction';
import { loginAction } from '../actions/admin/loginAction';
import { getUserAction } from '../actions/admin/getUserAction';
// import { getUserDataAction } from '../actions/auth/getUserDataAction';
// import { logoutAction } from '../actions/auth/logoutAction';
// import { loginUserAction } from '../actions/auth/loginUserAction';

export interface UserState {
    loading: boolean;
    data: any | null;
    error: string | null;
    
}

const initialState: UserState = {
    loading: false,
    data: null,
    error: null,
   
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        storeUserData: (state: UserState, action: PayloadAction<any>) => {
            state.data = action.payload;
        }
    },
    extraReducers(builder) {
        builder
        // signup action
        .addCase(signupAction.pending , (state: UserState) =>{
            state.loading = true;
            state.error = null;
        })
        .addCase(signupAction.fulfilled , (state: UserState , action: PayloadAction<any>) =>{
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        })
        .addCase(signupAction.rejected, (state: UserState, action) =>{
            state.loading = true; 
            state.data = null;
            state.error = action.error.message || 'Signup failed';
        })
        // getUser action
        .addCase(getUserAction.pending , (state: UserState) =>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getUserAction.fulfilled , (state: UserState , action: PayloadAction<any>) =>{
            state.loading = false;
            console.log('data form stoer',action.payload);
            
            state.data = action.payload.data[0];
            state.error = null;
        })
        .addCase(getUserAction.rejected, (state: UserState, action:any) =>{
            state.loading = true; 
            state.data = null;
            state.error = action.error.message || 'failed';
        })

       
        // logout action
        // .addCase(logoutAction.pending , (state: UserState) =>{
        //     state.loading = true;
        //     state.error = null;
        // })
        // .addCase(logoutAction.fulfilled , (state: UserState) =>{
        //     state.loading = false;
        //     state.data = null;
        //     state.error = null;
        // })
        // .addCase(logoutAction.rejected, (state: UserState, action) =>{
        //     state.loading = true; 
        //     state.data = null;
        //     state.error = action.error.message || 'Logout failed';
        // })
        // login action
        .addCase(loginAction.pending , (state: UserState) =>{
            state.loading = true;
            state.error = null;
        })
        .addCase(loginAction.fulfilled , (state: UserState , action: PayloadAction<any>) =>{
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        })
        .addCase(loginAction.rejected, (state: UserState , action) =>{
            state.loading = true; 
            state.data = null;
            state.error = action.error.message || 'Login failed';
        });
    },
});

export const { storeUserData } = userSlice.actions;

export const userReducer = userSlice.reducer;
