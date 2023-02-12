import { ConfigProvider } from 'antd';
import React from 'react';

const Theme = ({children}) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#61B846',
      },
    }}
  >
    {children} 
  </ConfigProvider>
);

export default Theme;