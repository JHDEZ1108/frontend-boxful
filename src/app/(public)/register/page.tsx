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
import { useRouter } from 'next/navigation';
import type { RegisterFormValues } from '../../../types/forms';

const { Title, Text } = Typography;
const { Option } = Select;
const { useToken } = theme;

export default function RegisterPage() {
  const { token } = useToken();
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const onFinish = async (values: RegisterFormValues) => {
    console.log('Form values:', values);
    // TODO: Send values to backend API (NestJS + MongoDB)
    await router.push('/order/new/step-1');
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
                  label="First name"
                  name="firstName"
                  htmlFor="firstName"
                  rules={[{ required: true, message: 'Please enter your first name' }]}
                >
                  <Input id="firstName" placeholder="Enter your first name" />
                </Form.Item>
              </Col>
              <Col span={colSpan}>
                <Form.Item
                  label="Last name"
                  name="lastName"
                  htmlFor="lastName"
                  rules={[{ required: true, message: 'Please enter your last name' }]}
                >
                  <Input id="lastName" placeholder="Enter your last name" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={colSpan}>
                <Form.Item
                  label="Gender"
                  name="gender"
                  htmlFor="gender"
                  rules={[{ required: true, message: 'Please select your gender' }]}
                >
                  <Select id="gender" placeholder="Select">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={colSpan}>
                <Form.Item
                  label="Birthdate"
                  name="birthdate"
                  htmlFor="birthdate"
                  rules={[{ required: true, message: 'Please select your birthdate' }]}
                >
                  <DatePicker id="birthdate" style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={colSpan}>
                <Form.Item
                  label="Email"
                  name="email"
                  htmlFor="email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Enter a valid email' },
                  ]}
                >
                  <Input id="email" placeholder="Enter your email" />
                </Form.Item>
              </Col>
              <Col span={colSpan}>
                <Form.Item label="WhatsApp number">
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
                      rules={[
                        { required: true, message: 'Enter your phone number' },
                        { pattern: /^[0-9]+$/, message: 'Only numeric values are allowed' },
                      ]}
                    >
                      <Input
                        style={{ width: '70%' }}
                        placeholder="7777 7777"
                        inputMode="numeric"
                        pattern="[0-9]*"
                      />
                    </Form.Item>
                  </Space.Compact>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={colSpan}>
                <Form.Item
                  label="Password"
                  name="password"
                  htmlFor="password"
                  rules={[{ required: true, message: 'Please enter a password' }]}
                >
                  <Input.Password
                    id="password"
                    placeholder="Enter password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>
              </Col>
              <Col span={colSpan}>
                <Form.Item
                  label="Confirm password"
                  name="confirmPassword"
                  htmlFor="confirmPassword"
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
                    id="confirmPassword"
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
