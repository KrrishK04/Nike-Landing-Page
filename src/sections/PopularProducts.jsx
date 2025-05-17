import {products} from "../constants"
import PpCard from "../components/PpCard"
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-rubik font-bold">Our <span className="text-coral-red">Popular</span>  Products</h2>
        <p className="font-montserrat text-slate-500 mt-2 lg:max-w-lg">Experience top notch quality and stlye with our sought after selections. Discover a world of comfort, design and value.</p>
      </div>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-8 lg:gap-14">
          {products.map( (product) => {
            return(
              <PpCard key={product.name} 
                // imgURL={product.imgURL}
                // name={product.name}
                // price={product.price}
                {...product}
              />
            )
          })}
        </div>
    </section>
  )
}

export default PopularProducts;
