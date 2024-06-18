import { lazy, Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LazyLoad from '@/components/UI/LazyLoad'
import Business from '@/pages/Business'
import { usePrivy } from '@privy-io/react-auth'
import { useCr3dUser } from '@/features/user/hooks/useCr3dUser'
import NotFound from '@/pages/404'
const Info = lazy(() => import('@/pages/Business/Info'))
const CustomerInfo = lazy(() => import('@/pages/CustomerInfo'))

const Invoices = lazy(() => import('@/pages/Business/Invoices'))
const AwaitPayment = lazy(() => import('@/pages/PaymentAwait'))

const Onboarding = lazy(() => import('@/pages/Onboarding'))
// const Login = lazy(() => import('@/pages/Auth/Login'))
// const Register = lazy(() => import('@/pages/Auth/Register'))
// const ConfirmOTP = lazy(() => import('@/pages/Auth/ConfirmOTP'))
// const ConnectTransactions = lazy(() => import('@/pages/ConnectTransactions'))
// const LinkAccounts = lazy(() => import('@/pages/LinkAccounts'))
// const CreditScore = lazy(() => import('@/pages/CreditScore'))
const BusinessHome = lazy(() => import('@/pages/Business/Home'))
const CreateInvoice = lazy(() => import('@/pages/Business/CreateInvoice'))
// const Statistics = lazy(() => import('@/pages/Business/Statistics'))
const Profile = lazy(() => import('@/pages/Business/Profile'))
const Invoice = lazy(() => import('@/pages/Business/InvoiceDetails'))

const Routes = () => {
  const publicRoutes = [
    { path: '/', element: <Onboarding /> },
    {
      path: '/business-info',
      element: <Info />,
    },
    {
      path: '/customer-info',
      element: <CustomerInfo />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]
  const { authenticated } = usePrivy()
  const vendorOnlyPaths = ['/create-invoice']
  const cr3dUser = useCr3dUser()
  //console.log(user)
  //console.log(rest)
  // useLogin({
  //   onComplete(
  //     user,
  //     isNewUser,
  //     wasAlreadyAuthenticated,
  //     loginMethod,
  //     loginAccount,
  //   ) {
  //     console.log(user)
  //   },
  // })
  // const authRoutes = [
  //   // {
  //   //   path: '/login',
  //   //   element: <Login />,
  //   // },
  //   // {
  //   //   path: '/register',
  //   //   element: <Register />,
  //   // },
  //   // {
  //   //   path: '/confirm-otp',
  //   //   element: <ConfirmOTP />,
  //   // },
  //   {
  //     path: '/connect',
  //     element: <ConnectTransactions />,
  //   },
  //   {
  //     path: '/link-accounts',
  //     element: <LinkAccounts />,
  //   },
  //   {
  //     path: '/credit-score',
  //     element: <CreditScore />,
  //   },

  // ]
  const payerRoutes = [
    {
      path: 'payments-await',
      element: <AwaitPayment />,
    },
  ]

  //TODO: split routes into business / customers and pages too
  const businessRoutes = [
    {
      path: '/',
      element: <Business />,
      children: [
        {
          path: '/home',
          element: <BusinessHome />,
        },
        // {
        //   path: '/statistics',
        //   element: <Statistics />,
        // },
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
    {
      path: '/create-invoice',
      element: <CreateInvoice />,
    },
    {
      path: '/invoice/:id',
      element: <Invoice />,
    },
  ].filter(
    ({ path }) =>
      !vendorOnlyPaths.includes(path) || cr3dUser?.role === 'vendor',
  )

  const router = createBrowserRouter(
    authenticated
      ? [...publicRoutes, ...payerRoutes, ...businessRoutes]
      : publicRoutes,
  )

  return (
    <Suspense fallback={<LazyLoad />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default Routes
