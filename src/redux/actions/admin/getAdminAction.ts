import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { api_client } from "../../../axios";
import { admin } from "../../../common/endPoint";

export const getAdminAction = createAsyncThunk(
    'user/findUser',
    async (data: { email: string }, { rejectWithValue }) => {
        try {
            console.log('Data from signup:', data);
            
            
            const { email } = data; 
            
            const response = await api_client.get(`${admin}getAdmin/${email}`, {
                
            });
            
            console.log('getAdmin response:', response);

            if (response.data.status) {
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
