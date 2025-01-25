"use client";
import React from "react";

interface HeaderProps {
  onSearch: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-3xl font-bold">Bills</h1>
      <input
        type="text"
        placeholder="search by order id"
        className="p-2 border rounded-md"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default Header;
