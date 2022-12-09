import { Diak } from "./Diak";
import { NewDiak } from "./NewDiak";
import { ModifiedDiak } from "./ModifiedDiak";
import { useState, useEffect } from 'react';


export function StudentList() {
    const [students, setStudents] = useState([]);
    const [modifiedId, setModifiedId] = useState('');
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
      }, [students]);
      function modosit(id) { 
        setModifiedId(id);
      }
    return (
        <div className="row">
            <h1>2/14 szoftverfejlesztők</h1>
            {students.map((student) => (  
                student._id.toString() === modifiedId ?  <ModifiedDiak student={student} key={student._id.toString() }  handleModosit={modosit}/>
                 : <Diak student={student} key={student._id.toString()}  handleModosit={modosit}/>
                
            ))} 
            <NewDiak />    
        </div>
    )
}