import React from "react";
import logo from "./opensea.svg";

import {
  ShoppingCart,
  AccountBalanceWalletOutlined,
  Menu,
  FilterList,
  AccountCircleOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
function Header() {
  const [searchInput, setSearchInput] = React.useState("");

  return (
    <div className='header flex flex-row p-[16px] items-center drop-shadow-md'></div>
  );
}

export default Header;
