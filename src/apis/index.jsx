import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { BACKEND_URL } from "../helpers/constants";
import { useSelector } from "react-redux";
import { getUser } from "../redux/selectors";
import { useMutation, useQuery } from "@tanstack/react-query";
import { selectAccessToken } from "../redux/slices/userSlice";
import authAxios from "./axios";

export const useDataProvider = () => {
  return {
    places: {
      get: () =>
        useQuery({
          queryKey: ["places"],
          queryFn: async () => {
            const response = await axios.get(`${BACKEND_URL}/place/`);
            return response.data;
          },
        }),
      getPlaceForPlan: (params) =>
        useQuery({
          queryKey: ["places"],
          cacheTime: 0,
          queryFn: async () => {
            console.log({ params });
            const response = await authAxios.get(`${BACKEND_URL}/place/get_places`, {
              params,
            });
            return response.data;
          },
        }),
    },
    activities: {
      get: () =>
        useQuery({
          queryKey: ["activity"],
          queryFn: async () => {
            const response = await axios.get(`${BACKEND_URL}/activity/`);
            return response.data;
          },
        }),
    },
    placeactivity: {
      get: () =>
        useQuery({
          queryKey: ["placeactivity"],
          queryFn: async () => {
            const response = await axios.get(`${BACKEND_URL}/placectivity/`);
            return response.data;
          },
        }),
    },
    auth: {
      login: () =>
        useMutation({
          mutationFn: ({ username, password }) => {
            return axios.post(`${BACKEND_URL}/api/token/`, {
              username,
              password,
            });
          },
        }),
    },
    aiPlanner: {
      plan: () =>
        useMutation({
          mutationFn: ({ duration, description, preferred_activities }) => {
            return authAxios.post(`${BACKEND_URL}/plan/`, {
              input_data: { duration, description, preferred_activities },
            });
          },
        }),
    },
    conversation: {
      get: () =>
        useQuery({
          queryKey: ["conversation"],
          queryFn: async () => {
            const response = await authAxios.get(
              `${BACKEND_URL}/conversation/`
            );
            return response.data;
          },
        }),
      post: () =>
        useMutation({
          mutationFn: () => {
            return authAxios.post(`${BACKEND_URL}/conversation/`, {});
          },
        }),
    },
    message: {
      get: () =>
        useQuery({
          queryKey: ["message"],
          queryFn: async () => {
            const response = await authAxios.get(`${BACKEND_URL}/message/`);
            return response.data;
          },
        }),
      post: () =>
        useMutation({
          mutationFn: ({ message, conversation_id }) => {
            return authAxios.post(`${BACKEND_URL}/message/`, {
              message,
              conversation_id,
            });
          },
        }),
    },
    district: {
        get: () =>
          useQuery({
            queryKey: ["district"],
            queryFn: async () => {
              const response = await axios.get(`${BACKEND_URL}/district/`);
              return response.data;
            },
          }),
    }
  };
};

// message: {
//     post: useMutation(`${BACKEND_URL}/message/`),
//   //   get: (params) => useQuery(`${BACKEND_URL}/message/`, params),
//   },
//   conversation: {
//     post: useMutation(`${BACKEND_URL}/conversation/`),
//     get: useQuery(`${BACKEND_URL}/conversation/`),
