export default function EachMenu({ item }) {
  const { name, image, price, recipe } = item;

  return (
    <div className='flex gap-x-4'>
      <img className='w-32 rounded-tr-[200px] rounded-b-[200px]' src={image} alt={name} />
      <div>
        <h3 className='font-bold text-xl uppercase'>{name}--------------</h3>
        <p>{recipe}</p>
      </div>
        <p className='text-yellow-500'>${price}</p>
    </div>
  )
}