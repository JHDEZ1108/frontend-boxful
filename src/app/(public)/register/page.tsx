'use client';

import { useEffect, useState } from 'react';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Typography,
  theme,
  Space,
} from 'antd';
import Image from 'next/image';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import registerIllustration from '../../../../public/assets/images/login/register-illustration.svg';
import type { RegisterFormValues } from '../../../types/forms';

const { Title, Text } = Typography;
const { Option } = Select;
const { useToken } = theme;

export default function RegisterPage() {
  const { token } = useToken();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const onFinish = (values: RegisterFormValues) => {
    console.log('Form values:', values);
    // TODO: Send values to backend API
  };

  const colSpan = isMobile ? 24 : 12;

  return (
    <Row justify="center" align="middle" style={{ backgroundColor: token.colorBgLayout }}>
      {/* Form section */}
      <Col
        xs={{ span: 24 }}
        md={{ span: 12 }}
        style={{
          padding: '24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '100%', maxWidth: '500px' }}>
          <Title level={3}>Tell us about you</Title>
          <Text type="secondary">Complete the registration information</Text>

          <Form layout="vertical" style={{ marginTop: 24 }} onFinish={onFinish}>
            <Row gutter={16}>
              <Col span={colSpan}>
                <Form.Item
                  name="firstName"
                  label="First name"
                  rules={[{ required: true, message: 'Please enter your first name' }]}
                >
                  <Input placeholder="Enter your first name" />
                </Form.Item>
              </Col>
              <Col span={colSpan}>
                <Form.Item
                  name="lastName"
                  label="Last name"
                  rules={[{ required: true, message: 'Please enter your last name' }]}
                >
                  <Input placeholder="Enter your last name" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={colSpan}>
                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[{ required: true, message: 'Please select your gender' }]}
                >
                  <Select placeholder="Select">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={colSpan}>
                <Form.Item
                  name="birthdate"
                  label="Birthdate"
                  rules={[{ required: true, message: 'Please select your birthdate' }]}
                >
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={colSpan}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Enter a valid email' },
                  ]}
                >
                  <Input placeholder="Enter your email" />
                </Form.Item>
              </Col>
              <Col span={colSpan}>
                <Form.Item label="WhatsApp number" required>
                  <Space.Compact style={{ width: '100%' }} block>
                    <Form.Item
                      name="whatsappPrefix"
                      noStyle
                      initialValue="503"
                      rules={[{ required: true, message: 'Prefix is required' }]}
                    >
                      <Select style={{ width: '30%' }}>
                        <Option value="503">503</Option>
                        <Option value="502">502</Option>
                        <Option value="504">504</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="whatsappNumber"
                      noStyle
                      rules={[{ required: true, message: 'Enter your phone number' }]}
                    >
                      <Input style={{ width: '70%' }} placeholder="7777 7777" />
                    </Form.Item>
                  </Space.Compact>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={colSpan}>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true, message: 'Please enter a password' }]}
                >
                  <Input.Password
                    placeholder="Enter password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>
              </Col>
              <Col span={colSpan}>
                <Form.Item
                  name="confirmPassword"
                  label="Confirm password"
                  dependencies={['password']}
                  rules={[
                    { required: true, message: 'Please confirm your password' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('Passwords do not match'));
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    placeholder="Confirm password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Continue
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>

      {/* Illustration section */}
      <Col
        xs={{ span: 24 }}
        md={{ span: 12 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '24px',
          minHeight: isMobile ? 'auto' : '100vh',
          backgroundColor: token.colorBgBase,
        }}
      >
        <div style={{ maxWidth: '400px', width: '100%' }}>
          <Image
            src={registerIllustration}
            alt="Register Illustration"
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>
      </Col>
    </Row>
  );
}
