// import React from 'react'
import Image from 'next/image';
import { ThumbUpIcon,DownloadIcon,EyeIcon } from "@heroicons/react/outline";

function Thumbnail({result}){
  return (
    <div className='group cursor-pointer p-2 transition-all duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
      <Image layout='responsive' src={result.largeImageURL}
        height={1080} width={1920}  alt='Thumbnails' />
      <div className='p-2'>
        <p>{result.tags}</p>

        <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>{result.user}</h2>
      
        <div className='flex mt-2'>
          <p className='flex flex-col w-20 items-center opacity-0 group-hover:opacity-100'>
            <EyeIcon className='h-5 mx-2' />
            {result.views}
          </p>
          <p className='flex flex-col w-20 items-center opacity-0 group-hover:opacity-100'>
            <DownloadIcon className='h-5 mx-2' />
            {result.downloads}
          </p>
          <p className='flex flex-col w-20 items-center opacity-0 group-hover:opacity-100'>
            <ThumbUpIcon className='h-5 mx-2' />
            {result.likes}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Thumbnail
