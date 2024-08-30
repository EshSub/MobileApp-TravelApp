import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { BACKEND_URL } from "../helpers/constants"
import { useSelector } from "react-redux"
import { getUser } from "../redux/selectors"

const useQuery = (endpoint) => {

    console.log("query builder")

    return () => {
        console.log("query inside")
        const [data, setData] = useState()
        const [loading, setLoading] = useState(true)
        const user = useSelector(getUser)
        const initial = useRef(true)
        useEffect(() => {
            console.log("query useeffect", initial.current)
            if (initial.current || true) {
                initial.current = false;
                axios.get(endpoint).then(res => {
                    console.log({res})
                    setData(res.data)
                    setLoading(false)
                }).catch(e => {
                    console.error(e)
                })
            }
        }, [])

        return { data, loading, }
    }
}

export const useDataProvider = () => {
    return {
        "places": {
            "get": useQuery(BACKEND_URL+'/place/')
        },
        "activities": {
            "get" : useQuery(`${BACKEND_URL}/activity/`)
        },
        "placeactivity": {
            "get" : useQuery(`${BACKEND_URL}/placeactivity/`)
        }
    }
}