import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { findPetAll } from "../../store/petSlice";

import CardSearchById from "./cardSearch";

function HomePet(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(findPetAll())
        navigate('/pet/list')
    }
    return(
        <div>
            <div>
                <button onClick={() => navigate('/pet')}>Create Pet</button>
            </div>
            <div>
                <button onClick={() => navigate('/pet/list')}>List Pets</button>
            </div>
            <CardSearchById />
        </div>
    )
}

export default HomePet