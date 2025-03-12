import React from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { MessageSquare, Clock, User, Circle } from 'lucide-react';
import type { Conversation } from '../types';

interface ConversationTableProps {
  conversations: Conversation[];
}

export function ConversationTable({ conversations }: ConversationTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dernier Message</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {conversations.map((conversation) => (
            <tr key={conversation.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm font-medium text-gray-900">{conversation.clientName}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-500">{conversation.lastMessage}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-500">
                    {format(new Date(conversation.timestamp), "d MMMM yyyy 'à' HH:mm", { locale: fr })}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <Circle className={`h-3 w-3 mr-2 ${
                    conversation.status === 'new' ? 'text-green-500' :
                    conversation.status === 'ongoing' ? 'text-yellow-500' :
                    'text-gray-500'
                  }`} />
                  <span className="text-sm text-gray-500">
                    {conversation.status === 'new' ? 'Nouveau' :
                     conversation.status === 'ongoing' ? 'En cours' : 'Terminé'}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}