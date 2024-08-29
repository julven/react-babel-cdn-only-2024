

let List = () => {

	const { useEffect, useState } = React,
	 { useSelector, useDispatch } = ReactRedux,
	 { Link, useNavigate, useParams } = ReactRouterDOM;

    let navigate = useNavigate();
    let param = useParams()
    let copy = useSelector(state => state.list.value)
    const [list, setList] = useState([])
    const [search, setSearch] = useState("")
    let dispatch = useDispatch()
    useEffect(() => {
        // console.log(param)
        if(param.search) {
            setList(copy.filter(x =>  x.fname.includes(param.search) || x.lname.includes(param.search)))
            setSearch(param.search)
        }
        else setList([...copy])
    }, [])
    let goTo = () => {
        dispatch(resetPerson())
        navigate("/list/add")
    }
    let filterList = () => {
        if(search !== "") {      
            setList(copy.filter(x =>  x.fname.includes(search) || x.lname.includes(search)))
            navigate("/list/"+search)  
        }
        else {
           resetSearch()
        }   
    }
    let resetSearch = () => {
        setSearch("")
        setList([...copy])
        navigate("/list")  
    }
    return (
        <>
            <h1>List</h1>
            Search <input type="text" value={search} onChange={e => setSearch(e.target.value)}/>
            {search != "" && <button onClick={() =>resetSearch()}>x</button>}
            <button onClick={filterList}>find</button> <br/>
            <button onClick={() => goTo()}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>ID </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(x => {
                            
                            return (
                                <tr key={x.id}>
                                    <td>{x.fname}</td>
                                    <td>{x.lname}</td>
                                    <td>{x.id}</td>
                                    <td>
                                        <Link to={"/list/view/" + x.id}>View</Link>
                                    </td>
                                </tr>
                            )
                        
                           
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
// export default List;