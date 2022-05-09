import { Card } from 'antd'


function CardListPet({id, name, category, status, tags}){
    
    return(
        <Card title="Pet Detail" extra={<a href="#">More</a>} >
            <p>Name pet: {name}</p>
            <p>Category: {category}</p>
            <p>tags: {tags}</p>
            <p>status: {status}</p>
        </Card>
    )
}

export default CardListPet