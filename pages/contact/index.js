/* eslint-disable react/no-unescaped-entities */
import Circles from '/components/Circles'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {variants} from '../../variants'
const Contact = () => {
  return <div className='h-full bg-primary/30 overflow-visible'>
    <div class="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
  <div className='flex flex-col w-full max-w-[700px] '>

    <h2 className='text-center sm:pt-7 h2 mt-[150px] sm:mt-0'>Let's <span className='text-accent'>connect.</span></h2>
<form className='flex-1 flex flex-col gap-6 w-full mx-auto sm:mt-0 '>
  <div className='flex gap-x-6 w-fulls'>
    <input type='text' placeholder='name' className='input '/>
    <input type='text' placeholder='email' className='input'/>
   
  </div>
  <input type='text' placeholder='subject' className='input'/>
  <textarea placeholder='message' className='textarea'></textarea>
  <button className='btn rounded-full border border-white/50 max-w-[170px]
  px-8 transition-all duration-300 flex items-center justify-center overflow:hidden hover:border-accent group
  '>
    <span className='group-hover:-translate-y-[20%] group-hover:opacity-0 transition-all duration-1000'>Let's Talk</span>
     <BsArrowRight className='-translate-y-[20%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-1000 absolute text-[22px]'/>
  </button>
</form>
  </div>
    </div>
  </div>;
};

export default Contact;
