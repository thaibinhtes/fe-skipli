import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { SIGN_IN, HOME, EMPLOYEE, MESSAGE } from './routes.d';
import { RoleProtectedRoute } from './ProtectedRoute';

// Lazy imports
const HomePage = lazy(() => import('@/pages/home'));
const SignInPage = lazy(() => import('@/pages/sign-in'));
const DashboardPage = lazy(() => import('@/pages/dashboard'));
const LayoutAdmin = lazy(() => import('@/layouts/admin'));
const EmployeePage = lazy(() => import('@/pages/employee'));
const MessagePage = lazy(() => import('@/pages/message'));

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path={HOME}
          element={
            <RoleProtectedRoute
              isAuthenticated={false} // ✅ Change this dynamically later
              allowedRoles={['admin']}
              userRole="admin" // ✅ This must match allowedRoles or access will be denied
            >
              <LayoutAdmin />
            </RoleProtectedRoute>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path={EMPLOYEE} element={<EmployeePage />} />
          <Route path={MESSAGE} element={<MessagePage />} />
        </Route>

        {/* Public */}
        <Route path={SIGN_IN} element={<SignInPage />} />
      </Routes>
    </Suspense>
  );
}
