import { Button, Card, Form, Input } from "antd";
import { Content } from "antd/es/layout/layout";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

//сделать валидациб для пароля минимальную хотя бы
export const Login = () => (
  <Content
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Card
      style={{
        marginTop: "3em",
        width: "350px",
      }}
    >
      <Form
        name="login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
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
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginTop: "15px" }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  </Content>
);
