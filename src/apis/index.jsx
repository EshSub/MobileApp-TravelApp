import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { BACKEND_URL } from "../helpers/constants"
import { useSelector } from "react-redux"
import { getUser } from "../redux/selectors"
import { useMutation, useQuery } from "@tanstack/react-query"
import { selectAccessToken } from "../redux/slices/userSlice"
import authAxios from "./axios"

export const useDataProvider = () => {

    return {
        "places": {
            "get": () => useQuery({
                queryKey: ["places"], queryFn: async () => {
                    const response = await axios.get(
                        `${BACKEND_URL}/place/`,
                    );
                    return response.data;
                }
            })
        },
        "activities": {
            "get": () => useQuery({
                queryKey: ["activity"], queryFn: async () => {
                    const response = await axios.get(
                        `${BACKEND_URL}/activity/`,
                    );
                    return response.data;
                }
            })
        },
        "placeactivity": {
            "get": () => useQuery({
                queryKey: ["placeactivity"], queryFn: async () => {
                    const response = await axios.get(
                        `${BACKEND_URL}/placectivity/`,
                    );
                    return response.data;
                }
            })
        },
        "auth": {
            "login": () => useMutation({
                mutationFn: ({username, password}) => {
                    console.log({ username, password })
                    return axios.post(`${BACKEND_URL}/api/token/`, { username, password })
                }
            })
        },
        "aiPlanner": {
            "plan": () => useMutation({
                mutationFn: ({duration, description, preferred_activities}) => {
                    return authAxios.post(`${BACKEND_URL}/plan/`, { "input_data" : {duration, description, preferred_activities} },)
                }
            })
        }
    }
}


// message: {
//     post: useMutation(`${BACKEND_URL}/message/`),
//   //   get: (params) => useQuery(`${BACKEND_URL}/message/`, params),
//   },
//   conversation: {
//     post: useMutation(`${BACKEND_URL}/conversation/`),
//     get: useQuery(`${BACKEND_URL}/conversation/`),