import React, { useRef } from 'react'
//import { Link } from 'react-router-dom'

//import Carousel from '@/components/UI/Carousel/CarouselContainer'
//import Slide from '@/components/UI/Carousel/Slide'
// import OnboardingImg1 from '@/assets/images/onboarding1.png'
// import OnboardingImg2 from '@/assets/images/onboarding2.png'
// import OnboardingImg3 from '@/assets/images/onboarding3.png'
import Button from '@/components/UI/Button'
import { useLogin, usePrivy } from '@privy-io/react-auth'
import { useNavigate, useSearchParams } from 'react-router-dom'
import OutlinedButton from '@/components/UI/OutlinedButton'
import { Cr3dUser } from '@/features/user/types'
import { useCr3dUser, useCreateCr3dUser } from '@/features/user/hooks'
import Loader from '@/components/UI/Loader'
// import { createCr3dUser } from '@/features/user/api'
// import { generateRandomString } from '@/features/createInvoice/utils'

export type SlideType = {
  id: number
  image: any
  title: string
  subtitle: string
}

const customer_label_text = 'Login as a Customer'
const vendor_label_text = 'Login as a Vendor'

//TODO: change name
export function handleRedirect(params: URLSearchParams) {
  const hasReturnUrl = params.has('return_url')
  if (hasReturnUrl) {
    window.location.href = params.get('return_url')!
    return
  }
  window.location.pathname = '/home'
}
const Onboarding: React.FC = () => {
  const navigate = useNavigate()
  //const qc = useQueryClient()
  const userType = useRef<Cr3dUser['role']>('user')
  const {
    isPending,
    isError,
    error,
    //isSuccess,
    mutate: createCr3dUserUponUserLogin,
  } = useCreateCr3dUser()

  const { authenticated } = usePrivy()
  const [params, _] = useSearchParams()
  const cr3dUser = useCr3dUser()
  if (authenticated && cr3dUser) {
    handleRedirect(params)
  }

  //console.log(isPending, isError, isSuccess)

  const { login } = useLogin({
    onComplete(user, isNewUser, __, ___, ____) {
      // console.log(params.get('phone_payer'))
      // //console.log(user)
      // //return
      //isNewUser = true
      if (isNewUser && userType.current === 'vendor') {
        //push to business info take when (vendor)
        navigate('/business-info')
        //return
      } else if (isNewUser) {
        //loginMethod !== 'sms'
        //this ensures we try to get phone_number from login/signup
        //first we try to get from the param,if empty,we get it from privy sms
        //if empty we force the customer to add his phone
        //const params = new URLSearchParams(window.location.search)
        let phone_number: string | null | undefined = params.get('phone_payer')
        phone_number = phone_number || user.phone?.number
        if (!phone_number) {
          navigate('/customer-info')
          return
        }
        // console.log(phone_numberr
        //console.log({ phone_number })
        createCr3dUserUponUserLogin(
          {
            role: 'user',
            phone_number,
            created_at: Math.floor(user.createdAt.getTime() / 1000),
          },
          {
            onSuccess() {
              //alert('success')
              handleRedirect(params)
              //console.log('success')
              //take path from existing url
              //window.location.pathname = '/home'
            },
            // onError(e) {
            //   console.log({ e })
            // },
          },
        )
        //chec

        //customer
        //get the return url, if any window.location.href=return url
      } else {
        //console.log(user.createdAt)
        //get the return url, if any window.location.href=return url
        //TODO: get user here using useMutation, if error (404) navigate to info(business or customer)
        //if success call the function below
        handleRedirect(params)
        // const hasReturnUrl = params.has('return_url')
        // if (hasReturnUrl) {
        //   window.location.href = params.get('return_url')!
        //   return
        // }
        // window.location.pathname = '/home'
        // createCr3dUserUponUserLogin(userType.current, {
        //   onSuccess() {
        //     console.log('success')
        //     //alert('success')
        //     //take path from existing url
        //     //window.location.pathname = '/home'
        //   },
        // })
      }

      //take pathname or url or push to home
      //we can perisist to storage
      //no need for this when we can get it from privy
      // qc.setQueryData(['privy_auth'], () => ({
      //   user,
      //   isNewUser,
      //   wasAlreadyAuthenticated,
      //   loginMethod,
      //   loginAccount,
      // }))
      //console.log(args)
    },
  })

  const loginWithUserRole: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    //it should be name , i know
    const el = e.target as HTMLButtonElement
    if (el.textContent === vendor_label_text) {
      userType.current = 'vendor'
    }
    // console.log(el)
    // createCr3dUserUponUserLogin(userType.current, {
    //   onSuccess() {
    //     console.log('hi')
    //   },
    // })
    login()
    //console.log(el.textContent)
  }

  // const [currentSlide, setCurrentSlide] = useState(0)

  // const slideRows = slides.map((slide: any, index: number) => {
  //   return (
  //     <Slide
  //       key={index}
  //       slide={slide}
  //       index={index}
  //       currentSlide={currentSlide}
  //     />
  //   )
  // })

  return (
    <div className="p-5 pb-16 min-h-screen mt-auto mb-auto flex items-center flex-col justify-center gap-2">
      <Button
        disabled={isError || isPending}
        className="user"
        onClick={loginWithUserRole}
        label={customer_label_text}
      />
      <OutlinedButton
        disabled={isError || isPending}
        className="vendor"
        onClick={loginWithUserRole}
        label={vendor_label_text}
      />
      {isPending && <Loader />}
      {isError && (
        <span className="mt-4 text-danger-100 text-center block">
          {error.message || "Sorry,couldn't create cr3d user.Try again"}
        </span>
      )}
      {/* <Button
        label="create cr3d user test"
        onClick={() => {
          createCr3dUser({
            email: `baxaxis${generateRandomString()}8@godsigma.com`,
            username: `0x21Db5c93dB3603c6B4Bbd710c8cA8E82905278CF`,
            role: 'user',
          })
            .then(() => {
              alert('sucess')
            })
            .catch(() => {
              alert('failed')
            })
        }}
      /> */}
      {/* <Carousel
        slides={slideRows}
        setCurrentSlide={setCurrentSlide}
        currentSlide={currentSlide}
      />
      <div className="mt-4">
        <Link
          to={`/register`}
          className="bg-primary-0 text-white text-center rounded-[100px] h-[56px] w-full block py-[15px]"
        >
          Create account
        </Link>
        <Link
          to={`/login`}
          className="bg-white text-primary-0 border-primary-0 border-solid border text-center rounded-[100px] h-[56px] w-full block py-[15px] mt-2"
        >
          Already have account
        </Link>
      </div> */}
    </div>
  )
}

export default Onboarding
