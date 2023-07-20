import { useState } from 'react';
import { Button, ConfigProvider, Space, Select, Switch, theme } from 'antd';

const options = [
  { value: 'jack', label: 'Jack' },
  { value: 'lucy', label: 'Lucy' },
  { value: 'Yiminghe', label: 'yiminghe' },
  { value: 'disabled', label: 'Disabled', disabled: true },
];

function Apptheme() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' ||
      (localStorage.getItem('theme') !== 'light' &&
        matchMedia('(prefers-color-scheme: dark)').matches)
  );

  return (
    <div
      style={{
        background: darkMode ? 'black' : 'white',
        height: 'calc(100vh - 40px)',
        padding: '20px',
      }}
    >
      <ConfigProvider
        theme={{
          algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <Space direction="vertical">
          <Switch
            checked={darkMode}
            checkedChildren="Dark Mode"
            unCheckedChildren="Light Mode"
            onChange={() => {
              localStorage.setItem('theme', darkMode ? 'light' : 'dark');
              setDarkMode(!darkMode);
            }}
          />
          <Space wrap>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
          </Space>
          <Space wrap>
            <Select
              defaultValue="lucy"
              style={{ width: 120 }}
              options={options}
            />
            <Select
              defaultValue="lucy"
              style={{ width: 120 }}
              disabled
              options={options}
            />
            <Select
              defaultValue="lucy"
              style={{ width: 120 }}
              loading
              options={options}
            />
            <Select
              defaultValue="lucy"
              style={{ width: 120 }}
              allowClear
              options={options}
            />
          </Space>
        </Space>
      </ConfigProvider>
    </div>
  );
}

export default Apptheme;