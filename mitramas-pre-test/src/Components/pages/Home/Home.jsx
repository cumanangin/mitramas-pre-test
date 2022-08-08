import axios from "axios";
import { Table } from "antd";
import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";

const Home = () => {
  const urlLogin = "https://mitramas-test.herokuapp.com/auth/login";

  const fetchData = () => {
    axios
      .post(urlLogin, {
        email: "akun1@mig.id",
        password: "45768D1F",
      })
      .then((response) => {
        //console.log(response);
        localStorage.setItem("accessToken", response.data.access_token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const urlGetData = "https://mitramas-test.herokuapp.com/customers";

  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    const token = localStorage.getItem("accessToken");
    setIsLoading(true);
    axios
      .get(urlGetData, {
        headers: {
          authorization: `${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setDataSource(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
    getData();
  }, []);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
      sorter: (record1, record2) => record1.name.localeCompare(record2.name),
    },
    {
      key: "3",
      title: "Address",
      dataIndex: "address",
    },
    {
      key: "4",
      title: "Country",
      dataIndex: "country",
    },
    {
      key: "5",
      title: "Phone Number",
      dataIndex: "phone_number",
    },
    {
      key: "6",
      title: "Job Title",
      dataIndex: "job_title",
    },
    {
      key: "7",
      title: "Status",
      dataIndex: "status",
      render: (completed) => {
        return <p>{completed ? "Active" : "In Active"}</p>;
      },
      filters: [
        {
          text: "Active",
          value: true,
        },
        {
          text: "In Active",
          value: false,
        },
      ],
      onFilter: (value, record) => {
        return record.status === value;
      },
    },
  ];

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  return (
    <div>
      <Table
        loading={isLoading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          current: page,
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
      ></Table>
    </div>
  );
};

export default Home;
