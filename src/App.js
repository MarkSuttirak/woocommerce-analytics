import logo from './logo.svg';
import './App.css';
import { Typography, Select, Space, Card, Button, DatePicker } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipse, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

function App() {
  const { RangePicker } = DatePicker;
  const { Title, Text, Paragraph } = Typography;
  return (
    <div className="App">
      <header className="App-header">
      <div className='d-inline-block'>
          <Paragraph>Date range:</Paragraph>
          <Select
            placeholder="Select a date range"
            style={{
              width: 300,
            }}
            options={[
              {
                value: 'today',
                label: 'Today',
              },
              {
                value: 'yesterday',
                label: 'Yesterday',
              },
              {
                value: 'week to date',
                label: 'Week to date',
              },
              {
                value: 'month to date',
                label: 'Month to date',
              },
              {
                value: 'quarter to date',
                label: 'Quarter to date',
              },
              {
                value: 'year to date',
                label: 'Year to date',
              },
              {
                value: 'last week',
                label: 'Last week',
              },
              {
                value: 'last month',
                label: 'Last month',
              },
              {
                value: 'last quarter',
                label: 'Last quarter',
              },
              {
                value: 'last year',
                label: 'Last year',
              },
            ]}
          />
        </div>
        <div className='d-inline-block ms-2'>
          <Paragraph>Compare to:</Paragraph>
          <Select
            placeholder="Compare to"
            style={{
              width: 300,
            }}
            options={[
              {
                value: 'previous period',
                label: 'Previous period',
              },
              {
                value: 'previous year',
                label: 'Previous year',
              },
            ]} />
        </div>
        <div className='d-inline-block ms-2'>
          <Paragraph>Custom date range:</Paragraph>
          <RangePicker />
        </div>
        
        
      </header>
      <div className='mt-4'>
          <div className='row'>
            <div className='col-sm-6'>
              <Title level={2}>Performance</Title>
            </div>
            <div className='col-sm-6 text-end'>
              <Button><FontAwesomeIcon icon={faEllipsisVertical}/></Button>
            </div>
          </div>
          <div className='row'>
            <div className='five-cols'>
              <Card>
                <Paragraph>Total sales</Paragraph>
                <Title level={3} className="row">
                    <div className='col-sm-6'>
                      $0.00
                    </div>
                    <div className='col-sm-6 text-end'>
                      0%
                    </div>
                </Title>
              </Card>
            </div>
            <div className='five-cols'>
              <Card>
                <Paragraph>Net sales</Paragraph>
                <Title level={3} className="row">
                    <div className='col-sm-6'>
                      $0.00
                    </div>
                    <div className='col-sm-6 text-end'>
                      0%
                    </div>
                </Title>
              </Card>
            </div>
            <div className='five-cols'>
              <Card>
                <Paragraph>Orders</Paragraph>
                <Title level={3} className="row">
                    <div className='col-sm-6'>
                      0
                    </div>
                    <div className='col-sm-6 text-end'>
                      0%
                    </div>
                </Title>
              </Card>
            </div>
            <div className='five-cols'>
              <Card>
                <Paragraph>Products sold</Paragraph>
                <Title level={3} className="row">
                    <div className='col-sm-6'>
                      0
                    </div>
                    <div className='col-sm-6 text-end'>
                      0%
                    </div>
                </Title>
              </Card>
            </div>
            <div className='five-cols'>
              <Card>
                <Paragraph>Variations Sold</Paragraph>
                <Title level={3} className="row">
                    <div className='col-sm-6'>
                      0
                    </div>
                    <div className='col-sm-6 text-end'>
                      0%
                    </div>
                </Title>
              </Card>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
