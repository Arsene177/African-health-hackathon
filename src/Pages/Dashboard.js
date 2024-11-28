import React, { useState } from 'react';
import '../CSS/Dashboard.css';
import Dnav from '../Components/Dnav.js';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patient: 'John Doe', date: '2024-09-01', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, patient: 'Jane Smith', date: '2024-09-03', time: '2:00 PM', status: 'Pending' },
  ]);

  const [newAppointment, setNewAppointment] = useState({ patient: '', date: '', time: '', status: 'Pending' });
  const [editAppointment, setEditAppointment] = useState(null);

  const handleAdd = () => {
    setAppointments([...appointments, { ...newAppointment, id: Date.now() }]);
    setNewAppointment({ patient: '', date: '', time: '', status: 'Pending' });
  };

  const handleEdit = (appointment) => {
    setEditAppointment(appointment);
  };

  const handleSaveEdit = () => {
    setAppointments(appointments.map(app => app.id === editAppointment.id ? editAppointment : app));
    setEditAppointment(null);
  };

  const handleDelete = (id) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  const handleNextDay = (id) => {
    setAppointments(appointments.map(app => {
      if (app.id === id) {
        const newDate = new Date(app.date);
        newDate.setDate(newDate.getDate() + 1);
        return { ...app, date: newDate.toISOString().split('T')[0] };
      }
      return app;
    }));
  };

  return (
    <div className="dashboard-container">
      <Dnav/>
      <h1>Doctor's Appointments</h1>

      <h3>Add New Appointment</h3>
      <input
        type="text"
        placeholder="Patient Name"
        value={newAppointment.patient}
        onChange={(e) => setNewAppointment({ ...newAppointment, patient: e.target.value })}
      />
      <input
        type="date"
        value={newAppointment.date}
        onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
      />
      <input
        type="time"
        value={newAppointment.time}
        onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
      />
      <button className="add-appointment-btn" onClick={handleAdd}>Add Appointment</button>

      {editAppointment && (
        <div>
          <h3>Edit Appointment</h3>
          <input
            type="text"
            placeholder="Patient Name"
            value={editAppointment.patient}
            onChange={(e) => setEditAppointment({ ...editAppointment, patient: e.target.value })}
          />
          <input
            type="date"
            value={editAppointment.date}
            onChange={(e) => setEditAppointment({ ...editAppointment, date: e.target.value })}
          />
          <input
            type="time"
            value={editAppointment.time}
            onChange={(e) => setEditAppointment({ ...editAppointment, time: e.target.value })}
          />
          <button onClick={handleSaveEdit}>Save Changes</button>
          <button onClick={() => setEditAppointment(null)}>Cancel</button>
        </div>
      )}

      <table className="appointment-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.patient}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.status}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(appointment)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(appointment.id)}>End</button>
                <button className="delete-btn" onClick={() => handleNextDay(appointment.id)}>Renvoyer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
