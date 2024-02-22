import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Card, Form, Input, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { useStore } from "../store/RootStore";
import { useNavigate } from "react-router";

const { Text } = Typography;

const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 12,
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export const Signup: React.FC = () => {
  const navigate = useNavigate();
  const rootStore = useStore();
  const { signup, users } = rootStore;

  const onFinish = (values: any) => {
    const { login, password } = values;
    const result = signup(uuidv4(), login, password);
    if (result === "success") navigate("/login");
    else {
      alert("Такой пользователь уже существует");
      navigate(0);
    }
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
          width: "400px",
        }}
      >
        <Form
          {...formItemLayout}
          name="register"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          scrollToFirstError
        >
          <Form.Item
            name="login"
            label="login"
            rules={[
              {
                required: true,
                message: "Please input your login!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Signup
            </Button>
            <Text
              onClick={() => navigate("/login")}
              style={{
                display: "block",
                paddingTop: "20px",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Already have an account?
            </Text>
          </Form.Item>
        </Form>
      </Card>
    </Content>
  );
};
