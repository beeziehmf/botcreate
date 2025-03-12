export interface Agent {
  id: string;
  name: string;
  status: 'active' | 'inactive' | 'training';
  type: string;
  interactions: number;
  successRate: number;
  lastUpdated: string;
}

export interface ChatMessage {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  type: 'user' | 'bot';
}

export interface Project {
  id: string;
  name: string;
  status: 'active' | 'archived' | 'draft';
  type: string;
  lastModified: string;
  agentCount: number;
}

export interface KPICard {
  title: string;
  value: number | string;
  change: number;
  icon: React.ReactNode;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  company: string;
  subscription: string;
  avatar?: string;
}