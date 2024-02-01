import React from 'react'

function Footer() {
  return (
    <>
    <footer className="rounded-lg p-4 shadow md:px-6 md:py-8 ">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="" className="mb-4 flex items-center sm:mb-0">
          <img
            src="/assets/logo.png"
            className="mr-3 h-8"
            alt="TorrentFlix"
          />
        </a>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-400 sm:text-center ">
      Copyright &copy; {new Date().getFullYear()}
        <a href="" className="hover:underline">
          Xilflix
        </a>
        . An Open Source Project.
      </span>
    </footer>
  </>
  )
}

export default Footer