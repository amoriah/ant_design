export const layoutStyle = {
  width: "calc(50% - 8px)",
  backgroundColor: "#fff",
  minWidth: "1200px",
};

export const headerStyle: React.CSSProperties = {
  color: "#111",
  position: "fixed",
  top: 10,
  left: 16,
  right: 16,
  zIndex: 1,
  backgroundColor: "#fff",
  border: "1px solid #f4d02e",
  borderRadius: "30px",
};

export const headerFlex: React.CSSProperties = {
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
};

export const siderStyle: React.CSSProperties = {
  textAlign: "center",
  height: "100vh",
  position: "fixed",
  paddingTop: "80px",
  left: 15,
  top: 15,
  width: "25%",
  minWidth: "300px",
  backgroundColor: "#fff",
};

export const contentStyle: React.CSSProperties = {
  textAlign: "center",
  width: "100%",
  height: "100vh",
  backgroundColor: "#fff",
};

export const contentFlexStyle: React.CSSProperties = {
  width: "100%",
  height: "calc(100vh - 20px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
};

export const hotelCardStyle: React.CSSProperties = {
  width: "70%",
  height: "230px",
  margin: "1.2em",
  borderColor: "#f4d02e",
  display: "flex",
  flexDirection: "row",
  cursor: "pointer",
};

export const imgStyle: React.CSSProperties = {
  borderRadius: "15%",
  margin: "auto",
  height: "260px",
};

export const accountFieldStyle: React.CSSProperties = {
  marginTop: "30px",
  display: "flex",
  flexDirection: "column",
};

export const accountTextStyle: React.CSSProperties = {
  fontSize: "16px",
  border: "1px solid grey",
  padding: "10px",
  borderRadius: "6px",
  width: "300px",
  display: "flex",
  justifyContent: "space-between",
};

export const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 12,
  },
};

export const tailFormItemLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export const formLinkTextStyle: React.CSSProperties = {
  display: "block",
  paddingTop: "20px",
  textDecoration: "underline",
  cursor: "pointer",
};

export const formContentStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const carouselStyle: React.CSSProperties = {
  color: "#111",
  height: "300px",
  marginTop: "20px",
};
