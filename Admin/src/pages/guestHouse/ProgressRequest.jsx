import {Link} from 'react-router-dom'

export const ProgressRequest = () => {
  return (
    <div className="w-full">
      <header className="p-3 w-full flex justify-start">
          <Link to={'/guest-house-controller'} className="px-2 py-1 text-xl rounded-md border-[2px] border-black">
              {"<"} Back
          </Link>
      </header>

      Progress Request
      </div>
  )
}
