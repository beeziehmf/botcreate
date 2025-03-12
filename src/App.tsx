import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutGrid,
  Bot,
  MessageSquare,
  FolderGit2,
  Users,
  Activity,
  ChevronLeft,
  Bell,
} from 'lucide-react';

import Dashboard from './components/Dashboard';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import type { UserProfile } from './types';
import { Settings } from './components/Settings';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserProfile>({
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Acme Inc',
    subscription: 'Premium',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  });

  const navigationItems = [
    { icon: <LayoutGrid size={24} />, label: 'Dashboard', path: '/' },
    { icon: <Bot size={24} />, label: 'Agents IA', path: '/agents' },
    { icon: <MessageSquare size={24} />, label: 'Chat', path: '/chat' },
    { icon: <FolderGit2 size={24} />, label: 'Projets', path: '/projects' },
    { icon: <Users size={24} />, label: 'HubSpot', path: '/hubspot' },
    { icon: <Activity size={24} />, label: 'Paramètres', path: '/settings' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        navigationItems={navigationItems}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          user={currentUser}
          onNotificationClick={() => {}}
          onProfileClick={() => {}}
        />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {navigationItems.map((item, index) =>
                item.path === '/settings' ? (
                  <Settings key={index} />
                ) : item.path === '/' ? (
                  <Dashboard key={index} />
                ) : null
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;
