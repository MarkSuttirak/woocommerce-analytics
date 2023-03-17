import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css';
import { Typography, Select, Space, Card, Button, DatePicker, Dropdown, Modal, Switch, Input, Table, Drawer, Checkbox } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faEllipse, faEllipsisVertical, faChartSimple, faChartLine, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';

const ProductsTable = () => {

    const { Text, Paragraph, Title } = Typography;

    const [skuTable, setSkuTable] = useState(true);
    const [ordersTable, setOrdersTable] = useState(true);
    const [categoryTable, setCategoryTable] = useState(true);
    const [variationsTable, setVariationsTable] = useState(true);
    const [statusTable, setStatusTable] = useState(true);
    const [stockTable, setStockTable] = useState(true);

    const [productTableOptions, setProductTableOptions] = useState(false);
    const showProductTableOptions = () => {
      setProductTableOptions(true);
    };
    const productTableCancel = () => {
      setProductTableOptions(false);
    };

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

      const productData = [
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
    
      const productColumns = [
        {
          title: 'Product title',
          dataIndex: 'productTitle',
          key: 'productTitle',
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
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            sorter: true,
            className: (!categoryTable && 'hidden'),
          },
          {
            title: 'Variations',
            dataIndex: 'variations',
            key: 'variations',
            sorter: true,
            className: (!variationsTable && 'hidden'),
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
            <div className='mt-4 products-table card-with-table'>
                <Card title={
                    <Space>
                        <Title level={5} style={{margin:0}}>Products</Title>
                        <Paragraph style={{margin:0}}>Compare</Paragraph>
                        <Input type="text" style={{width:"calc(100% + 40vw)"}} />
                    </Space>
                } extra={
                    <Space>
                        <Button type='ghost'>
                            <Space>
                            <FontAwesomeIcon icon={faCloudArrowDown} />
                            Download
                            </Space>
                        </Button>
                        <Button type="ghost" onClick={showProductTableOptions}>
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </Button>
                    </Space>
                }>
                    <Table rowSelection={rowSelection} columns={productColumns} dataSource={productData} />
                    <div style={{display:"flex",gap:"16px",justifyContent:"center",marginBottom:"20px"}}>
                        <Text><strong>0</strong> Products</Text>
                        <Text><strong>0</strong> Items sold</Text>
                        <Text><strong>$0.00</strong> Net sales</Text>
                        <Text><strong>0</strong> Orders</Text>
                    </div>
                </Card>
            </div>

            <Drawer title="Charts" placement="right" width="300px" open={productTableOptions} onClose={productTableCancel}>
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
                        <Switch defaultChecked onChange={setCategoryTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Category</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setVariationsTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Variations</Paragraph>
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

export default ProductsTable;