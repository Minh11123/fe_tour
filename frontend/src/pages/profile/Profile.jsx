import { ContactsTwoTone, EditFilled } from "@ant-design/icons";
import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserService from "../../service/UserService";
import { Form } from "antd";
import "./profile.css";
import { openNotificationWithIcon } from "../../component/Notification/Notification";
const Profile = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const [data, setData] = useState([]);
  const [showEditAvatar, setShowEditAvatar] = useState(false);
  const getProfile = async () => {
    try {
      const response = await UserService.profile(token);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  console.log(data);
  const formik = useFormik({
    initialValues: {
      ...token,
    },
    onSubmit: async (values) => {
      try {
        const body = {
          fullName: values.fullName ? values.fullName : data.fullName,
          userName: values.userName ? values.userName : data.userName,
          phoneNumber: values.phone ? values.phone : data.phone,
          // password: data.password,
        };
        console.log(body);
        const result = await UserService.updateProfile(token, body);
        console.log(result);
        if (result.status === 200) {
          localStorage.setItem("token", result.data.token);
          openNotificationWithIcon(
            "SUCCESS",
            "Successfully updated information",
            "success"
          );
        } else {
          openNotificationWithIcon(
            "ERROR",
            "Update failed information",
            "error"
          );
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  const navigate = useNavigate();
  return !token ? (
    <NavLink to="/" />
  ) : (
    <>
      <div className="inline-block px-20 w-full bg-white bg-profile border-2 border-gray-300 rounded-lg">
        <button
          type="submit"
          className="mt-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center bottom-4"
          onClick={(e) => navigate("/")}
        >
          Back
        </button>
        <Form
          labelCol={{
            span: 2,
          }}
          wrapperCol={{
            span: 24,
          }}
          layout="horizontal"
          onSubmitCapture={formik.handleSubmit}
        >
          <div style={{ border: "" }} className="w-full drop-shadow">
            <div className="flex justify-center">
              <div className="mt-2 inline-block border-2 border-sky-500 rounded-full mb-12 relative">
                <img
                  className="rounded-full w-28 h-28"
                  src={
                    data.avatar
                      ? data.avatar
                      : "https://nhathauxaydung24h.com/wp-content/uploads/2022/01/avatar-ngau-loi.jpg"
                  }
                  alt={data.avatar}
                />
                <EditFilled
                  className="absolute drop-shadow-lg"
                  style={{
                    color: "white",
                    fontSize: "2rem",
                    position: "absolute",
                    top: "80%",
                  }}
                  onClick={() => {
                    setShowEditAvatar(!showEditAvatar);
                  }}
                />
              </div>
            </div>
            {showEditAvatar ? (
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  {
                    min: 1,
                    message: "Must be between 1 to 50 characters!",
                  },
                  {
                    max: 50,
                    message: "Must be between 8 to 50 characters!",
                  },
                ]}
                onChange={formik.handleChange}
              >
                <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="avatar"
                    >
                      Link your new avatar
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="avatar"
                      type="text"
                      name="avatar"
                      defaultValue={token.avatar}
                      placeholder="Joe.png"
                    />
                  </div>
                </div>
              </Form.Item>
            ) : (
              <></>
            )}
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input your first name!",
                  whitespace: true,
                },
                {
                  max: 50,
                  message: "Must be between 6 to 50 characters!",
                },
              ]}
            >
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="firstname"
                  >
                    Full Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="fullName"
                    type="text"
                    name="fullName"
                    defaultValue={data.fullName}
                    placeholder="Jane"
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="username"
                  >
                    Role
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="role"
                    type="text"
                    name="role"
                    defaultValue={role}
                    placeholder="USER"
                    readOnly
                  />
                </div>
              </div>
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="phone_number"
                  >
                    User Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="userName"
                    type="text"
                    name="userName"
                    placeholder="abc..."
                    defaultValue={data.userName}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="+84..."
                    defaultValue={data.phone}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
            </Form.Item>
            <Form.Item
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    placeholder="example@gmail.com"
                    onChange={formik.handleChange}
                    name="email"
                    defaultValue={token.email}
                  />
                </div>
              </div>
            </Form.Item>
            <Form.Item>
              <div className="relative">
                <button
                  type="submit"
                  className="absolute right-0 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center bottom-4"
                >
                  Save
                </button>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Profile;
