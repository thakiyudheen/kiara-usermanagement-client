import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { api_client } from "../../../axios";
import { admin } from "../../../common/endPoint";
import { config } from "../../../common/configuration";

export const getUserAction = createAsyncThunk(
    'user/getUser',
    async (_, { rejectWithValue }) => {
        try {   
            const response = await api_client.get(`${admin}getUser`,config);
            
            console.log('getUser response:', response);

            if (response.data.success) {
                return response.data; 
            } else {
                return rejectWithValue(response.data); 
            }
        } catch (error: any) {
            const e : any = error as AxiosError;

            return rejectWithValue(
                e.response?.data.error || e.response?.data.message || e.message 
            );
        }
    }
);
