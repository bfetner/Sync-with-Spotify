import React, { Component, useState, setState, Link } from "react";
import "antd/dist/antd.css";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Modal,
  message,
  Select,
  Radio,
  Col,
} from "antd";
import Axios from "axios";
import "../css/Create.css";
import Room from "./Room";
/* import { serverPath } from '../path.js' */

import {
  withRouter,
  useHistory,
  useLocation,
  Router,
  Redirect,
} from "react-router-dom";
import Footer from "./Footer";

const genreOptions = [
  { label: "Pop", value: "Pop" },
  { label: "Rock", value: "Rock" },
  { label: "Hip Hop", value: "Hip Hop" },
  { label: "Electronic", value: "Electronic" },
  { label: "Soundtrack", value: "Soundtrack" },
  { label: "Indie", value: "Indie" },
  { label: "R&B", value: "R&B" },
  { label: "K-Pop", value: "K-Pop" },
  { label: "Lo-fi", value: "Lo-fi" },
  { label: "Country", value: "Country" },
  { label: "Latin", value: "Latin" },
  { label: "Christian", value: "Christian" },
  { label: "Jazz", value: "Jazz" },
  { label: "Classical", value: "Classical" },
];

const albumList = [
  {
    title: "Pick Up Your Feelings",
    url: "./assets/1.PNG",
  },
  {
    title: "Hunger",
    url: "./assets/2.PNG",
  },
  {
    title: "no love",
    url: "./assets/3.PNG",
  },
  {
    title: "Killuminati",
    url: "./assets/4.PNG",
  },

  {
    title: "no,no",
    url: "./assets/5.PNG",
  },
  {
    title: "Crime Pays",
    url: "./assets/6.jpg",
  },
  {
    title: "Ninety",
    url: "./assets/7.jpg",
  },

  {
    title: "Souldfood",
    url: "./assets/8.jpg",
  },
  {
    title: "Violent Crimes",
    url: "./assets/9.jpg",
  },
  {
    title: "Been Waiting!",
    url: "./assets/10.jpg",
  },

  {
    title: "Leray",
    url: "./assets/11.jpg",
  },
  {
    title: "HONEST",
    url: "./assets/12.jpg",
  },
  {
    title: "WOLF",
    url: "./assets/13.jpg",
  },

  {
    title: "Trying",
    url: "./assets/14.jpg",
  },
  {
    title: "A Calabasas Freestyle",
    url: "./assets/15.jpg",
  },
  {
    title: "Father Stretch My Hands",
    url: "./assets/16.jpg",
  },

  {
    title: "Frank's Track",
    url: "./assets/17.jpg",
  },
  {
    title: "No More Parties In LA",
    url: "./assets/18.jpg",
  },
  {
    title: "Champion",
    url: "./assets/19.png",
  },
  {
    title: "Once Upon A Time(Freestyle)",
    url: "./assets/20.PNG",
  },
];
let room_url = albumList[Math.floor(Math.random() * 19)];
const { Option } = Select;

const Create = (props) => {
  console.log(props);

  const [roomName, setRoomName] = useState();
  const [roomGenre, setGenre] = useState();
  const [roomStatus, setRoomStatus] = useState(1);
  const [tosStatus, setTosStatus] = useState(false);
  const [noOfUsers, setNoOfUsers] = useState();

  const insertData = (rn, rg) => {
    const roomId = Math.floor(Math.random() * 2000000000);
    console.log(
      "roomName: " + rn + ", roomGenre: " + rg + ", roomId: " + roomId
    );
    var data = {
      room_name: rn,
      genre: rg,
      roomImageUrl: room_url.url,
      id: roomId,
    };
    console.log("insertData");
    console.log(data);
    Axios.post("http://localhost:8000/api/adds/", data)
      /* Axios.post(serverPath.local + 'api/adds/', data) */
      .then((res) => {
        console.log("hi");
        setRoomName("");
        setGenre("");
      })
      .catch((er) => console.log(er));
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const validateRN = (validRN) => {
    if (validRN && validRN.length > 0) {
      return true;
    }
    return false;
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const history = useHistory();

  const updatePropHistory = () => {
    console.log(props);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log(modalRoomName);
    console.log(validateRN(modalRoomName));
    console.log(modalRoomGenre);
    console.log(modalRoomStatus);
    console.log(modalTosStatus);
    if (validateRN(modalRoomName) && modalRoomGenre && modalTosStatus) {
      console.log("handleOk");

      props.history.push(
        "/Room/" +
          modalRoomGenre +
          "/" +
          modalRoomName +
          "/" +
          modalUsers +
          "/" +
          0
      );
    }
  };

  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const history1 = useHistory();

  const showModal1 = () => {
    setIsModalVisible1(true);
  };

  const handleOk1 = () => {
    setIsModalVisible1(false);
  };
  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };

  const [modalMessage, setModalMessage] = useState();
  const [successModalMessage, setSuccessModalMessage] = useState();
  const [modalRoomName, setModalRoomName] = useState();
  const [modalRoomGenre, setModalRoomGenre] = useState();
  const [modalRoomStatus, setModalRoomStatus] = useState();
  const [modalTosStatus, setModalTosStatus] = useState();
  const [modalUsers, setModalUsers] = useState();

  const onClickFunks = () => {
    console.log("roomStatus");
    console.log(roomStatus);
    let users = Math.floor(Math.random() * 100);
    setNoOfUsers(users);
    const clickRoomName = roomName;
    const clickRoomGenre = roomGenre;
    const clickRoomStatus = roomStatus;
    const clickTosStatus = tosStatus;
    const clickUsers = noOfUsers;
    setModalUsers(clickUsers);
    setModalRoomName(clickRoomName);
    setModalRoomGenre(clickRoomGenre);
    if (clickRoomStatus == 1) {
      setModalRoomStatus("Public Room");
    } else {
      setModalRoomStatus("Private Room");
    }
    setModalTosStatus(clickTosStatus);

    setModalMessage("");
    setSuccessModalMessage("");
    if (!validateRN(clickRoomName)) {
      setModalMessage("Invalid roomname, must input at least one character.");
      showModal();
    } else if (!clickRoomGenre) {
      setModalMessage("Please select a genre from the dropdown menu.");
      showModal();
    } else if (!clickTosStatus) {
      setModalMessage("You must accept the terms for service.");
      showModal();
    } else {
      setSuccessModalMessage(
        "You have successfully created a room! Press ok to continue."
      );
      showModal();
      insertData(clickRoomName, clickRoomGenre);
    }
  };

  const confirmTos = () => {
    setTosStatus(!tosStatus);
  };

  const formItemLayout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 0,
    },
  };

  const otherItemLayout = {
    wrapperCol: {
      span: 0,
      offset: 5,
    },
  };

  return (
    <div className="create-main">
      <Form
        {...formItemLayout}
        className="text-color"
        /*  style={{ marginTop: "150px", marginLeft: "400px" }} */
      >
        <Form.Item
          label="Roomname"
          name="roomname"
          rules={[
            {
              required: true,
              message: "Please input a room name.",
            },
          ]}
          //rules={[{ required: true, message: "Please input your roomname!" }]}
        >
          <Input
            placeholder="e.g. Bill's Room of Splendor"
            onChange={(e) => {
              setRoomName(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Genre"
          name="genre"
          rules={[
            {
              required: true,
              message: "Please select a genre.",
            },
          ]}
          //rules={[{ required: true, message: 'Province is required' }]}
        >
          <Select
            placeholder="Select genre"
            options={genreOptions}
            onChange={(value) => {
              setGenre(value);
            }}
          >
            {/*             <Option value="Rock">Rock</Option>
            <Option value="Pop">Pop</Option>
            <Option value="Classical">Classical</Option>
            <Option value="Country">Country</Option> */}
          </Select>
        </Form.Item>

        <Form.Item {...otherItemLayout}>
          <Radio.Group
            onChange={(e) => {
              setRoomStatus(e.target.value);
            }}
            value={roomStatus}
          >
            <Radio className="text-color" value={1}>
              Public Room
            </Radio>
            <Radio className="text-color" value={2}>
              Private Room
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item {...otherItemLayout} className="text-color">
          <Checkbox
            onChange={confirmTos}
            required="required"
            className="text-color"
          ></Checkbox>
          &nbsp;&nbsp;Click here to accept our{" "}
          <a onClick={() => showModal1()} style={{ color: "var(--color3)" }}>
            Terms of Service
          </a>
          .
        </Form.Item>
        <Form.Item {...otherItemLayout} style={{ marginBottom: "0px" }}>
          <Button
            type="primary"
            htmlType="submit"
            /* href={"/Room/" + roomGenre + "/" + roomName} */
            onClick={() => onClickFunks()}
            className="sync-button-color"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Modal
        title="Room Creation"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleOk}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>
          <strong>Room Name:</strong> {modalRoomName}
        </p>
        <p>
          <strong>Genre:</strong> {modalRoomGenre}
        </p>
        <p>
          <strong>Status:</strong> {modalRoomStatus}
        </p>
        <p>{successModalMessage}</p>
        <p style={{ color: "red" }}>{modalMessage}</p>
      </Modal>

      <Modal
                title="Terms of Service" 
                visible={isModalVisible1} 
                onOk={handleOk1} 
                onCancel={handleCancel1}
                cancelButtonProps={{ style: { display: "none" } }}
                okText="OK"
                >
                    <p>
                    <h3>Terms and Conditions</h3>
                    Last updated: April 22, 2021<br/>

                    Please read these terms and conditions carefully before using Our Service.
                    <br/><br/>
                    <h3>Interpretation and Definitions</h3>
                    <h4>Interpretation</h4>
                    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                    <br/><br/>
                    <h4>Definitions</h4>
                    For the purposes of these Terms and Conditions:
                    <ul>
                        <li>Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                        </li>
                        <li>Country refers to: California, United States
                        </li>
                        <li>Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to SYNC.
                        </li>
                        <li>Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.
                        </li>
                        <li>Service refers to the Website.
                        </li>
                        <li>Terms and Conditions (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Terms and Conditions Generator.
                        </li>
                        <li>Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
                        </li>
                        <li>Website refers to SYNC, accessible from http://synccommunity.com/
                        </li>
                        <li>You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                        </li>
                    </ul>
                    <h3>Acknowledgment</h3>
                    <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                    </p>
                    <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                    </p>
                    <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
                    </p>
                    <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
                    </p>
                    <p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
                    </p>
                    <br/><br/>
                    <h3>Links to Other Websites</h3>
                    <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
                    </p>
                    <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
                    </p>
                    <p>
                    We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
                    </p><br/><br/>
                    <h3>Termination</h3>
                    <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
                    </p>
                    <p>Upon termination, Your right to use the Service will cease immediately.
                    </p><br/><br/>
                    <h3>Limitation of Liability</h3>
                    <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
                    </p>
                    <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
                    </p>
                    <p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
                    </p>
                    <h3>"AS IS" and "AS AVAILABLE" Disclaimer</h3>
                    <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
                    </p>
                    <p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.
                    </p>
                    <p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
                    </p><br/><br/>
                    <h3>Governing Law</h3>
                    <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
                    </p><br/><br/>
                    <h3>Disputes Resolution</h3>
                    <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
                    </p><br/><br/>
                    <h3>For European Union (EU) Users</h3>
                    <p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.
                    </p><br/><br/>
                    <h3>United States Legal Compliance</h3>
                    <p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
                    </p><br/><br/>
                    <h3>Severability and Waiver</h3>
                    <h4>Severability</h4>
                    <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
                    </p>
                    <h4>Waiver</h4>
                    <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent breach.
                    </p><br/><br/>
                    <h3>Translation Interpretation</h3>
                    <p>These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.
                    </p><br/><br/>
                    <h3>Changes to These Terms and Conditions</h3>
                    <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
                    </p>
                    <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
                    </p>
                  </p>
                </Modal>
     
    </div>
  );
};

export default withRouter(Create);
