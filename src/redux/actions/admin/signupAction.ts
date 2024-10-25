import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { config } from "../../../common/configuration";
import { api_client } from "../../../axios";
import { admin } from "../../../common/endPoint";

export const signupAction = createAsyncThunk( 
    'user/signup-user',
    async ( data : any,{ rejectWithValue }) => {
        try {

            console.log('its from sighnup data',data);
            
            const response = await api_client.post(`${admin}signup`,
            data,
            config
            )
            console.log('this is signup response', response)
            if(response.data.success) {

                return response.data ;

            } else {
                return rejectWithValue(response.data)
            }
        } catch ( error : any ) {
            const e : any = error as AxiosError;

            throw new Error(
                e.response?.data.error || e.response?.data.message || e.message
            );
            
        }
    }
)