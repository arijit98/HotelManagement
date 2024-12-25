import React, { useState } from 'react';

const StaffManagement = () => {
    const [staff, setStaff] = useState([
        { id: 1, name: 'John Doe', position: 'Manager' },
        { id: 2, name: 'Jane Smith', position: 'Receptionist' },
    ]);

    const addStaff = () => {
        const newStaff = { id: staff.length + 1, name: 'New Staff', position: 'New Position' };
        setStaff([...staff, newStaff]);
    };

    return (
        <div>
            <h1>Staff Management</h1>
            <ul>
                {staff.map(member => (
                    <li key={member.id}>
                        {member.name} - {member.position}
                    </li>
                ))}
            </ul>
            <button onClick={addStaff}>Add Staff</button>
        </div>
    );
};

export default StaffManagement;