import { Button, Card, Form, Input, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { useNavigate } from "react-router";
import { useStore } from "../store/RootStore";

const { Text } = Typography;

export const Login = () => {
  const navigate = useNavigate();
  const rootStore = useStore();
  const { login } = rootStore;

  const onFinish = (values: any) => {
    const res = login(values.login, values.password);

    if (res === "success") {
      navigate("/hotels");
    } else {
      alert("Неверный пользователь");
      navigate(0);
    }
  };

  const tailFormItemLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  return (
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
          scrollToFirstError
          onFinish={onFinish}
        >
          <Form.Item
            label="Login"
            name="login"
            rules={[{ required: true, message: "Please input your Login!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            hasFeedback
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password autoComplete="off" />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>

            <Text
              onClick={() => navigate("/signup")}
              style={{
                display: "block",
                paddingTop: "20px",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Create account
            </Text>
          </Form.Item>
        </Form>
      </Card>
    </Content>
  );
};
