"use client";

import { useState } from "react";
import SidebarItem from "./SidebarItem";
import { ChevronDown, ChevronRight } from "lucide-react";

interface SidebarSectionProps {
  title: string;
  items: string[];
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-4">
      <button
        className="flex items-center justify-between w-full px-3 py-2 text-left bg-gray-800 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>

      {isOpen && (
        <div className="pl-4 mt-2 space-y-2">
          {items.map((item, index) => (
            <SidebarItem key={index} label={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarSection;
