import { CCard, CCardHeader, CListGroup, CListGroupItem    } from '@coreui/react';

export function Diak({student}) {
    return (
        <div className="col-md-4">
            {/* <div className="card">
                <h2>{student.lastName + ' ' + student.firstName}</h2>
            </div> */}
            <CCard>
                <CCardHeader>{student.lastName} {student.firstName}</CCardHeader>
            <CListGroup flush>
                <CListGroupItem>Születési év: {student.birthYear}</CListGroupItem>
                <CListGroupItem>Jegyek: {
                    student.grades.map((grade) => (
                        grade + ' '
                    ))
                }</CListGroupItem>
            </CListGroup>
            </CCard>
        </div>
    )
};