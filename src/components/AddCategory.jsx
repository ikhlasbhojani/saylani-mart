import { Button, Select, Form, Input, } from 'antd';
const { TextArea } = Input;
const App = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
   <div className="add_category_form">
     <Form requiredMark="optional"
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <div>
        <h2>Add </h2>
      </div>
      <Form.Item 
        name="itemname"
        rules={[
          {
            required: true,
            message: 'Please input your Item name!',
          },
        ]}
      >
        <Input placeholder="Item Name" />
      </Form.Item>
      <Form.Item name= "category">
        <Select placeholder="Category">
          <Select.Option value="demo">Fruit</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="text">
          <TextArea placeholder='Description' rows={4} />
        </Form.Item>
        <Form.Item
        label ="Unit Name"
        name="unitname"
        rules={[
          {
            required: true,
            message: 'Please input your Unit name!',
          },
        ]}
      >
        <Input placeholder="Unit Name" />
      </Form.Item>
      <Form.Item
      label ="Unit Price"
        name="unitprice"
        rules={[
          {
            required: true,
            message: 'Please input your Unit price!',
          },
        ]}
      >
        <Input placeholder="Item Name" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Add Product
        </Button>
      </Form.Item>
    </Form>
   </div>
  );
};
export default App;