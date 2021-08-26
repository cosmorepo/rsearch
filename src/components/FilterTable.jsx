import MockData from '../MOCK_DATA.json'
import './filtertable.css'
import {useState} from 'react'

function FilterTable() {

   const [search, setSearch] = useState("")

    return (
        <div className="container">
            <input 
                type="text" 
                placeholder="searh..." 
                className="form-control" 
                onChange = {(e)=> {
                    setSearch(e.target.value)
                }}
                
            />
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>first name</th>
                        <th>last name</th>
                        <th>email</th>
                        <th>gender</th>
                    </tr>
                </thead>
                <tbody>
                    {MockData.filter((val) => {
                        if(search === ""){
                           return val
                        }else if(
                           val.first_name.toLowerCase().includes(search.toLowerCase()) ||
                           val.last_name.toLowerCase().includes(search.toLowerCase()) ||
                           val.email.toLowerCase().includes(search.toLowerCase())
                        ){
                            return val
                        }
                        
                        
                    }).map(m=>(
                        <tr key={m.id}>
                            <td>{m.first_name}</td>
                            <td>{m.last_name}</td>
                            <td>{m.email}</td>
                            <td>{m.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FilterTable
