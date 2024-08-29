
let AccountEdit = () => {

    const { useContext, useEffect, useState } = React;
const { useNavigate } = ReactRouter;

    let { account, fieldCheck, setAccount } = useContext(AccountContext)
    let [info, setInfo] = useState({ fname: "", lname: "", gender: "", bday: "" })
    let navigate = useNavigate()
    useEffect(() => {
        setInfo({ ...account })
    }, [])
    let handleChange = (field, value) => {
        setInfo({ ...info, [field]: value })
    }
    let handleSubmit = () => {
        let valid = fieldCheck(info)
        if (valid) {
            setAccount({ ...info })
            alert("Account updated")
            navigate(-1)
        }
        else alert("All fields must not be empty")
    }
    return (
        <>
            <h1>Edit Account</h1>
            First name
            <br />
            <input value={info.fname} onChange={(e) => { handleChange("fname", e.target.value) }} />
            <br />
            Last name
            <br />
            <input value={info.lname} onChange={(e) => { handleChange("lname", e.target.value) }} />
            <br />
            Birthday
            <br />
            <input type="date" value={info.bday} onChange={(e) => { handleChange("bday", e.target.value) }} />
            <br />
            Gender
            <br />
            <input type="radio" value="female" checked={info.gender === "female"} onChange={(e) => { handleChange("gender", e.target.value) }} />
            Female
            <input type="radio" value="male" checked={info.gender === "male"} onChange={(e) => { handleChange("gender", e.target.value) }} />
            Male
            <br />
            <input type="submit" value="update" onClick={handleSubmit} />
            <button onClick={() => { navigate(-1) }}>back</button>
        </>
    )
}
