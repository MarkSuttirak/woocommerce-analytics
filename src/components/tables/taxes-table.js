import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css';
import { Typography, Select, Space, Card, Button, DatePicker, Dropdown, Modal, Switch, Input, Table, Drawer, Checkbox } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faEllipse, faEllipsisVertical, faChartSimple, faChartLine, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';

const TaxesTable = () => {

    const { Title, Text, Paragraph } = Typography;

    const [rateTable, setRateTable] = useState(true);
    const [totalTaxTable, setTotalTaxTable] = useState(true);
    const [orderTaxTable, setOrderTaxTable] = useState(true);
    const [shippingTaxTable, setShippingTaxTable] = useState(true);

    const [taxesTableOptions, setTaxesTableOptions] = useState(false);
    const showTaxesTableOptions = () => {
      setTaxesTableOptions(true);
    };
    const taxesTableCancel = () => {
      setTaxesTableOptions(false);
    };

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const taxesData = [
      {
        key: '1',
        date: 'March 1, 2023',
        orders: 0,
        grossSales: '$0.00',
        returns: '$0.00',
        coupons: '$0.00',
        netSales: '$0.00',
        taxes: '$0.00',
        shipping: '$0.00',
        totalSales: '$0.00',
      },
    ];
    
    const taxesColumns = [
      {
        title: 'Tax code',
        dataIndex: 'taxCode',
        key: 'taxCode',
        sorter: true,
      },
      {
        title: 'Rate',
        dataIndex: 'rate',
        key: 'rate',
        sorter: true,
        className: (!rateTable && 'hidden'),
      },
      {
        title: 'Total tax',
        dataIndex: 'totalTax',
        key: 'totalTax',
        sorter: true,
        className: (!totalTaxTable && 'hidden'),
      },
      {
          title: 'Order tax',
          dataIndex: 'orderTax',
          key: 'orderTax',
          sorter: true,
          className: (!orderTaxTable && 'hidden'),
        },
        {
          title: 'Shipping tax',
          dataIndex: 'shippingTax',
          key: 'shippingTax',
          sorter: true,
          className: (!shippingTaxTable && 'hidden'),
        },
        {
          title: 'Orders',
          dataIndex: 'orders',
          key: 'orders',
          sorter: true,
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
            <div className='mt-4 taxes-table card-with-table'>
                <Card title={
                    <Space>
                        <Title level={5} style={{margin:0}}>Taxes</Title>
                        <Paragraph style={{margin:0}}>Compare</Paragraph>
                        <Input type="text" style={{width:"calc(100% + 40vw)"}} />
                    </Space>
                } extra={
                    <Button type="ghost" onClick={showTaxesTableOptions}>
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </Button>
                }>
                    <Table rowSelection={rowSelection} columns={taxesColumns} dataSource={taxesData}/>
                    <div style={{display:"flex",gap:"16px",justifyContent:"center",marginBottom:"20px"}}>
                        <Text><strong>0</strong> tax codes</Text>
                        <Text><strong>$0.00</strong> total tax</Text>
                        <Text><strong>$0.00</strong> order tax</Text>
                        <Text><strong>$0.00</strong> shipping tax</Text>
                        <Text><strong>0</strong> orders</Text>
                    </div>
                </Card>
            </div>

            <Drawer title="Charts" placement="right" width="300px" open={taxesTableOptions} onClose={taxesTableCancel}>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setRateTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Rate</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setTotalTaxTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Total tax</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setOrderTaxTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Order tax</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setShippingTaxTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Shipping tax</Paragraph>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default TaxesTable;