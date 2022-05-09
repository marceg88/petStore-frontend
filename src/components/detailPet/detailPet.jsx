import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { findPetById, selectPet } from "../../store/petSlice";
import CardDeatilPet from "./cardDetailPet";


function DetailPet(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { petId } = useParams()
    const pet = useSelector(selectPet)

    console.log("pet",pet)
    useEffect(() => {
        dispatch(findPetById(petId))
    },[dispatch, petId])
    return(
        <div>
            <CardDeatilPet name={pet.name} status={pet.status}/>
        </div>
    )
}

export default DetailPet