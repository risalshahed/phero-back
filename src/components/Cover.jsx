// dynamic import of image
export default function Cover({img, title, description}) {
  const coverImg = {
    backgroundImage: `url(${img})`
  }

  return (
    <div className="cover-image pt-44 pb-20 mb-16" style={coverImg}>
      <div className="text-white flex flex-col items-center py-24 max-w-[70%] mx-auto bg-black bg-opacity-50">
        <h2 className='font-semibold text-7xl uppercase pb-4'>{title}</h2>
        <p className='uppercase'>{description}</p>
      </div>
    </div>
  )
}