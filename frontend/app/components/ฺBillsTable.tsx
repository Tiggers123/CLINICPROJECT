"use client";

import React from "react";

interface Bill {
  id: string;
  customerName: string;
  dateTime: string;
  status: string; // เพิ่มฟิลด์ Status
}

interface BillsTableProps {
  bills: Bill[];
  onView: (id: string) => void;
  onDelete: (id: string) => void;
}

const BillsTable: React.FC<BillsTableProps> = ({ bills, onView, onDelete }) => {
  return (
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">S.No</th>
          <th className="border border-gray-300 p-2">Order ID</th>
          <th className="border border-gray-300 p-2">Customer Name</th>
          <th className="border border-gray-300 p-2">Date & Time</th>
          <th className="border border-gray-300 p-2">View/Delete</th>
          <th className="border border-gray-300 p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {bills.map((bill, index) => (
          <tr key={bill.id}>
            <td className="border border-gray-300 p-2">{index + 1}</td>
            <td className="border border-gray-300 p-2">{bill.id}</td>
            <td className="border border-gray-300 p-2">{bill.customerName}</td>
            <td className="border border-gray-300 p-2">{bill.dateTime}</td>
            <td className="border border-gray-300 p-2">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => onView(bill.id)}
              >
                VIEW
              </button>
              <button
                className="bg-pink-500 text-white px-4 py-2 rounded"
                onClick={() => onDelete(bill.id)}
              >
                DELETE
              </button>
            </td>
            <td
              className={`border border-gray-300 p-2 ${
                bill.status === "Paid" ? "text-green-500" : "text-red-500"
              }`}
            >
              {bill.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BillsTable;
