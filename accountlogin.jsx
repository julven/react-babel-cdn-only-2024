

let AccountLogin = () => {
    const { useContext } = React;
const { useNavigate } = ReactRouter;
    let { setLogged, prevLink } = useContext(AccountContext);
    let navigate = useNavigate()
    let login = () => {
        setLogged(true)
        navigate(prevLink)      
    }
    return (
        <>
            Click button to login.
            <br />
            <button onClick={() => login()}>Login</button>
        </>
    )
}
