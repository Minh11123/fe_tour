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

const AddTour = () => {
    const navigate = useNavigate();
    const [tourName, setTourName] = useState("");
    const [rate, setRate] = useState();
    const [price, setPrice] = useState();
    const [pointOfDepature, setPointOfDeparture] = useState("");
    const [departurePoint, setDeparturePoint] = useState("");
    const [information, setInformation] = useState("");
    const [image, setImage] = useState(
        "https://wall.vn/wp-content/uploads/2019/11/hinh-anh-phong-canh-da-lat-8.jpg"
    );
    const [file, setFile] = useState("");
    const [dateTour, setDateTour] = useState("");
    const handleDateChange = (date) => {
        const d = dayjs(date).format("YYYY-MM-DD");
        setDateTour(d);
    };
    const {id} = useParams();
    useEffect(() => {
        TourService.getTourById(id)
            .then((response) => {
                setTourName(response.data.tourName);
                setPrice(response.data.price);
                setInformation(response.data.information);
                setDateTour(response.data.dateTour);
                setDeparturePoint(response.data.departurePoint);
                setPointOfDeparture(response.data.pointOfDepature);
                setImage(response.data.image);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const title = () => {
        if (id) {
            return (
                <h1 style={{textAlign: "center", fontSize: "30px"}}>Update tour</h1>
            );
        } else {
            return (
                <h1 style={{textAlign: "center", fontSize: "30px"}}>Add tour </h1>
            );
        }
    };
    const saveTour = async (e) => {
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
            const tour = {
                tourName,
                rate,
                price,
                pointOfDepature,
                departurePoint,
                information,
                dateTour,
                image: img,
            };
            TourService.updateTour(id, tour)
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
            const tour = {
                tourName,
                rate,
                price,
                pointOfDepature,
                departurePoint,
                information,
                dateTour,
                image: img,
            };
            TourService.createTour(tour)
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
                    <Form.Item label="Tour Name">
                        <Input
                            value={tourName}
                            placeholder="Enter tour name"
                            name="tour_name"
                            onChange={(e) => setTourName(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Information">
                        <Input
                            value={information}
                            placeholder="Enter information"
                            onChange={(e) => setInformation(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Price">
                        <Input
                            value={price}
                            placeholder="Enter price"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Point Of Departure">
                        <Input
                            value={pointOfDepature}
                            placeholder=""
                            name="a"
                            onChange={(e) => setPointOfDeparture(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Departure Point">
                        <Input
                            value={departurePoint}
                            placeholder=""
                            name="b"
                            onChange={(e) => setDeparturePoint(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Date Tour">
                        <Input
                            value={dateTour}
                            placeholder=""
                            name="b"
                            onChange={(e) => setDateTour(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Tour's Banner ">
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
                            onClick={(e) => saveTour(e)}
                            className="bg-blue-400 ml-4"
                        >
                            {id ? "Update tour" : "Create tour"}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <Footer/>
        </>
    );
};
export default AddTour;
