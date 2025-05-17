import { Divide } from "lucide-react";
import {star}  from "../assets/icons"
export default function ReviewCard({imgURL,customerName,rating,feedback}){
    return(
        <div className="flex flex-col items-center justify-center gap-2 info-text ">

            <img src={imgURL} width={100} alt=""
            className="rounded-full" />
            <p className="w-[600px]">{feedback}</p>
            <div className="flex flex-row">
                <img src={star} alt="" width={20}/> <p className="px-2">{rating}</p>
            </div>
            <p className="font-bold text-black font-poppins mb-6">{customerName}</p>
        </div>
    )
}