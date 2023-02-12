import { LockOutlined, UserOutlined, PhoneOutlined } from "@ant-design/icons";
import { AiOutlineMail } from "react-icons/ai";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth ,db} from "../firebase";
import { addDoc, collection } from "firebase/firestore"; 


import { Button, Form, Input, InputNumber } from "antd";
const Signup = () => {
  const onFinish = async (values) => {
    try {
     await createUserWithEmailAndPassword(auth, values.email, values.password);
     await addDoc(collection(db, "users"), {
      name: values.name,
      number: values.number,
      email : values.email ,
      password : values.password,
     });
    } catch (error) {
      console.log(error);
    }

    console.log("Received values of form: ", values);
  };
  return (
    <div className="signup_container">
      <div className="signup_text">
        <h1>SAYLANI WELFARE</h1>
        <p>ONLINE DISCOUNT STORE</p>
      </div>
      <Form
        name="normal_login"
        className="signup-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="contact"
          rules={[
            {
              required: true,
              message: "Please input your Contact!",
            },
          ]}
        >
          <InputNumber
            prefix={<PhoneOutlined className="site-form-item-icon" />}
            placeholder="Contact"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<AiOutlineMail className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Signup;
