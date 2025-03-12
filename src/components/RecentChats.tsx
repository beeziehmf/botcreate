import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { MessageSquare, Circle } from 'lucide-react';
import type { ChatMessage } from '../types';

export function RecentChats() {
  const chats: ChatMessage[] = [
    {
      id: '1',
      sender: 'Client A',
      content: 'Je souhaiterais plus d\'informations sur vos services.',
      timestamp: '2024-03-19T15:30:00',
      type: 'user'
    },
    {
      id: '2',
      sender: 'Assistant IA',
      content: 'Bien sûr, je peux vous aider avec cela.',
      timestamp: '2024-03-19T15:31:00',
      type: 'bot'
    },
    {
      id: '3',
      sender: 'Client B',
      content: 'Quel est le délai de livraison ?',
      timestamp: '2024-03-19T14:45:00',
      type: 'user'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">Conversations Récentes</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {chats.map((chat) => (
          <motion.div
            key={chat.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 hover:bg-gray-50"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Circle className={chat.type === 'user' ? 'text-blue-500 h-3 w-3' : 'text-green-500 h-3 w-3'} />
                <span className="text-sm font-medium text-gray-900">{chat.sender}</span>
              </div>
              <span className="text-xs text-gray-500">
                {format(new Date(chat.timestamp), 'HH:mm', { locale: fr })}
              </span>
            </div>
            <p className="text-sm text-gray-600 pl-5">{chat.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}