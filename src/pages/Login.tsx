import { Button, Card, Form, Input, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { useNavigate } from "react-router";
import { useStore } from "../store/RootStore";
import * as style from "../style/HotelsStyle";

const { Text } = Typography;

export const Login = () => {
  const navigate = useNavigate();
  const rootStore = useStore();
  const { login } = rootStore;

  const onFinish = (values: any) => {
    const result = login(values.login, values.password);

    if (result === "success") navigate("/hotels");
    else {
      alert("Неверный пользователь");
      navigate(0);
    }
  };

  return (
    <Content style={style.formContentStyle}>
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
          <Form.Item {...style.tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>

            <Text onClick={() => navigate("/signup")} style={style.formLinkTextStyle}>
              Create account
            </Text>
          </Form.Item>
        </Form>
      </Card>
    </Content>
  );
};
