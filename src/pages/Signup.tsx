import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";
import { Content } from "antd/es/layout/layout";
import { useStore } from "../store/rootStore";
import { Button, Card, Form, Input, Typography } from "antd";
import * as style from "../style/HotelsStyle";

const { Text } = Typography;

export const Signup: React.FC = () => {
  const navigate = useNavigate();
  const rootStore = useStore();
  const { signup } = rootStore;

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
    <Content style={style.formContentStyle}>
      <Card
        style={{
          marginTop: "3em",
          width: "400px",
        }}
      >
        <Form
          {...style.formItemLayout}
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
          <Form.Item {...style.tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Signup
            </Button>
            <Text onClick={() => navigate("/login")} style={style.formLinkTextStyle}>
              Already have an account?
            </Text>
          </Form.Item>
        </Form>
      </Card>
    </Content>
  );
};
