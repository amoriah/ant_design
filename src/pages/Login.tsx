import React from "react";
import { Button, Form, Input } from "antd";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
//сделать валидациб для пароля минимальную хотя бы
export const Login: React.FC = () => (
  <Form
    name="login"
    labelCol={{ span: 8}}
    wrapperCol={{ span: 12 }}
    style={{ maxWidth: 600 }}
    // initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    // onValuesChange={}
    // onFieldsChange={}
    // validateMessages={}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Login"
      name="username"
      rules={[{ required: true, message: "Please input your Login!" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
