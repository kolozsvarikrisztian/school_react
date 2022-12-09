import { CCard, CCardHeader, CListGroup, CListGroupItem, CCardFooter} from '@coreui/react';
import { useState, useEffect } from 'react';

export function ModifiedDiak({student, handleModosit}) { 
    const kiirNev = student.lastName + ' ' + student.firstName;
    const [inputNev, setinputNev] = useState(kiirNev);
    const kiirSzEv = student.birthYear;
    const [inputSzEv, setinputSzEv] = useState(kiirSzEv);
    function handleChangeNev(event) {
        setinputNev(event.target.value);
      }
    function handleChangeSzEv(event) {  
        setinputSzEv(event.target.value);
    }
    async function edit() {
        // const nev = document.getElementById('nev').value;
        const nev = inputNev;
        const lastName = nev.split(' ')[0];
        const firstName = nev.substr(lastName.length+1);
        // const sz_ev = document.getElementById('sz_ev').value;
        const sz_ev = inputSzEv;
        const body = JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            birthYear: sz_ev
        })
        const resp = await fetch("http://localhost:9000/students/"+student._id.toString(), {
            method: "PUT",
            body: body,
            headers: {
                'content-type': 'application/json'      
              }
        });
        if (resp.status==404) {
            alert("Sikertelen művelet")
        }
        handleModosit('');
    }   
    return (
        <div className="col-md-4">
            <CCard>
                <CCardHeader>Név: <input type="text" id="nev" value={inputNev} onChange={handleChangeNev}/></CCardHeader>
                <CListGroup flush>
                    <CListGroupItem>
                        Születési év: <input type="number" id="sz_ev" min="1996" max="2020" value={inputSzEv} onChange={handleChangeSzEv}/>
                    </CListGroupItem>                                       
                </CListGroup>
                <CCardFooter>                                    
                    <button type="button" onClick={() => edit()}>Adatok módosítása</button>  
                </CCardFooter>
            </CCard>

            {/* <div className="card">
                <h2>{student.lastName+ ' ' + student.firstName}</h2>
            </div> */}
        </div>
    )
};