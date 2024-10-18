import axios from "axios";
import { USER_API_END_POINT } from "../utils/constants";
import { useEffect } from "react";

const useGetProfile = (id) => {
    useEffect(() => {
        try {
            const res = axios.get(`${USER_API_END_POINT}/profile/${id}`,{
                withCredentials: true
            })
        } catch (error) {
          console.log(error);
        }
    }, [])
    
}
export default useGetProfile