import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import featuredImg from '../../../assets/home/featured.jpg'

export default function Featured() {
  return (
    <div className='featured-image text-white'>
      <SectionTitle
        subHeading={'Check it out'}
        heading={'from our menu'}
      />
      {/* bg-slate-600 bg-opacity-20 */}
      <div className='md:flex justify-center items-center md:gap-x-6 px-36 pb-20 pt-12'>
        <div>
          <img src={featuredImg} alt="featured image" />
        </div>
        <div>
          <div>
            <h6 className='text-xl'>March 20, 2023</h6>
            <h5 className='py-1 text-2xl'>WHERE CAN I GET SOME?</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
          </div>

          <button className='uppercase btn mt-2 bg-opacity-0 border-0 border-b-4 text-white hover:text-black'>read more</button>
        </div>
      </div>

    </div>
  )
}
