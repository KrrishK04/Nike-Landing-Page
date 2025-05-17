import {services} from "../constants"
import ServiceCard from "../components/ServiceCard"


const Services = () => {
  return (
    <section className="max-container flex flex-row justify center items-stretch flex-wrap gap-9 flex-1
      max-md:flex-col  max-xl:flex-1 max-xl:justify-center">
      {services.map( (service) => {
        return (
          <ServiceCard 
            key={service.label}
            {...service}
          />
        )
      })}
    </section>
  )
}

export default Services;