
import {
  Form,
  Input,
  Button,
  Select,
  Upload,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './createPet.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createPet, resetServiceMethodsMessage } from '../../store/petSlice';
import { useEffect } from 'react';

function CreatePet() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onFinish = (values) => {
        console.log(values.categoryId)
        const categoryId = values.categoryId
        dispatch(createPet(values))
    }  
    useEffect(() => {
      setTimeout(() => {
        dispatch(resetServiceMethodsMessage('createPet'))
        navigate('/')
      }, 3500)
    }, [dispatch, navigate])
    
  return (
    <div className="container-create">
      <div className="button-back">
        <button onClick={() => navigate('/')}>Back</button>
      </div>
      <Form
      className="container-form"
      layout="horizontal"
      onFinish={onFinish}
    >
      <Form.Item name="name" label="Name Pet">
        <Input/>
      </Form.Item>
      <Form.Item name="categoryId" label="Category">
        <Select>
          <Select.Option value="1">Dog</Select.Option>
          <Select.Option value="2">Cat</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="tagsId" label="Tags">
        <Select>
          <Select.Option value="1">Big</Select.Option>
          <Select.Option value="2">Little</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="status" label="Status">
        <Select>
          <Select.Option value="available">Available</Select.Option>
          <Select.Option value="pending">Pending</Select.Option>
          <Select.Option value="sold">Sold</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="photoUrls">
        <Upload
            listType="picture"
            maxCount={1}
            accept=".png,.jpeg,.jpg"
            beforeUpload={(file) => {
              return false;
            }}
          >
            <Button icon={<UploadOutlined />}>Subir imagen de mascota</Button>
          </Upload>
      </Form.Item>
      <Form.Item >
        <Button className="button-create" htmlType="submit">Create</Button>
      </Form.Item>
    </Form>
    </div>
    
  );
}

export default CreatePet