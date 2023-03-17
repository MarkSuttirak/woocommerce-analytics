import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css';
import { Typography, Select, Space, Card, Button, DatePicker, Dropdown, Modal, Switch, Input, Table, Drawer, Checkbox } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faEllipse, faEllipsisVertical, faChartSimple, faChartLine, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';

const CouponsTable = () => {

    const { Title, Text, Paragraph } = Typography;

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const [amountDiscountedTable, setAmountDiscountedTable] = useState(true);
    const [createdTable, setCreatedTable] = useState(true);
    const [expiresTable, setExpiresTable] = useState(true);
    const [typeTable, setTypeTable] = useState(true);

    const [couponsTableOptions, setCouponsTableOptions] = useState(false);
    const showCouponsTableOptions = () => {
      setCouponsTableOptions(true);
    };
    const couponsTableCancel = () => {
      setCouponsTableOptions(false);
    };

    const couponsData = [
      {
        key: '1',
        productTitle: 'teststserf',
        sku: 'testst',
        itemsSold: 2,
        netSales: "$0.00",
        orders:1,
        category:"Uncategorized",
        variations: 2,
        status:"In stock",
        stock: 2,
      },
    ];
    
    const couponsColumns = [
      {
        title: 'Coupon code',
        dataIndex: 'couponCode',
        key: 'couponCode',
        sorter: true,
      },
      {
        title: 'Orders',
        dataIndex: 'orders',
        key: 'orders',
        sorter: true,
      },
      {
        title: 'Amount discounted',
        dataIndex: 'amountDiscounted',
        key: 'itemsSold',
        sorter: true,
        className: (!amountDiscountedTable && 'hidden'),
      },
      {
          title: 'Created',
          dataIndex: 'created',
          key: 'created',
          sorter: true,
          className: (!createdTable && 'hidden'),
        },
        {
          title: 'Expires',
          dataIndex: 'expires',
          key: 'expires',
          sorter: true,
          className: (!expiresTable && 'hidden'),
        },
        {
          title: 'Type',
          dataIndex: 'type',
          key: 'type',
          sorter: true,
          className: (!typeTable && 'hidden'),
        },
    ];

    const onSelectChange = (newSelectedRowKeys) => {
      console.log('selectedRowKeys changed: ', newSelectedRowKeys);
      setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
    };


    return (
        <>
            <div className='mt-4 revenue-table card-with-table'>
                <Card title={
                    <Space>
                        <Title level={5} style={{margin:0}}>Coupons</Title>
                        <Paragraph style={{margin:0}}>Compare</Paragraph>
                        <Input type="text" style={{width:"calc(100% + 40vw)"}} />
                    </Space>
                } extra={
                    <Button type="ghost" onClick={showCouponsTableOptions}>
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </Button>
                }>
                    <Table rowSelection={rowSelection} columns={couponsColumns} dataSource={couponsData} />
                    <div style={{display:"flex",gap:"16px",justifyContent:"center",marginBottom:"20px"}}>
                        <Text><strong>0</strong> Coupons</Text>
                        <Text><strong>0</strong> Orders</Text>
                        <Text><strong>$0.00</strong> Amount discounted</Text>
                    </div>
                </Card>
            </div>

            <Drawer title="Charts" placement="right" width="300px" open={couponsTableOptions} onClose={couponsTableCancel}>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setAmountDiscountedTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Amount discounted</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setCreatedTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Created</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setExpiresTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Expires</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setTypeTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Type</Paragraph>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default CouponsTable;