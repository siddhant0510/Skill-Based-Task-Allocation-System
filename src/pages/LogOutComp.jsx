export default function LogOutComp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        //clear the redux state
        dispatch(logout());
        //navigate to home page
        navigate("/");
    }, []);

    return null;

}