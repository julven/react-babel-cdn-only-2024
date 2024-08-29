
let ListView = () => {

    const { useEffect, useState } = React;
const { useDispatch, useSelector } = ReactRedux;
const { useNavigate, useParams } = ReactRouter;

    let [person, setPerson] = useState({})
    let param = useParams();
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let thePerson = useSelector(state => state.list.value).find(x => x.id === param.id)
    useEffect( () => {
        if(thePerson) setPerson(thePerson)
        else navigate("/list")
    }, [])
    let edit = id => {
        navigate("/list/edit/"+id)
    }
    let deletePerson = (id) => {
        let conf = window.confirm("Delete this person?")
        if(conf) {
            dispatch(deletesList(id))
            alert("person deleted")
            navigate("/list")
        }   
   }
    return (
        <>
            <h1>List View</h1>
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>{person.id}</td>
                    </tr>
                    <tr>
                        <th>First Name</th>
                        <td>{person.fname}</td>
                    </tr>
                    <tr>
                        <th>Last Name</th>
                        <td>{person.lname}</td>
                    </tr>
                    <tr>
                        <th>Birthday</th>
                        <td>{person.bday}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{person.gender}</td>
                    </tr>  
                </tbody>
            </table>
            <button onClick={() => edit(person.id)}>Edit</button>
            <button onClick={() => deletePerson(person.id)}>Delete</button>
            <button onClick={() => navigate(-1)}>back</button>
        </>
    )
}
// export default ListView;