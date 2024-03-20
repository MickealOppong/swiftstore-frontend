import { Link } from "react-router-dom";

const carouselData = [
  { id: 1, img: 'https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg' },
  { id: 2, img: 'https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_1280.png' },
  { id: 3, img: 'https://cdn.pixabay.com/photo/2024/02/23/21/42/ai-generated-8592850_1280.png' },
  { id: 4, img: 'https://cdn.pixabay.com/photo/2023/11/27/15/41/cat-8415620_1280.jpg' },
  { id: 5, img: 'https://cdn.pixabay.com/photo/2022/10/23/09/07/bicycle-7540835_1280.png' }
]

const Hero = () => {
  return <section className="align-elements">
    <div className="flex">
      <div className="flex flex-col gap-y-8 lg:mr-12">
        <h1 className="text-primary text-5xl lg:text-7xl">We are reshapping online business</h1>
        <p className="lg:w-[40vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur ratione omnis, reiciendis dolorem vel blanditiis, enim suscipit consectetur aut eum dicta nemo iure placeat maiores voluptatem assumenda, voluptatibus ipsum!</p>
        <Link to='/products' className="btn btn-primary w-36">our products</Link>
      </div>
      <div className="h-[70vh] w-[70vw] carousel rounded-box hidden lg:flex">
        {
          carouselData.map((image) => {
            return <div className="carousel-item w-full" key={image.id}>
              <img src={image.img} />
            </div>
          })
        }
      </div>
    </div>
  </section>
}
export default Hero;