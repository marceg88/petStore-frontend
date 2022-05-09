import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { findPetAll, selectPet } from "../../store/petSlice";
import CardListPet from "./cardListPet";

function ListPets(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const pets = useSelector(selectPet)
    const categoryId = pets.categoryId
    console.log(pets)
    const onClick = (e) => {
        e.preventDefault()
        dispatch(findPetAll())
    }
    // useEffect(() => {
    //     dispatch(findPetAll())
    // },[dispatch])
    return(
        <div>
            <div>
            <button onClick={onClick}>List Pets</button>
                {/* <button onClick={() => navigate('/pet')}>List Pets</button> */}
            </div>
            <div>
                <h2>List of Pets</h2>
            </div>
            <CardListPet />
        </div>
    )
}

export default ListPets