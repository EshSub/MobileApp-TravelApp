import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { BACKEND_URL } from "../helpers/constants"
import { useSelector } from "react-redux"
import { getUser } from "../redux/selectors"
import { useMutation, useQuery } from "@tanstack/react-query"

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
        }
    }
}