import React from 'react';
import { motion } from 'framer-motion';
import { MoreVertical, Circle } from 'lucide-react';
import type { Agent } from '../types';

export function AgentsList() {
  const agents: Agent[] = [
    {
      id: '1',
      name: 'Assistant Commercial',
      status: 'active',
      type: 'Support',
      interactions: 1234,
      successRate: 95,
      lastUpdated: '2024-03-19T10:30:00'
    },
    {
      id: '2',
      name: 'Agent Service Client',
      status: 'training',
      type: 'Support',
      interactions: 856,
      successRate: 88,
      lastUpdated: '2024-03-19T09:15:00'
    },
    {
      id: '3',
      name: 'Assistant Marketing',
      status: 'inactive',
      type: 'Marketing',
      interactions: 2341,
      successRate: 92,
      lastUpdated: '2024-03-18T16:45:00'
    }
  ];

  const getStatusColor = (status: Agent['status']) => {
    switch (status) {
      case 'active':
        return 'text-green-500';
      case 'inactive':
        return 'text-gray-500';
      case 'training':
        return 'text-yellow-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">Agents IA</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {agents.map((agent) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 flex items-center justify-between hover:bg-gray-50"
          >
            <div className="flex items-center space-x-4">
              <Circle className={`h-3 w-3 ${getStatusColor(agent.status)}`} />
              <div>
                <h3 className="text-sm font-medium text-gray-900">{agent.name}</h3>
                <p className="text-sm text-gray-500">{agent.type}</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{agent.interactions.toLocaleString()} interactions</p>
                <p className="text-sm text-gray-500">{agent.successRate}% de réussite</p>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <MoreVertical className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}