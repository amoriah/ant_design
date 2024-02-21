import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Card, Form, Input } from "antd";
import { Content } from "antd/es/layout/layout";
import { useStore } from "../store/RootStore";
import { useNavigate } from "react-router";

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
  const { registerUser, users } = rootStore;

  const onFinish = (values: any) => {
    console.log("values", values);
    const { login, password } = values;
    const result = registerUser(uuidv4(), login, password);
    console.log("users from register=", users);
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
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Content>
  );
};
