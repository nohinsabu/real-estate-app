import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

export default function ListingItem({listing}) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow
    overflow-hidden rounded-lg w-full sm:w-[320px]">
        <Link to={`/listing/${listing._id}`}>
            <img src={listing.imageUrls[0] || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fhd-wallpaper-desktop-kkxpi&psig=AOvVaw2ASpPq6NWgJfSYyyA3RhF0&ust=1716976708583000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDTpOeKsIYDFQAAAAAdAAAAABAE'} alt='listing cover' 
            className='h-[320px] sm:h-[220px] w-full object-cover
            hover:scale-105 transition-scale duration-300' />
            <div className='p-3 flex flex-col gap-2'>
                <p className='truncate text-lg font-semibold
                text-slate-700'>{listing.name}</p>
                <div className="flex gap-1 items-center">
                    <MdLocationOn className='h-4 w-4 text-green-700'/>
                    <p className='text-gray-600 truncate text-sm w-full'>{listing.address}</p>
                </div>
                <p className='text-sm text-gray-600 
                line-clamp-2'>{listing.description}</p>
                <p className='font-semibold text-slate-500 mt-2'>${listing.offer ? listing.discountPrice.toLocaleString('en-US') : 
                listing.regularPrice.toLocaleString('en-US')}
                {listing.type === 'rent' && ' / month' }</p>
                <div className="text-slate-700 flex gap-4">
                    <div className="font-bold text-xs">
                        {listing.bedrooms > 1 ? `${listing.bedrooms} Beds` :
                        'Bed'}
                    </div>
                    <div className="font-bold text-xs">
                        {listing.bathrooms > 1 ? `${listing.bathrooms} Baths` :
                        'Bath'}
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}
