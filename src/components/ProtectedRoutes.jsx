import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoutes({ children, role }) {

    const loginstate = useSelector(state => state.auth);
    const navigate = useNavigate();

    //any user has logged in
    if (!loginstate.isAuthenticated) {
        return <Navigate to="/login" />
    }
    if (loginstate.user.role !== role) {
        return <Navigate to="/unauthorized" />
    }

    return children;
}