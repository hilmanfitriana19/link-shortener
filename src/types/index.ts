export interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

export interface Link {
  id: string;
  userId: string;
  originalUrl: string;
  shortCode: string;
  customAlias?: string;
  title?: string;
  description?: string;
  clicks: number;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export interface LinkClick {
  id: string;
  linkId: string;
  timestamp: Date;
  userAgent?: string;
  ip?: string;
}

export type Theme = 'blue' | 'purple' | 'green' | 'orange';

export interface ThemeConfig {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  gradient: string;
}