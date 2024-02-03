import { Helmet } from 'react-helmet-async'
import Cover from '../../components/Cover'
// dynamic image import
import bannerImg from '../../assets/menu/banner3.jpg'
import useMenu from '../../hooks/useMenu'
import SectionTitle from '../../components/SectionTitle'
import MenuCategory from './MenuCategory'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

export default function Menu() {
  const [menu] = useMenu();

  const dessertItems = menu?.filter(item => item.category === 'dessert');
  const saladItems = menu?.filter(item => item.category === 'salad');
  const soupItems = menu?.filter(item => item.category === 'soup');
  const offeredItems = menu?.filter(item => item.category === 'offered');
  const pizzaItems = menu?.filter(item => item.category === 'pizza');

  return (
    <section>
      <Helmet>
        <title>Menu | Bistro Restaurant</title>
      </Helmet>

      {/* pass "bannerImg" as props */}
      <Cover
        img={bannerImg}
        title={'our menu'}
        description={'WOULD YOU LIKE TO TRY A DISH?'}  
      />

      {/* offered items */}
      <SectionTitle
        subHeading={'Don\'t miss'}
        heading={'today\'s offer'}
        />
      <MenuCategory items={offeredItems} />

      {/* dessert items */}
      <Cover
        img={dessertImg}
        title={'desserts'}
        description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
      />
      <MenuCategory items={dessertItems} />
      
      {/* pizza items */}
      <Cover
        img={pizzaImg}
        title={'Pizza'}
        description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
      />
      <MenuCategory items={pizzaItems} />

      {/* salad items */}
      <Cover
        img={saladImg}
        title={'salads'}
        description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
      />
      <MenuCategory items={saladItems} />

      {/* soup items */}
      <Cover
        img={soupImg}
        title={'soups'}
        description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
      />
      <MenuCategory items={soupItems} />

    </section>
  )
}