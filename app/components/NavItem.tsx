import React from "react";

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
}

export function NavItem({ icon: Icon, label, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4 p-2 rounded-md 
                 hover:bg-gray-300 dark:hover:bg-slate-800 
                 cursor-pointer transition-colors"
    >
      <Icon className="w-4 h-4 dark:text-white" />
      <span className="text-sm dark:text-white">{label}</span>
    </button>
  );
}
