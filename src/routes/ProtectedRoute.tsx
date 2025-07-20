import { Navigate } from 'react-router-dom'
import { SIGN_IN, NOT_FOUND } from './routes.d';
import type React from 'react';

type RoleProtectedRouteProps = {
  children: React.ReactElement
  isAuthenticated: boolean
  allowedRoles: string[]
  userRole: string
}

export function RoleProtectedRoute({ children, isAuthenticated, allowedRoles, userRole }: RoleProtectedRouteProps) {
  if (!isAuthenticated) return <Navigate to={SIGN_IN} replace />
  // if (!allowedRoles.includes(userRole)) return <Navigate to={NOT_FOUND} replace />
  return children
}