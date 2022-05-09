import { Card, Form, Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { findPetById } from '../../store/petSlice'

function CardSearchById(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onFinish = (values) => {
        console.log(values)
        const { id } = values
        // dispatch(findPetById(id))
        navigate(`/pet/${id}`)
    }
    return(
        <Card title="Search Pet" extra={<a href="#">More</a>} >
            <Form layout="horizontal" onFinish={onFinish}>
                <Form.Item name="id" label="ID of pet to return">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">Search</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default CardSearchById