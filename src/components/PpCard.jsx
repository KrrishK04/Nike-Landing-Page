import {star} from "../assets/icons"
export default function PpCard({ imgURL, name, price }) {
  return (
    <div className="flex flex-col items-start bg-white shadow-xl rounded-2xl h-[400px] w-full">
      <div className="flex justify-center items-center bg-card bg-cover w-full h-[220px] rounded-t-2xl">
        <img src={imgURL} alt={name} className="object-contain w-full h-full" />
      </div>
      <span className="flex flex-row gap-2 pt-6 pl-4">
        <img src={star} alt="" width={18} />
        <p className="text-slate-500 font-montserrat">(4.5)</p>
      </span>
      <p className="mt-2 font-montserrat font-semibold leading-normal pl-4">{name}</p>
      <p className="font-semibold text-coral-red text-xl pl-4">{price}</p>
    </div>
  );
}