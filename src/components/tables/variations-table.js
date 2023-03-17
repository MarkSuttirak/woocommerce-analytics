import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css';
import { Typography, Select, Space, Card, Button, DatePicker, Dropdown, Modal, Switch, Input, Table, Drawer, Checkbox } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faEllipse, faEllipsisVertical, faChartSimple, faChartLine, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';

const VariationsTable = () => {

    const { Title, Text, Paragraph } = Typography;

    const [skuTable, setSkuTable] = useState(true);
    const [ordersTable, setOrdersTable] = useState(true);
    const [statusTable, setStatusTable] = useState(true);
    const [stockTable, setStockTable] = useState(true);

    const [variationsTableOptions, setVariationsTableOptions] = useState(false);
    const showVariationsTableOptions = () => {
      setVariationsTableOptions(true);
    };
    const variationsTableCancel = () => {
      setVariationsTableOptions(false);
    };

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const variationsData = [
      {
        key: '1',
        productOrVariationTitle: 'testsets',
        sku: 'TES1000',
        itemsSold: 1,
        netSales: '$0.00',
        orders: 0,
        status: 'In stock',
        stock: 800
      },
      {
          key: '2',
          productOrVariationTitle: 'testggdgffddgfsets',
          sku: 'TES1001',
          itemsSold: 3,
          netSales: '$0.00',
          orders: 0,
          status: 'In stock',
          stock: 400
        },
    ];
    
    
  
    const variationsColumns = [
      {
        title: 'Product / Variation title',
        dataIndex: 'productOrVariationTitle',
        key: 'productOrVariationTitle',
        sorter: true,
      },
      {
        title: 'SKU',
        dataIndex: 'sku',
        key: 'sku',
        sorter: true,
        className: (!skuTable && 'hidden'),
      },
      {
        title: 'Items sold',
        dataIndex: 'itemsSold',
        key: 'itemsSold',
        sorter: true,
      },
      {
          title: 'Net sales',
          dataIndex: 'netSales',
          key: 'netSales',
          sorter: true,
        },
        {
          title: 'Orders',
          dataIndex: 'orders',
          key: 'orders',
          sorter: true,
          className: (!ordersTable && 'hidden'),
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          sorter: true,
          className: (!statusTable && 'hidden'),
        },
        {
          title: 'Stock',
          dataIndex: 'stock',
          key: 'stock',
          sorter: true,
          className: (!stockTable && 'hidden'),
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
            <div className='mt-4 variations-table card-with-table'>
                <Card title={
                    <Title level={5} style={{margin:0}}>Variations</Title>
                } extra={
                    <Space>
                        <Button>
                            Compare
                        </Button>
                        <Button type="ghost" onClick={showVariationsTableOptions}>
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </Button>
                    </Space>
                }>
                    <Table rowSelection={rowSelection} columns={variationsColumns} dataSource={variationsData}/>
                    <div style={{display:"flex",gap:"16px",justifyContent:"center",marginBottom:"20px"}}>
                        <Text><strong>0</strong> vairations sold</Text>
                        <Text><strong>0</strong> items sold</Text>
                        <Text><strong>$0.00</strong> Net sales</Text>
                        <Text><strong>0</strong> Orders</Text>
                    </div>
                </Card>
            </div>

            <Drawer title="Charts" placement="right" width="300px" open={variationsTableOptions} onClose={variationsTableCancel}>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setSkuTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>SKU</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setOrdersTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Orders</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setStatusTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Status</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setStockTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Stock</Paragraph>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default VariationsTable;