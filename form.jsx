

let Form = () => {
    const { useDispatch, useSelector } = ReactRedux

    let person = useSelector(state => state.person).value;
    let dispatch = useDispatch();
    let handleValueChange = (field, value) => {
        dispatch(updatePerson({ ...person, [field]: value }))
    }
    return (
        <>
            First name
            <br />
            <input onChange={e => handleValueChange("fname", e.target.value)} value={person.fname} />
            <br />
            Last name
            <br />
            <input onChange={e => handleValueChange("lname", e.target.value)} value={person.lname} />
            <br />
            Birthday
            <br />
            <input type="date" onChange={e => handleValueChange("bday", e.target.value)} value={person.bday} />
            <br />
            Gender
            <br />
            <input type="radio" name='gender' onChange={e => handleValueChange("gender", "female")} checked={person.gender === "female"} />
            Female
            <input type="radio" name='gender' onChange={e => handleValueChange("gender", "male")} checked={person.gender === "male"} />
            Male
            <br />
        </>
    )
}
