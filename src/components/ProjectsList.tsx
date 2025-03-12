import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { FolderGit2, Bot, Clock } from 'lucide-react';
import type { Project } from '../types';

export function ProjectsList() {
  const projects: Project[] = [
    {
      id: '1',
      name: 'E-commerce Assistant',
      status: 'active',
      type: 'Commerce',
      lastModified: '2024-03-19T16:30:00',
      agentCount: 3
    },
    {
      id: '2',
      name: 'Support Client 24/7',
      status: 'active',
      type: 'Support',
      lastModified: '2024-03-19T14:20:00',
      agentCount: 5
    },
    {
      id: '3',
      name: 'Assistant Marketing',
      status: 'draft',
      type: 'Marketing',
      lastModified: '2024-03-18T11:45:00',
      agentCount: 2
    }
  ];

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">Projets</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 hover:bg-gray-50"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <FolderGit2 className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{project.name}</h3>
                  <p className="text-sm text-gray-500">{project.type}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Bot className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600">{project.agentCount} agents</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    {format(new Date(project.lastModified), "d MMM 'à' HH:mm", { locale: fr })}
                  </span>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                  {project.status === 'active' ? 'Actif' :
                   project.status === 'archived' ? 'Archivé' : 'Brouillon'}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}