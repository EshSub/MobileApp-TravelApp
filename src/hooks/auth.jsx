import { useSelector } from "react-redux"
import { selectUser } from "../redux/slices/userSlice"

export const useIsAuthenticated = () => {
    const user = useSelector(selectUser)
    return !!user
}