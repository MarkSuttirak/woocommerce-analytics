import logo from './logo.svg';
import './App.css';
import { Typography, Select, Space } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { Title, Text, Paragraph } = Typography;
  return (
    <div className="App">
      <header className="App-header">
        <Paragraph>Date range:</Paragraph>
        <Space>
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
        </Space>
      </header>
    </div>
  );
}

export default App;
