"use client";
const Page = () => {
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
        <div className="grid grid-cols-5 gap-6 font-semibold text-center mb-4">
          <span>ลำดับ</span>
          <span>รายการ</span>
          <span>รหัสบัญชี</span>
          <span>จำนวน/หน่วย</span>
          <span>ราคารวม</span>
        </div>

        {/* Row */}
        <div className="grid grid-cols-5 gap-6 items-center mb-6">
          <span className="text-center">1</span>
          <input
            type="text"
            placeholder="รายการ"
            className="border p-2 rounded-lg"
          />
          <input
            type="text"
            placeholder="รหัสบัญชี"
            className="border p-2 rounded-lg"
          />
          <input
            type="number"
            placeholder="จำนวน"
            className="border p-2 rounded-lg"
          />
          <input
            type="number"
            placeholder="ราคารวม"
            className="border p-2 rounded-lg"
          />
        </div>

        {/* Add Button */}
        <div className="mb-6 text-center">
          <button className="bg-[#FB6F92] text-white px-6 py-2 rounded-lg shadow hover:bg-pink-500">
            เพิ่มรายการ +
          </button>
        </div>

        {/* Footer */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          {/* หมายเหตุ */}
          <div className="col-span-2">
            <label className="block font-semibold mb-2">หมายเหตุ</label>
            <textarea
              className="w-full border p-2 rounded-lg"
              placeholder="กรอกหมายเหตุ"
            ></textarea>
          </div>

          {/* Summary */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <span>ส่วนลดรวม</span>
              <input
                type="number"
                placeholder="บาท"
                className="border p-2 rounded-lg w-24"
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <span>มูลค่าหลังส่วนลด</span>
              <input
                type="number"
                placeholder="บาท"
                className="border p-2 rounded-lg w-24"
              />
            </div>
            <button className="bg-[#FB6F92] text-white px-6 py-2 rounded-lg w-full">
              มูลค่ารวม 0.00 บาท
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
