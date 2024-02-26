import { Col, Row, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { observer } from 'mobx-react-lite';
import components from '../components';
import { useStore } from '../store/RootStore';
import { UserModelType } from '../store/usersStore';
import * as style from '../style/HotelsStyle';
import { v4 as uuidv4 } from 'uuid';

const { Text, Title } = Typography;

type fieldType = {
  title: string;
  key: keyof UserModelType;
  value: string | undefined;
};

const Component = observer(() => {
  const rootStore = useStore();
  const { session, setAccountValue } = rootStore;

  const accountFieldsItems: fieldType[] = [
    {
      title: 'Логин',
      key: 'login',
      value: session.session?.login,
    },
    {
      title: 'Имя',
      key: 'name',
      value: session.session?.name,
    },
    {
      title: 'Возраст',
      key: 'age',
      value: session.session?.age,
    },
    {
      title: 'Телефон',
      key: 'phone',
      value: session.session?.phone,
    },
  ];

  function isNumeric(str: string) {
    return /^\d+$/.test(str);
  }

  const changeHandle = (value: string, key: keyof UserModelType) => {
    if (key === 'phone') {
      if (!isNumeric(value) || value.length !== 11) {
        alert('Введите правильный номер');
        return;
      }
    }
    if (key === 'age') {
      const num = Number(value);
      if (!isNumeric(value) || num > 130) {
        alert('Введите реальный возраст');
        return;
      }
      setAccountValue(value, session.session!.userId, key);
    }
  };

  const fieldsItems = accountFieldsItems.map(item => {
    return (
      <Row style={style.accountFieldStyle} key={uuidv4()}>
        <Title level={4}>{item.title}</Title>
        <Text
          editable={{
            onChange: (value: string) => {
              changeHandle(value, item.key);
            },
            onStart: () => console.log(),
          }}
          style={style.accountTextStyle}
        >
          {item.value}
        </Text>
      </Row>
    );
  });

  return (
    <Content style={{ margin: '0 100px' }}>
      <Col>{fieldsItems}</Col>
      <components.HistoryTable />
    </Content>
  );
});

export const Account = () => {
  return <components.AppLayout content={<Component />} />;
};
