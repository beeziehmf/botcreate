import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Users, Bot, MessageSquare } from 'lucide-react';
import { KPICard } from './KPICard';
import { AgentsList } from './AgentsList';
import { RecentChats } from './RecentChats';
import { ProjectsList } from './ProjectsList';
import type { KPICard as KPICardType } from '../types';

export function Dashboard() {
  const kpiData: KPICardType[] = [
    {
      title: 'Agents Actifs',
      value: 12,
      change: 2,
      icon: <Bot className="h-6 w-6 text-blue-500" />
    },
    {
      title: 'Interactions',
      value: '2,847',
      change: 12.5,
      icon: <MessageSquare className="h-6 w-6 text-green-500" />
    },
    {
      title: 'Taux de Réussite',
      value: '94%',
      change: 3.2,
      icon: <Activity className="h-6 w-6 text-purple-500" />
    },
    {
      title: 'Utilisateurs',
      value: '1,234',
      change: 8.1,
      icon: <Users className="h-6 w-6 text-orange-500" />
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <motion.div
            key={kpi.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <KPICard {...kpi} />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <AgentsList />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <RecentChats />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <ProjectsList />
      </motion.div>
    </div>
  );
}