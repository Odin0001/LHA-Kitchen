import kitchen from '../assets/kitchen.jpg'
import global from '../assets/global.jpg'
import cooking from '../assets/cooking.jpg'

const About = () => {
  return (
    <div>
      <div className='about w-full h-[50vh] flex justify-center items-center'>
        <h1 className='font-light text-7xl text-center text-white'>What is LHA Kitchen</h1>
      </div>
      <div className='lg:max-w-[75%] max-w-[90%] min-h-[100vh] mx-auto my-16 lg:p-10 p-5 bg-green-400 rounded-xl grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4 gap-y-14'>
        <img src={kitchen} alt='Kitchen' loading='lazy' className='rounded-3xl shadow-xl' />
        <p className='text-xl text-justify'>Welcome to LHA Kitchen! We are a community-driven platform for food enthusiasts who love to cook, share, and discover new recipes. Our mission is to make cooking more accessible, fun, and interactive for everyone.</p>
        <img src={global} alt='Global' loading='lazy' className='rounded-3xl shadow-xl' />
        <p className='text-xl text-justify'>Our website is designed to be a hub for foodies of all skill levels. Whether you're an experienced chef or a beginner cook, you'll find something to love here. You can browse our vast collection of recipes, contribute your own creations, or connect with other members of our community.</p>
        <img src={cooking} alt='Cooking' loading='lazy' className='rounded-3xl shadow-xl' />
        <p className='text-xl text-justify'>We believe that cooking is not just about nourishing your body, but also about bringing people together. Sharing recipes is a great way to connect with others, learn new techniques, and celebrate the joy of food. That's why we created this platform to help you discover and share delicious recipes with people from all over the world.</p>
      </div>
    </div>
  )
}

export default About