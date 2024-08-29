
let Account = () => {
    const { useContext } = React;
const { useNavigate } = ReactRouter;
    let { account, setLogged } = useContext(AccountContext)
    let navigate = useNavigate()
    let goTo = () => {
        navigate("/account/edit")
    }
    return (
        <>
            <h1>Account</h1>
            <table>
                <tbody>
                    <tr>
                    </tr>
                    <tr>
                        <th>First Name</th>
                        <td>{account.fname}</td>
                    </tr>
                    <tr>
                        <th>Last Name</th>
                        <td>{account.lname}</td>
                    </tr>
                    <tr>
                        <th>Birthday</th>
                        <td>{account.bday}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{account.gender}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => { goTo() }}>Edit</button>
            <button onClick={() => { setLogged(false) }}>Logout</button>
        </>
    )
}
