
let NavBar = () => {

    const { Link, Navigate, Outlet, Route, Routes, useLocation } = ReactRouterDOM,
    { useContext } = React;
    // let {AccountContext} = context;
    let {logged} = useContext(AccountContext);
    let NavGuard = () => {
        return (logged? <Outlet/> :<Navigate to="/account/login"/>)
    }
    let AccountLogged = ({children}) => {
        return (logged? <Navigate to="/account" replace/> : <>{children}</>)
    }
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/list">List</Link></li>
                <li><Link to="/account">Account</Link></li>
            </ul>
            {/* <Outlet/> */}
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/list">
                    <Route index element={<List />} />
                    <Route path=":search" element={<List />} />
                    <Route path="view/:id" element={<ListView />} />
                    <Route element={<NavGuard />}>
                        <Route path="add" element={<ListAdd />} />
                        <Route path="edit/:id" element={<ListEdit />} />
                    </Route>
                </Route>
                <Route exact path="/account">
                    <Route path='login' element={<AccountLogged><AccountLogin /></AccountLogged>} />
                    <Route element={<NavGuard />}>
                        <Route index element={<Account />} />
                        <Route path="edit" element={<AccountEdit />} />
                    </Route>
                </Route>
                <Route path="*" element={<div>Page not found</div>} />
            </Routes>
        </>
    )
}
