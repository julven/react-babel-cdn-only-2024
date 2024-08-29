

let Home = () => {

    const { useContext } = React,
    { Link } = ReactRouterDOM,
    { useSelector } = ReactRedux;

    // let { AccountContext } = context;
    let { account } = useContext(AccountContext);
    let list = useSelector(state => state.list.value)
    return (
        <div>
            <h1>Home</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Summary</th>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>Account:</td>
                        <td><b>{account.fname} <Link to="/account">View</Link></b></td>
                    </tr>
                    <tr>
                        <td>List total:</td>
                        <td> <b>{list.length} <Link to="/list">View</Link></b></td>
                    </tr>
                    <tr>
                        <th>Version</th>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Created</td>
                        <td><b>Aug 2024</b></td>
                    </tr>
                     <tr>
                        <td>React /<br/> React DOM</td>
                        <td><b>18^</b></td>
                    </tr>
                    <tr>
                        <td>History</td>
                        <td><b>5^</b></td>
                    </tr>
                    <tr>
                        <td>React Router /<br/> React Router DOM</td>
                        <td><b>6.3.0</b></td>
                    </tr>
                    <tr>
                        <td>React Redux</td>
                        <td><b> 8^</b></td>
                    </tr>
                    <tr>
                        <td>Redux Toolkit</td>
                        <td><b>1^</b></td>
                    </tr>
                    <tr>
                        <td>Babel</td>
                        <td><b>7^</b></td>
                    </tr>
                  

                </tbody>
            </table>
        </div>
    )
}
// export default Home;
