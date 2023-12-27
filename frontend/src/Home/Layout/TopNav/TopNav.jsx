/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { TopNavStyle, Logo, MenuItem, Avatar, SelectList } from "./index.style";
import LogoImg from "../../../img/logo_2.png";
import AvatarImg from "../../../img/thu_1.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, Space } from "antd";
import { openNotificationWithIcon } from "../../../component/Notification/Notification";
import Dropdown from "antd/es/dropdown/dropdown";
const TopNav = (props) => {
  const [value, setValue] = useState("en");
  const userLogin = localStorage.getItem("token");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const role = localStorage.getItem("role");
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };
  const menuDropdown = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <NavLink to="/profile" className=" text-black">
              Profile
            </NavLink>
          ),
        },
        {
          key: "2",
          label:
            userLogin?.role === "admin" ? (
              <NavLink to="/admin" className=" text-black">
                Admin Management
              </NavLink>
            ) : (
              <NavLink to="/enrolled-course" className=" text-black">
                My Favourite
              </NavLink>
            ),
        },

        {
          key: "3",
          label: (
            <NavLink
              to="/"
              className=" text-black"
              onClick={() => {
                openNotificationWithIcon(
                  "ERROR",
                  "Sorry this feature is being updated!!",
                  "error"
                );
              }}
            >
              Settings
            </NavLink>
          ),
        },
        {
          key: "5",
          danger: true,
          label: (
            <button
              className="font-bold "
              onClick={() => {
                logout();
              }}
            >
              LOGOUT
            </button>
          ),
        },
      ]}
    />
  );

  const navigate = useNavigate();
  const dropdownHeader = () => (
    <>
      <Avatar src={AvatarImg} variant="rounded" />
      <Dropdown overlay={menuDropdown}>
        <Space>
          Hello,
          <NavLink to="/profile" className="!text-black !font-bold">
            {userLogin.username}
          </NavLink>
        </Space>
      </Dropdown>
    </>
  );

  return (
    <TopNavStyle>
      <div className="appBar">
        <div className="toolbar">
          <div
            className="headLogo cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Logo src={LogoImg} />
            <p>WORLD TRAVEL</p>
          </div>
          <div className="listItem">
            <div className={`container `}>
              <div
                onClick={() => {
                  navigate("/");
                }}
              >
                HOME
              </div>
            </div>
            {role === "MANAGER" ? (
              <div className={`container`}>
                <div
                  onClick={() => {
                    navigate("/manage");
                  }}
                >
                  MANAGE
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="headRight">
            <SelectList value={value} onChange={handleChange}>
              <MenuItem value="en" selected="selected">
                ENGLISH(UK)
              </MenuItem>
              <MenuItem value="vi">VIETNAMESE</MenuItem>
            </SelectList>

            {userLogin ? (
              dropdownHeader()
            ) : (
              <>
                <div className="items-center flex-shrink-0 grid grid-cols-2 gap-2">
                  <hr
                    style={{
                      height: "40px",
                      width: "1px",
                      backgroundColor: "gray",
                    }}
                    className="absolute"
                  ></hr>
                  <button
                    className="w-full !rounded-none col-span-1 font-semibold "
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Login
                  </button>
                  <button
                    // className="text-lg col-span-1 bg-orange-100 uppercase text-orange-500 font-semibold  py-2 px-8 border border-orange-300 hover:border-transparent rounded-sm duration-500 hover:bg-orange-300 hover:!text-white"
                    className="w-full col-span-1 bg-orange-100 hover:bg-orange-300 text-orange-700 font-semibold hover:text-white py-1 px-4 border  border-orange-300 hover:border-transparent rounded-sm duration-500"
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    Register
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </TopNavStyle>
  );
};

export default TopNav;
