import { CCard, CCardHeader, CListGroup, CListGroupItem, CCardFooter} from '@coreui/react';
import { useState, useEffect } from 'react';

export function Diak({student}) {
    const [isFetchPending, setFetchPending] = useState(false);
    const [diak, setDiak] = useState({});
    async function jegyetAd(grade) {               
        const body = JSON.stringify({
            studentId: student._id.toString(),
            grade: grade            
        });
        console.log(body);
        setFetchPending(true);
        const resp = await fetch("http://localhost:9000/grades", {
            method: "POST",
            body: body,
            headers: {
                'content-type': 'application/json'      
              }
        });
        setDiak(resp.json());
        console.log(diak);
        setFetchPending(false);
    }
    return (
        <div className="col-md-4">
            <CCard>
                <CCardHeader>{student.lastName} {student.firstName}</CCardHeader>
                <CListGroup flush>
                    <CListGroupItem>Születési év: {student.birthYear}</CListGroupItem>
                    <CListGroupItem>Jegyek: {
                        student.grades.map((grade) => (
                            grade + ', '
                        ))
                    }</CListGroupItem>                    
                </CListGroup>
                <CCardFooter>
                   {
                    [1, 2, 3, 4, 5].map((grade) => (
                        <button type="button" onClick={() => jegyetAd(grade)} key={grade}>{grade}</button>
                    ))
                    }
                     
                </CCardFooter>
            </CCard>

            {/* <div className="card">
                <h2>{student.lastName+ ' ' + student.firstName}</h2>
            </div> */}
        </div>
    )
};