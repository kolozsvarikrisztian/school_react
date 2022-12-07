import { Diak } from './Diak';
import { useState, useEffect } from "react"; 
// import { NavLink } from "react-router-dom";


export function StudentList() {
    const [students, setStudents] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);
    useEffect(() => {
        setFetchPending(true);
        fetch("http://localhost:9000/students")
        .then((res) => res.json())
        .then((diakok) => setStudents(diakok))
        .catch(console.log)
        .finally(() => {
             setFetchPending(false);
        });
    }, []);
    return (
        <div className="row">
        <h1 className="h1">2/14 szoftverfejlesztők</h1>
        {students.map((student) => (
            <Diak student = {student} key={student._id.toString()}/>
        ))}
        </div>
    )
}