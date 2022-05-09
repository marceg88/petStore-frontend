const API = 'http://localhost:4000'

const header = {
    
    // 'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
}

export const ConnectionAPI = {
    async createPet(data) {
        const response = await fetch(`${API}/pet`, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(data)
        })
        const pet = response.json()
        return pet
    },
    async findPetById(petId){
        const response = await fetch(`${API}/pet/${petId}`, {
            method: 'GET',
            headers: header,
        })
        const pet = response.json()
        return pet
    },
    async findPetAll(){
        
        const response = await fetch(`${API}/pet/todos`, {
            method: 'GET',
            headers: header,
        })
        console.log("entra")
        const pet = response.json()
        return pet
    }
}