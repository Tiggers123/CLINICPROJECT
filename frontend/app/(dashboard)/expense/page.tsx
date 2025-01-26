"use client";
import { useState, useEffect } from "react";

const Page = () => {
  // State สำหรับแถว
  const [rows, setRows] = useState([
    {
      id: 1,
      item: "",
      accountCode: "",
      quantity: "",
      unitPrice: "",
      totalPrice: 0,
    },
  ]);
  const [discount, setDiscount] = useState("");
  const [finalValue, setFinalValue] = useState(0);

  // คำนวณผลรวมทั้งหมด
  useEffect(() => {
    const total = rows.reduce((sum, row) => sum + row.totalPrice, 0);
    setFinalValue(total - (parseFloat(discount) || 0));
  }, [rows, discount]);

  // อัปเดตค่าของแถว
  const updateRow = (id: number, field: string, value: string) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id
          ? {
              ...row,
              [field]: value,
              totalPrice:
                field === "quantity" || field === "unitPrice"
                  ? (parseFloat(field === "quantity" ? value : row.quantity) ||
                      0) *
                    (parseFloat(
                      field === "unitPrice" ? value : row.unitPrice
                    ) || 0)
                  : row.totalPrice,
            }
          : row
      )
    );
  };

  // เพิ่มแถว
  const addRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      {
        id: prevRows.length + 1,
        item: "",
        accountCode: "",
        quantity: "",
        unitPrice: "",
        totalPrice: 0,
      },
    ]);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">บันทึกค่าใช้จ่าย</h1>

      <div className="bg-[#FFC9D6]  p-6 rounded-lg flex flex-col md:flex-row items-center gap-6 mb-8">
        <div className="flex flex-col">
          <p className="font-semibold">เลขที่เอกสาร : EXP-9999999</p>
          <p>วันที่สร้าง : 11-11/2024</p>
        </div>
        <div className="flex flex-wrap gap-6 ml-auto justify-start md:justify-end">
          <div className="flex flex-col text-left gap-2">
            <span>ผู้ติดต่อ</span>
            <button className="flex items-center bg-white border border-[#FB6F92] px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100">
              🔍 Search for Records
            </button>
          </div>
          <div className="flex flex-col text-left gap-2">
            <span>ข้อมูลภาษี</span>
            <button className="flex items-center bg-white border border-[#FB6F92] px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100">
              🔍 Search for Records
            </button>
          </div>
          <div className="flex flex-col text-left gap-2">
            <span>วันที่กำหนด</span>
            <button className="flex items-center bg-white border border-[#FB6F92] px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100">
              🔍 Search for Records
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#FFC9D6] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-6 gap-6 font-semibold text-center mb-4">
          <span>ลำดับ</span>
          <span>รายการ</span>
          <span>รหัสบัญชี</span>
          <span>จำนวน</span>
          <span>ราคา/หน่วย</span>
          <span>ราคารวม</span>
        </div>

        {/* Rows */}
        {rows.map((row) => (
          <div
            className="grid grid-cols-6 gap-6 items-center mb-4"
            key={row.id}
          >
            <span className="text-center">{row.id}</span>
            <input
              type="text"
              value={row.item}
              onChange={(e) => updateRow(row.id, "item", e.target.value)}
              placeholder="รายการ"
              className="border p-2 rounded-lg"
            />
            <input
              type="text"
              value={row.accountCode}
              onChange={(e) => updateRow(row.id, "accountCode", e.target.value)}
              placeholder="รหัสบัญชี"
              className="border p-2 rounded-lg"
            />
            <input
              type="text"
              value={row.quantity}
              onChange={(e) => updateRow(row.id, "quantity", e.target.value)}
              placeholder="จำนวน"
              className="border p-2 rounded-lg"
            />
            <input
              type="text"
              value={row.unitPrice}
              onChange={(e) => updateRow(row.id, "unitPrice", e.target.value)}
              placeholder="ราคา/หน่วย"
              className="border p-2 rounded-lg"
            />
            <input
              type="text"
              value={row.totalPrice.toFixed(2)}
              readOnly
              placeholder="ราคารวม"
              className="border p-2 rounded-lg"
            />
          </div>
        ))}

        {/* Add Button */}
        <div className="mb-6">
          <button
            onClick={addRow}
            className="bg-[#FB6F92] text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500"
          >
            เพิ่มรายการ +
          </button>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span>ส่วนลดรวม</span>
              <input
                type="text"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                placeholder="บาท"
                className="border p-2 rounded-lg w-24"
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <span>มูลค่าหลังส่วนลด</span>
              <input
                type="text"
                value={finalValue.toFixed(2)}
                readOnly
                placeholder="บาท"
                className="border p-2 rounded-lg w-24"
              />
            </div>
            <button className="bg-[#FB6F92] text-white px-6 py-2 rounded-lg w-full">
              มูลค่ารวม {finalValue.toFixed(2)} บาท
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
