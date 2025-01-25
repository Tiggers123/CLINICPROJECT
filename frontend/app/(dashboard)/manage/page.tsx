"use client";

import React, { useState } from "react";
import Header from "@/app/components/Header";
import BillsTable from "@/app/components/ฺBillsTable";

const Dashboard: React.FC = () => {
  // ข้อมูลตัวอย่างของ Bills
  const [bills, setBills] = useState([
    {
      id: "1",
      customerName: "Phoebe Buffey",
      dateTime: "22/05/2021, 08:07 PM",
      status: "Paid",
    },
    {
      id: "2",
      customerName: "Rachel",
      dateTime: "22/05/2021, 08:06 PM",
      status: "Unpaid",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredBills = bills.filter(
    (bill) =>
      bill.id.includes(search) ||
      bill.customerName.toLowerCase().includes(search.toLowerCase())
  );

  const handleView = (id: string) => {
    alert(`Viewing bill: ${id}`);
  };

  const handleDelete = (id: string) => {
    const confirmed = confirm(`Are you sure you want to delete bill: ${id}?`);
    if (confirmed) {
      setBills((prev) => prev.filter((bill) => bill.id !== id));
    }
  };

  return (
    <div className="flex flex-col p-4 md:p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 shadow-md rounded-lg mb-4">
        <Header onSearch={(value) => setSearch(value)} />
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <BillsTable
          bills={filteredBills}
          onView={handleView}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Dashboard;
