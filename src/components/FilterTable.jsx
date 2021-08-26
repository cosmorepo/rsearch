import MockData from '../MOCK_DATA.json'

function FilterTable() {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>first name</th>
                        <th>last name</th>
                        <th>email</th>
                        <th>gender</th>
                    </tr>
                </thead>
                <tbody>
                    {MockData.map(m=>(
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
