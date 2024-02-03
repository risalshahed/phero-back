import { useEffect, useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import EachMenu from '../../components/EachMenu';

export default function PopularMenu() {
  const [menu, setMenu] = useState([]);

  const getPopularItems = async () => {
    const res = await fetch('menu.json');
    const data = await res.json();
    const popularItems = await data.filter(datum => datum.category === 'popular');
    setMenu(popularItems);
  }

  // console.log(menu);

  useEffect(() => {
    getPopularItems();
  }, []);

  const menuItem = menu?.map(eachMenu =>
    <EachMenu
      key={eachMenu._id}
      item={eachMenu}
    />
  )

  return (
    <section>
      <SectionTitle
        subHeading={'Check it out'}
        heading={'from our menu'}
      />

      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 pb-24'>
        {menuItem}
      </div>
    </section>
  )
}