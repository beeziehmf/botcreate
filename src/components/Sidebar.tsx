import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  navigationItems: Array<{
    icon: React.ReactNode;
    label: string;
    path: string;
  }>;
}

export function Sidebar({ collapsed, onToggle, navigationItems }: SidebarProps) {
  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 80 : 256 }}
      className="bg-white border-r border-gray-200 flex flex-col"
    >
      <div className="p-4 flex items-center justify-between border-b border-gray-200">
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-xl font-bold text-gray-800"
          >
            Botintegrate
          </motion.div>
        )}
        <button
          onClick={onToggle}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <motion.div
            animate={{ rotate: collapsed ? 180 : 0 }}
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </motion.div>
        </button>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {item.icon}
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-700"
                  >
                    {item.label}
                  </motion.span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.aside>
  );
}