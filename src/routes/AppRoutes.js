import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreatePet from '../components/createPet/createPet'
import DetailPet from '../components/detailPet/detailPet'
import HomePet from '../components/homePet/homePet'
import ListPets from '../components/listPet/listPet'

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePet/>} />
                <Route path='/pet' element={<CreatePet />} />
                <Route path='/pet/list' element={<ListPets />} />
                <Route path='/pet/:petId' element={<DetailPet />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes