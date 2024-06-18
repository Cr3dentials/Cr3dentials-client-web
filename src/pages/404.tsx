import Button from '@/components/UI/Button'

const NotFound = () => {
  return (
    <div className="p-5 pb-16 min-h-screen mt-auto mb-auto flex items-center flex-col justify-center gap-2">
      <Button
        onClick={() => {
          window.location.pathname = '/'
        }}
        label="Go Home"
      />
      <span>Ooops, are you lost??</span>
    </div>
  )
}

export default NotFound
