import { useSelector } from "react-redux"
import { selectAccessToken, selectUser } from "../redux/slices/userSlice"

export const useIsAuthenticated = () => {
    const access = useSelector(selectAccessToken)
    return !!access
}