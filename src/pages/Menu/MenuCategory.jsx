import EachMenu from '../../components/EachMenu';

export default function MenuCategory({ items }) {
  const menuItem = items?.map(eachMenu =>
    <EachMenu
      key={eachMenu._id}
      item={eachMenu}
    />
  );
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 pb-24'>
      {menuItem}
    </div>
  )
}