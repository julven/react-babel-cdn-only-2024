
let AccountContext = React.createContext();
let AccountContextProvider = ({ children }) => {
    const { createContext, useEffect, useState} = React;

    const { useLocation } = ReactRouterDOM;
    let [account, setAccount] = useState({
        fname: "julven",
        lname: "condor",
        bday: "1990-07-07",
        gender: "male"
    })
    let location = useLocation();
    let [logged, setLogged] = useState(false);
    let [prevLink, setPrevLink] = useState("/")
    useEffect(() => {
        // console.log(location.pathname)
        if(!location.pathname.includes("login")) setPrevLink(location.pathname)
    }, [location])
    let fieldCheck = (data) => {
        let valid = true;
        Object.keys(data).forEach((x, i) => {
            if (!data[x]) valid = false;
        });
        if (!valid) return false;
        return true;
    }
    return (
        <AccountContext.Provider value={{ account, setAccount, fieldCheck, logged, setLogged, prevLink, setPrevLink }}>
            {children}
        </AccountContext.Provider>
    )
}
