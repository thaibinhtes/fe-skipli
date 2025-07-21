import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useMemo } from 'react';
import { SIGN_IN, HOME, EMPLOYEE, MESSAGE, TASK } from './routes.d';
import { RoleProtectedRoute } from './ProtectedRoute';
import { getTokenAuth } from '../utils';
import BaseLoading from '../components/BaseLoading';

// Lazy imports
const SignInPage = lazy(() => import('../pages/sign-in'));
const LayoutAdmin = lazy(() => import('../layouts/admin'));
const EmployeePage = lazy(() => import('../pages/employee'));
const MessagePage = lazy(() => import('../pages/message'));
const TaskPage = lazy(() => import('../pages/task'));

import { useLocation } from 'react-router-dom';

export default function AppRouter() {
  const location = useLocation();

  const isLogin = useMemo(() => {
    const token = getTokenAuth()

    return token ? true : false
  }, [location])
  return (
    <Suspense fallback={<BaseLoading />}>
      <Routes>
        <Route
          path={HOME}
          element={
            <RoleProtectedRoute
              isAuthenticated={isLogin}
              allowedRoles={['admin']}
              userRole="admin"
            >
              <LayoutAdmin />
            </RoleProtectedRoute>
          }
        >
          <Route index path={EMPLOYEE} element={<EmployeePage />} />
          <Route path={MESSAGE} element={<MessagePage />} />
          <Route path={TASK} element={<TaskPage />}></Route>
        </Route>

        {/* Public */}
        <Route path={SIGN_IN} element={<SignInPage />} />
      </Routes>
    </Suspense>
  );
}
