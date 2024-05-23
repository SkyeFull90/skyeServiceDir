import TodoItem from './Todo';

export default function TodoView(props){
    return (
        <div className="overflow-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr>
                    <td>Cy Ganderton</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}