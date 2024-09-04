import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { BACKEND_URL } from "../helpers/constants";
import { useSelector } from "react-redux";
import { getUser } from "../redux/selectors";
import authAxios from "./axios";

const useQuery = (endpoint) => {
  return () => {
    // console.log({ params });
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const user = useSelector(getUser);
    const initial = useRef(true);
    useEffect(() => {
      if (initial.current || true) {
        initial.current = false;
        authAxios
          .get(endpoint)
          .then((res) => {
            setData(res.data);
            setLoading(false);
          })
          .catch((e) => {
            console.error(e);
          });
      }
    }, []);

    return { data, loading };
  };
};

const useMutation = (endpoint) => {
  return (data) => {
    console.log("endpoint");
    return authAxios.post(endpoint, data);
  };
};

export const useDataProvider = () => {
  return {
    places: {
      get: useQuery(`${BACKEND_URL}/place/`),
      post: useMutation(`${BACKEND_URL}/place/`),
    },
    activities: {
      get: useQuery(`${BACKEND_URL}/activity/`),
    },
    placeactivity: {
      get: useQuery(`${BACKEND_URL}/placeactivity/`),
    },
    message: {
      post: useMutation(`${BACKEND_URL}/message/`),
    //   get: (params) => useQuery(`${BACKEND_URL}/message/`, params),
    },
    conversation: {
      post: useMutation(`${BACKEND_URL}/conversation/`),
      get: useQuery(`${BACKEND_URL}/conversation/`),
    },
  };
};
