import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 220px;
`;

export const AttachmentPreview = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;
