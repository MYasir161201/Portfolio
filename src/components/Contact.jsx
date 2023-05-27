import React from 'react'

const Contact = () => {
  return (
    <div  name='contact' className='w-full h-screen text-gray-300 bg-[#0a192f] flex justify-center items-center p-4'>
        <form action='https://getform.io/f/86987648-254f-4c25-a966-ffd6dc1cd346' method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
              <p className='py-4'>Submit the form below or shoot me an email - ammar.yasir161201@gmail.com</p>
            </div>
            <input className='p-2 bg[#ccd6f6]' placeholder='Name' type='text' name='name' />
            <input className='my-4 p-2 bg[#ccd6f6]' placeholder='Email' type='email' name='email' />
            <textarea className='p-2 bg[#ccd6f6]' rows='10' placeholder='Message' name='message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto fllex items-center'>Let's collaborate</button>
        </form>
    </div>
  )
}

export default Contact