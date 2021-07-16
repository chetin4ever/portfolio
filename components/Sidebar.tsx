import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai"
import { GoLocation } from "react-icons/go"
import { GiTie } from "react-icons/gi"
const Sidebar = () => {
  return (
    <div>
      <img
        className='w-32 h-32 mx-auto rounded-full'
        src='https://0.gravatar.com/avatar/3561c0b79496f6b3e0216e5b9e17d141?s=400&d=mm'
        alt=''
      />
      <h3 className='my-4 text-2xl font-medium tracking-wider font-kaushan'>
        <span>Chetan</span>Mahajan
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>Web Devloper</p>
      <a
        href=''
        className='flex justify-center px-2 py-1 my-3 bg-gray-200 rounded-full item-center'
      >
        <GiTie className='w-6 h-6 ' />
        Download Resume
      </a>
      {/* social icon */}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-green-400 md:w-full '>
        <a href=''>
          <AiFillYoutube className='w-8 h-8 cursor-pointer' />
        </a>{" "}
        <a href=''>
          <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
        </a>{" "}
        <a href=''>
          <AiFillGithub className='w-8 h-8 cursor-pointer' />
        </a>
      </div>

      {/* address */}
      <div
        className='py-4 my-5 bg-gray-200'
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Jalgaon,India</span>
        </div>
        <p className='my-2'>mahajan.chetan@yahoo.com</p>
        <p className='my-2'>8055207896</p>
      </div>
      {/* email button */}
      <button
        onClick={() => window.open("mailto:mahajan.chetan@yahoo.com")}
        className='w-full p-2 px-5 py-2 my-2 rounded-full outline-none bg-gradient-to-r from-green to-blue-400'
      >
        Email Me
      </button>
      <button className='w-full p-2 px-5 py-2 my-2 rounded-full outline-none bg-gradient-to-r from-green to-blue-400'>
        Toggle Theme
      </button>
    </div>
  )
}

export default Sidebar
