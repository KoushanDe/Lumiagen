import React from 'react';

export enum AuditStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface AuditResult {
  title: string;
  summary: string;
  keyBenefits: string[];
  estimatedImpact: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}