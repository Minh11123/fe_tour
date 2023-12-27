import React from 'react';

import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from "antd";
import {useState} from "react";
import {format, parseISO} from "date-fns";
import dayjs from "dayjs";
import {useNavigate, useParams} from "react-router-dom";
import TourService from "../../service/TourService";
import {useEffect} from "react";
import {openNotificationWithIcon} from "../../component/Notification/Notification";
import TopNav from "../../Home/Layout/TopNav/TopNav";
import Footer from "../../Home/Layout/Footer/Footer";
import LocationService from "../../service/LocationService";

const AddUpdateLocation = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState("");
    const [locationName, setLocationName] = useState("");
    const [information, setInformation] = useState();
    const [image, setImage] = useState(
        "https://wall.vn/wp-content/uploads/2019/11/hinh-anh-phong-canh-da-lat-8.jpg"
    );
    const {id} = useParams();
    useEffect(() => {
        LocationService.getById(id)
            .then((response) => {
                setLocationName(response.data.locationName);
                setInformation(response.data.information);
                setImage(response.data.image);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const title = () => {
        if (id) {
            return (
                <h1 style={{textAlign: "center", fontSize: "30px"}}>Update lcation</h1>
            );
        } else {
            return (
                <h1 style={{textAlign: "center", fontSize: "30px"}}>Add tour </h1>
            );
        }
    };
    const saveLocation= async (e) => {
        e.preventDefault();
        console.log("id " + id);
        if (id) {
            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "jay3krzh");
            data.append("cloud_name", "dshzlfayf");
            const res = await fetch(
                "https://api.cloudinary.com/v1_1/dshzlfayf/image/upload",
                {
                    method: "post",
                    body: data,
                }
            );
            const imageData = await res.json();
            const img = !imageData.secure_url ? image : imageData.secure_url;
            const location = {
                locationName,
                information,
                image: img,
            };
            LocationService.update(id, location)
                .then((response) => {
                    navigate("/manage");
                })
                .catch((error) => {
                    console.log(error);
                });
            openNotificationWithIcon("SUCCESS", "Update Successfully", "success");
        } else {
            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "jay3krzh");
            data.append("cloud_name", "dshzlfayf");
            const res = await fetch(
                "https://api.cloudinary.com/v1_1/dshzlfayf/image/upload",
                {
                    method: "post",
                    body: data,
                }
            );
            const imageData = await res.json();
            const img = !imageData.secure_url ? image : imageData.secure_url;
            const location = {
                locationName,
                information,
                image: img,
            };
            LocationService.createLocation(location)
                .then((response) => {
                    console.log("reponse.data" + response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
            navigate("/manage");
            openNotificationWithIcon("SUCCESS", "Create Successfully", "success");
        }
    };
    const [test, setTest] = useState({imgFile: null, imgSrc: ""});
    const handleChangeFile = (e) => {
        // Lấy file từ event
        let file = e.target.files[0];
        setTest({imgFile: file, imgSrc: ""});

        if (
            file &&
            (file.type === "image/jpeg" ||
                file.type === "image/jpg" ||
                file.type === "image/png")
        ) {
            // Tạo đối tượng để đọc file
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setTest({imgFile: file, imgSrc: e.target.result});
            };
        }
    };
    return (
        <>
            <TopNav/>
            <div
                style={{
                    height: "auto",
                    width: "500px",
                    marginLeft: "550px",
                    marginTop: "100px",
                    border: "1px solid",
                    padding: "20px",
                    borderRadius: "20px",
                    marginBottom: "50px"
                }}
            >
                {title()}
                <Form
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                >
                    <Form.Item label="Location Name">
                        <Input
                            value={locationName}
                            placeholder="Enter location name"
                            name="location_name"
                            onChange={(e) => setLocationName(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Information">
                        <Input
                            value={information}
                            placeholder="Enter information"
                            onChange={(e) => setInformation(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Location's Banner ">
                        <input
                            type="file"
                            accept="image/*"
                            name="url"
                            placeholder="Choose file"
                            onChange={(e) => {
                                setFile(e.target.files[0]);
                                handleChangeFile(e);
                            }}
                        />
                        <br/>
                        {test.imgSrc ? (
                            <img
                                style={{width: 200, height: 100}}
                                src={test.imgSrc}
                                alt="..."
                            />
                        ) : (
                            <></>
                        )}
                        {id && !test.imgSrc ? (
                            <img style={{width: 200, height: 100}} src={image} alt="..."/>
                        ) : (
                            <></>
                        )}
                    </Form.Item>
                    <Form.Item wrapperCol={{offset: 8, span: 14}}>
                        <Button danger ghost onClick={(e) => navigate("/manage")}>
                            Cancel
                        </Button>
                        <Button
                            type="primary"
                            onClick={(e) => saveLocation(e)}
                            className="bg-blue-400 ml-4"
                        >
                            {id ? "Update location" : "update tour"}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <Footer/>
        </>
    );
};
export default AddUpdateLocation;
