'use client';

import { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Button, Typography, theme } from 'antd';
import Image from 'next/image';
import loginIllustration from '../../../../public/assets/images/login/login-illustration.svg';
import { useRouter } from 'next/navigation';

const { Title, Text, Link } = Typography;
const { useToken } = theme;

interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginPage() {
  const { token } = useToken();
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleFinish = (values: LoginFormValues) => {
    // TODO: Implement backend login logic with NestJS + MongoDB
    console.log('Form submitted:', values);
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ backgroundColor: token.colorBgLayout }}
    >
      {/* Sign-in form section */}
      <Col
        xs={{ span: 24 }}
        md={{ span: 12 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '24px',
        }}
      >
        <div style={{ width: '100%', maxWidth: 400 }}>
          <Title level={3} style={{ color: token.colorTextHeading }}>
            Bienvenido a Boxful
          </Title>
          <Text style={{ color: token.colorText, display: 'block', marginBottom: 24 }}>
            Por favor ingresa tus credenciales
          </Text>

          <Form layout="vertical" onFinish={handleFinish}>
            <Form.Item
              label="Correo electrónico"
              name="email"
              rules={[
                { required: true, message: 'Por favor ingresa tu correo' },
                { type: 'email', message: 'Correo inválido' },
              ]}
            >
              <Input placeholder="Digita tu correo" size="large" />
            </Form.Item>

            <Form.Item
              label="Contraseña"
              name="password"
              rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
            >
              <Input.Password placeholder="Digita tu contraseña" size="large" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                style={{ backgroundColor: token.colorPrimary }}
              >
                Iniciar sesión
              </Button>
            </Form.Item>
          </Form>

          <Text>
            ¿Necesitas una cuenta?{' '}
            <Link onClick={() => router.push('/register')} strong>
              Regístrate aquí
            </Link>
          </Text>
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
            src={loginIllustration}
            alt="Login Illustration"
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>
      </Col>
    </Row>
  );
}
