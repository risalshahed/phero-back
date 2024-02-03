import SectionTitle from '../../components/SectionTitle'
import EachMenu from '../../components/EachMenu';
import useMenu from '../../hooks/useMenu';

export default function PopularMenu() {
  const [menu] = useMenu();
  // console.log(menu);

  const popularItems = menu?.filter(item => item.category === 'popular');

  const menuItem = popularItems?.map(eachMenu =>
    <EachMenu
      key={eachMenu._id}
      item={eachMenu}
    />
  );

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