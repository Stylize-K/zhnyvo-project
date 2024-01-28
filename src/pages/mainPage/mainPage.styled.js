import { styled } from "@mui/system";

export const MainButton = styled("Button")({
  display: "flex",
  padding: "0px 16px",
  gap: "16px",
  textAlign: "start",
  height: "88px",
  minWidth: "182px",
  alignItems: "center",
  alignSelf: "stretch",
  flex: "1 0 0",
  borderRadius: "16px",
  background: "#FFF",
  boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.12)",
});

export const FatButton = styled("Button")({
  textAlign: "start",
  display: "flex",
  height: "88px",
  width: "100%",
  padding: "0px 12px 0px 16px",
  margin: "8px 0 8px 0",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
  flex: "1 0 0",
  alignSelf: "stretch",
  borderRadius: "16px",
  background: "#FFF",
  boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.12)",
});

export const IconBox = styled("Box")({
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "20px",
  background: "#CDEE9A",
});
