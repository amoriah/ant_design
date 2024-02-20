import { Col, Divider, Row, Table, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import { AppLayout } from "../components/AppLayout";
import { columns, dataSource } from "../data/tableData";
import { accountFieldStyle, accountTextStyle } from "./HotelsStyle";

const { Text, Title } = Typography;

const Component = () => {
  const [name, setName] = useState("defaultName");
  const [age, setAge] = useState("18");
  const [phone, setPhone] = useState("89990000000");
  const [gender, setGender] = useState("male");

  const accountFieldsItems = [
    {
      title: "Имя",
      value: name,
      handle: setName,
    },
    {
      title: "Возраст",
      value: age,
      handle: setAge,
    },
    {
      title: "Телефон",
      value: phone,
      handle: setPhone,
    },
    {
      title: "Пол",
      value: gender,
      handle: setGender,
    },
  ];

  const fieldsItems = accountFieldsItems.map((item) => {
    return (
      <Row style={accountFieldStyle}>
        <Title level={4}>{item.title}</Title>
        <Text editable={{ onChange: item.handle }} style={accountTextStyle}>
          {item.value}
        </Text>
      </Row>
    );
  });

  return (
    <Content style={{ margin: "0 100px" }}>
      <Col>{fieldsItems}</Col>
      <Divider style={{ marginTop: "30px" }}>История бронирований</Divider>
      <Table dataSource={dataSource} columns={columns} />
    </Content>
  );
};

export const Account = () => {
  return <AppLayout content={<Component />} />;
};
