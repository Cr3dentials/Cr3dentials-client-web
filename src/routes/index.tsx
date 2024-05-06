import { lazy, Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LazyLoad from '@/components/UI/LazyLoad'
import Business from '@/pages/Business'
const Invoices = lazy(() => import('@/pages/Business/Invoices'))

const Onboarding = lazy(() => import('@/pages/Onboarding'))
const Login = lazy(() => import('@/pages/Auth/Login'))
const Register = lazy(() => import('@/pages/Auth/Register'))
const ConfirmOTP = lazy(() => import('@/pages/Auth/ConfirmOTP'))
const ConnectTransactions = lazy(() => import('@/pages/ConnectTransactions'))
const LinkAccounts = lazy(() => import('@/pages/LinkAccounts'))
const CreditScore = lazy(() => import('@/pages/CreditScore'))
const BusinessHome = lazy(() => import('@/pages/Business/Home'))
const CreateInvoice = lazy(() => import('@/pages/Business/CreateInvoice'))
const Statistics = lazy(() => import('@/pages/Business/Statistics'))
const Profile = lazy(() => import('@/pages/Business/Profile'))
const Invoice = lazy(() => import('@/pages/Business/InvoiceDetails'))

const Routes = () => {
  const publicRoutes = [{ path: '/', element: <Onboarding /> }]
  const authRoutes = [
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/confirm-otp',
      element: <ConfirmOTP />,
    },
    {
      path: '/connect',
      element: <ConnectTransactions />,
    },
    {
      path: '/link-accounts',
      element: <LinkAccounts />,
    },
    {
      path: '/credit-score',
      element: <CreditScore />,
    },
  ]
  const businessRoutes = [
    {
      path: '/',
      element: <Business />,
      children: [
        {
          path: '/home',
          element: <BusinessHome />,
        },
        {
          path: '/statistics',
          element: <Statistics />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/invoices',
          element: <Invoices />,
        },
      ],
    },
  ]

  const router = createBrowserRouter([
    ...publicRoutes,
    ...authRoutes,
    ...businessRoutes,
    {
      path: '/create-invoice',
      element: <CreateInvoice />,
    },
    {
      path: '/invoice/:id',
      element: <Invoice />,
    },
  ])

  return (
    <Suspense fallback={<LazyLoad />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default Routes
