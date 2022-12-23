import React from 'react';
import { LogoImage } from "./styles";
import logoImage from "../../../../assets/qr-code.png";

export const Logo = ({ children }) => {
  return (<LogoImage source={logoImage}  />);
}

