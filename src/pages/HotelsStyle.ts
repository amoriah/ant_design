export const layoutStyle = {
  // overflow: "hidden",
  width: "calc(50% - 8px)",
  // maxWidth: "calc(50% - 8px)",
};

export const headerStyle: React.CSSProperties = {
  // textAlign: "center",
  color: "#fff",
  position: "sticky",
  top: 0,
  zIndex: 1,
  // width: "100%",
  // display: "flex",
  backgroundColor: "#f4d02e",
};

export const siderStyle: React.CSSProperties = {
  textAlign: "center",
  height: "100vh",
  overflow: "auto",
  position: "fixed",
  paddingTop: "80px",
  left: 0,
  top: 0,
  bottom: 0,
  // lineHeight: "100vh",
  color: "#111",
  backgroundColor: "#fff",
};

export const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  height: "calc(100vh - 64px)",
  // lineHeight: "100vh",
  color: "#111",
  backgroundColor: "#fff",
};
// const onChange: CheckboxProps["onChange"] = (e) => {
//   console.log(`checked = ${e.target.checked}`);
// };

export const headerFlex: React.CSSProperties = {
  justifyContent: "space-between",
  alignItems: "center",
};
