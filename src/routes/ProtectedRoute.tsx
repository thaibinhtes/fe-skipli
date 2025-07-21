import { Navigate } from 'react-router-dom'
import { SIGN_IN } from './routes.d';
import type React from 'react';

type RoleProtectedRouteProps = {
  children: React.ReactElement
  isAuthenticated: boolean
  allowedRoles: string[]
  userRole: string
}

export function RoleProtectedRoute({ children, isAuthenticated }: RoleProtectedRouteProps) {
  if (!isAuthenticated) return <Navigate to={SIGN_IN} replace />
  return children
}