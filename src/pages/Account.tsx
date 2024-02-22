import { Col, Divider, Row, Table, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { observer } from "mobx-react-lite";
import { AppLayout } from "../components/AppLayout";
import { HistoryTable } from "../components/HistoryTable";
import { columns, dataSource } from "../data/tableData";
import { useStore } from "../store/RootStore";
import { UserModelType } from "../store/usersStore";
import { accountFieldStyle, accountTextStyle } from "./HotelsStyle";

const { Text, Title } = Typography;

type fieldType = {
  title: string;
  key: keyof UserModelType;
  value: string | undefined;
};

const Component = observer(() => {
  const rootStore = useStore();
  const { session, setValue } = rootStore;

  const accountFieldsItems: fieldType[] = [
    {
      title: "Логин",
      key: "login",
      value: session.session?.login,
    },
    {
      title: "Имя",
      key: "name",
      value: session.session?.name,
    },
    {
      title: "Возраст",
      key: "age",
      value: session.session?.age,
    },
    {
      title: "Телефон",
      key: "phone",
      value: session.session?.phone,
    },
  ];

  const fieldsItems = accountFieldsItems.map((item, i) => {
    return (
      <Row style={accountFieldStyle} key={i}>
        <Title level={4}>{item.title}</Title>
        <Text
          editable={{
            onChange: (value: string) => {
              setValue(value, session.session!.userId, item.key);
            },
          }}
          style={accountTextStyle}
        >
          {item.value}
        </Text>
      </Row>
    );
  });

  return (
    <Content style={{ margin: "0 100px" }}>
      <Col>{fieldsItems}</Col>
      <HistoryTable />
      {/* <Divider style={{ marginTop: "30px" }}>История бронирований</Divider>
      <Table dataSource={dataSource} columns={columns} /> */}
    </Content>
  );
});

export const Account = () => {
  return <AppLayout content={<Component />} />;
};
