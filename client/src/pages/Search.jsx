import React from 'react'

export default function Search() {
  return (
    <div className="flex flex-col md:flex-row">
        <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
            <form className='flex flex-col gap-8'>
                <div className="flex gap-2 items-center">
                    <label className='whitespace-nowrap font-semibold'>
                        Search Term:
                    </label>
                    <input className='border rounded-lg p-3 w-full' 
                    placeholder='Search...' 
                    type='text' id='searchTerm'/>
                </div>
                <div className="flex gap-2 flex-wrap items-center">
                    <label className='font-semibold'>Type:</label>
                    <div className="flex gap-2">
                        <input id='all' className='w-5' type='checkbox'/>
                        <span>Rent & Sale</span>
                    </div>
                    <div className="flex gap-2">
                        <input id='rent' className='w-5' type='checkbox'/>
                        <span>Rent</span>
                    </div>
                    <div className="flex gap-2">
                        <input id='sale' className='w-5' type='checkbox'/>
                        <span>Sale</span>
                    </div>
                    <div className="flex gap-2">
                        <input id='offer' className='w-5' type='checkbox'/>
                        <span>Offer</span>
                    </div>
                </div>
                <div className="flex gap-2 flex-wrap items-center">
                    <label className='font-semibold'>Amenities:</label>
                    <div className="flex gap-2">
                        <input id='parking' className='w-5' type='checkbox'/>
                        <span>Parking</span>
                    </div>
                    <div className="flex gap-2">
                        <input id='furnished' className='w-5' type='checkbox'/>
                        <span>Furnished</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <label className='font-semibold'>Sort:</label>
                    <select id='sort_order'
                    className='border p-3 rounded-lg'>
                        <option>Price high to low</option>
                        <option>Price low to high</option>
                        <option>Latest</option>
                        <option>Oldest</option>
                    </select>
                </div>
                <button className='bg-slate-700 text-white 
                uppercase hover:opacity-95 p-3 rounded-lg'>Search</button>
            </form>
      </div>
      <div className="">
        <h1 className='text-3xl font-semibold text-slate-700
        border-b p-3 mt-5 '>Listing results:</h1>
      </div>
    </div>
  )
}
