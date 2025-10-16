import React from "react";
import { Link } from "react-router";

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  route: string;
}

export function NavItem({ icon: Icon, label, route }: NavItemProps) {
  return (
    <Link
      to={route}
      role="button"
      className="flex items-center gap-4 p-2 px-3 rounded-md 
             
             hover:bg-gray-100 dark:hover:bg-slate-700"
    >
      <Icon className="w-4 h-4 dark:text-white" />
      <span className="text-sm dark:text-white">{label}</span>
    </Link>
  );
}
