import { CCard, CCardHeader, CListGroup, CListGroupItem, CCardFooter} from '@coreui/react';
import { useState, useEffect } from 'react';

export function NewDiak() { 
    async function felvisz() {
        const nev = document.getElementById('nev').value;
        const lastName = nev.split(' ')[0];
        const firstName = nev.substr(lastName.length+1);
        const sz_ev = document.getElementById('sz_ev').value;
        const body = JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            birthYear: sz_ev
        })
        const resp = await fetch("http://localhost:9000/students", {
            method: "POST",
            body: body,
            headers: {
                'content-type': 'application/json'      
              }
        });
        document.getElementById('nev').value = '';
        document.getElementById('sz_ev').value = '';
    }   
    return (
        <div className="col-md-4">
            <CCard>
                <CCardHeader>Név: <input type="text" id="nev"/></CCardHeader>
                <CListGroup flush>
                    <CListGroupItem>
                        Születési év: <input type="number" id="sz_ev" min="1996" max="2020"/>
                    </CListGroupItem>                                       
                </CListGroup>
                <CCardFooter>                                    
                    <button type="button" onClick={() => felvisz()}>Új diák felvitele</button>  
                </CCardFooter>
            </CCard>

            {/* <div className="card">
                <h2>{student.lastName+ ' ' + student.firstName}</h2>
            </div> */}
        </div>
    )
};