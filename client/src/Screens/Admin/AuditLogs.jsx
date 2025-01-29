import React from 'react'
import TopBar from '../../Components/Admin/Dashboard/TopBar'

const AuditLogs = () => {
    const [logs, setLogs] = React.useState([
      {
        id: 1,
        firstName:"Pradyumna",
        LastName:"Mahajan",
        email: "pradyumna@gmail.com",
        message: "created super user lalini shau",
        createdAt: "2025-01-28T12:43:06.073Z",
      },
      {
        id: 2,
        firstName:"Lalini",
        LastName:"Shashu",
        email: "lalini@gmail.com",
        message: "Added Police Station with name Hinjawadi and id is 20",
        createdAt: "2025-01-29T12:43:06.073Z",
      },
      {
        id: 3,
        firstName:"Jasmine",
        LastName:"Kispotta",
        email: "jasmine@gmail.com",
        message: "Updated Crime Category",
        createdAt: "2025-01-29T10:43:06.073Z",
      },
      {
        id: 4,
        firstName:"Mitali",
        LastName:"Gupta",
        email: "mitali@gmail.com",
        message: "Pawn Gupta crime report Accepted",
        createdAt: "2025-02-01T10:43:06.073Z",
      },
      {
        id: 5,        
        firstName:"Pawan",
        LastName:"Gupta",
        email: "pawan@gmail.com",
        message: "Pawn Gupta created crime report",
        createdAt: "2025-02-01T10:43:06.073Z",
      },
    ]);

  return (
    <>
    <TopBar />
    <div className="p-5">
        <table className="w-full table-auto ">
          <thead>
            <tr className="bg-stone-100 text-sm font-normal text-stone-500">
              <th className="text-start p-1.5">ID</th>
              <th className="text-start p-1.5">First Name</th>
              <th className="text-start p-1.5">Last Name</th>
              <th className="text-start p-1.5">Email</th>
              <th className="text-start p-1.5">Message</th>
              <th className="text-start p-1.5">Created At</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log1) => (
              <TableRow
                key={log1.id}
                log1={log1}

              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AuditLogs

const TableRow = ({ log1 }) => {
  return (
    <tr className="text-sm border-b-2">
      <td className="p-1.5">
        <a
          href="#"
          className="text-violet-600 underline flex items-center gap-1"
        >
          {log1.id}
        </a>
      </td>
      <td className="p-1.5">{log1.firstName}</td>
      <td className="p-1.5">{log1.LastName}</td>
      <td className="p-1.5">{log1.email}</td>
      <td className="p-1.5">{log1.message}</td>
      <td className="p-1.5">{log1.createdAt}</td>
    </tr>
  );
};
