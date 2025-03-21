"use client";
import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { Scanner } from '@yudiel/react-qr-scanner';
import { 
  Calendar, 
  Users, 
  UserCheck,
  Star,
  Download,
  Upload,
  Camera,
  FileText,
  Printer,
  Info,
  MoreVertical,
  ChevronRight,
  Menu,
  X,
  User,
  Link2, 
  HelpCircle,
  AlertCircle,
  Check,
  CheckCircle,
  Clock
} from 'lucide-react';
import SidebarNav from '@/app/Components/Sidebar';

// Theme
const theme = {
  colors: {
    primary: '#00c2a8',
    primaryHover: '#00a692',
    primaryLight: '#e0f7f4',
    secondary: '#64748B',
    success: '#0CAF60',
    successLight: '#e0f7e7',
    warning: '#f59e0b',
    warningLight: '#fef3c7',
    danger: '#ef4444',
    dangerLight: '#fee2e2',
    light: '#F8FAFC',
    dark: '#1E293B',
    text: '#1E293B',
    textMuted: '#64748B',
    border: '#E2E8F0',
    background: '#F8FAFC',
    white: '#FFFFFF',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    circle: '50%',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.1)',
    md: '0 4px 6px rgba(0,0,0,0.07)',
    lg: '0 10px 15px rgba(0,0,0,0.05)',
  },
  transitions: {
    default: '0.2s ease',
  }
};

// Layouts
const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${theme.colors.background};
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 250px;
  padding: 24px;
  
  @media (max-width: 991px) {
    margin-left: 0;
    padding: 16px;
  }
`;

// Typography
const Heading = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: 24px;
`;

const SectionHeading = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: 16px;
  margin-top: ${props => props.mt || '24px'};
`;

// Breadcrumb
const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 14px;
`;

const BreadcrumbItem = styled.span`
  color: ${props => props.active ? theme.colors.text : theme.colors.secondary};
  font-weight: ${props => props.active ? '500' : 'normal'};
  
  &:not(:last-child)::after {
    content: '';
    margin: 0 8px;
    color: ${theme.colors.secondary};
    display: inline-block;
  }

  &:not(:last-child) {
    display: flex;
    align-items: center;
  }
`;

const BreadcrumbLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

// Tab Navigation
const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${theme.colors.border};
  margin-bottom: 24px;
`;

const Tab = styled.button`
  padding: 12px 16px;
  background: none;
  border: none;
  border-bottom: 2px solid ${props => props.active ? theme.colors.primary : 'transparent'};
  color: ${props => props.active ? theme.colors.primary : theme.colors.secondary};
  font-weight: ${props => props.active ? '500' : 'normal'};
  cursor: pointer;
  transition: all ${theme.transitions.default};
  
  &:hover {
    color: ${theme.colors.primary};
  }
`;

// Cards
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

const Card = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: 24px;
  box-shadow: ${theme.shadows.md};
  display: flex;
  flex-direction: column;
  align-items: ${props => props.center ? 'center' : 'flex-start'};
  text-align: ${props => props.center ? 'center' : 'left'};
`;

const IconContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.primaryLight};
  color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  margin: ${props => props.center ? '0 auto 16px' : '0 0 16px'};
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: 8px;
`;

const CardValue = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: ${theme.colors.textMuted};
  margin-bottom: 16px;
`;

// Buttons
const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: ${theme.borderRadius.md};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all ${theme.transitions.default};
  
  ${props => props.primary && css`
    background-color: ${theme.colors.primary};
    color: white;
    border: 1px solid ${theme.colors.primary};
    
    &:hover {
      background-color: ${theme.colors.primaryHover};
    }
  `}
  
  ${props => props.secondary && css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    
    &:hover {
      background-color: ${theme.colors.primaryLight};
    }
  `}
  
  ${props => !props.primary && !props.secondary && css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.secondary};
    border: 1px solid ${theme.colors.border};
    
    &:hover {
      background-color: ${theme.colors.light};
    }
  `}

  ${props => props.small && css`
    padding: 6px 12px;
    font-size: 12px;
  `}

  ${props => props.block && css`
    width: 100%;
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: ${props => props.mt || '0'};
`;

// Camera Container
const CameraContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  margin-bottom: 24px;
`;

const CameraPreview = styled.div`
  position: relative;
  width: 100%;
  min-height: 300px;
  background-color: ${theme.colors.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const QRPlaceholder = styled.div`
  border: 2px dashed ${theme.colors.border};
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

// Table
const TableContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  overflow: hidden;
  margin-top: 24px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: ${theme.colors.light};
  border-bottom: 1px solid ${theme.colors.border};
  
  th {
    padding: 12px 16px;
    text-align: left;
    font-weight: 500;
    font-size: 14px;
    color: ${theme.colors.secondary};
  }
`;

const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid ${theme.colors.border};
    transition: background-color ${theme.transitions.default};
    
    &:hover {
      background-color: ${theme.colors.light};
    }
    
    &:last-child {
      border-bottom: none;
    }
  }
  
  td {
    padding: 12px 16px;
    font-size: 14px;
    vertical-align: middle;
  }
`;

const Status = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: ${theme.borderRadius.md};
  font-size: 12px;
  font-weight: 500;
  
  ${props => props.valid && css`
    background-color: ${theme.colors.successLight};
    color: ${theme.colors.success};
  `}
  
  ${props => props.used && css`
    background-color: ${theme.colors.warningLight};
    color: ${theme.colors.warning};
  `}
  
  ${props => props.invalid && css`
    background-color: ${theme.colors.dangerLight};
    color: ${theme.colors.danger};
  `}
`;

const IconButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.secondary};
  cursor: pointer;
  padding: 6px;
  border-radius: ${theme.borderRadius.md};
  transition: all ${theme.transitions.default};
  
  &:hover {
    background-color: ${theme.colors.light};
    color: ${theme.colors.text};
  }
`;

const IconButtonsContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const TimeCell = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${theme.colors.textMuted};
`;

const TicketScanner = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [scannedResults, setScannedResults] = useState([]);
  
  // Sample data
  const scanStats = {
    total: 856,
    totalOfMax: 1248,
    event: "Tech Conference 2023"
  };
  
  const recentScans = [
    { id: 1, time: "10:45 AM", ticketId: "TC-VIP-1234", attendee: "Sarah Johnson", type: "VIP", status: "valid" },
    { id: 2, time: "10:42 AM", ticketId: "TC-STD-5678", attendee: "Michael Chen", type: "Standard", status: "valid" },
    { id: 3, time: "10:38 AM", ticketId: "TC-STD-9012", attendee: "Unknown", type: "Standard", status: "used" },
    { id: 4, time: "10:35 AM", ticketId: "TC-VIP-3456", attendee: "Emma Davis", type: "VIP", status: "valid" }
  ];

  const handleQRScan = (result) => {
    if (result) {
      const now = new Date();
      const hours = now.getHours() % 12 || 12;
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
      const timeString = `${hours}:${minutes} ${ampm}`;
      
      const newScan = {
        id: scannedResults.length + 5,
        time: timeString,
        ticketId: result,
        attendee: "New Attendee",
        type: result.includes("VIP") ? "VIP" : "Standard",
        status: "valid"
      };
      
      setScannedResults([newScan, ...scannedResults]);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const startScanning = () => {
    setScanning(true);
  };

  const stopScanning = () => {
    setScanning(false);
  };

  return (
    <AppContainer>
      <SidebarNav />      
      {/* Main Content */}
      <MainContent>
        {/* Breadcrumb */}
        <BreadcrumbContainer>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            <ChevronRight size={14} style={{ marginLeft: '8px' }} />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/tickets">Tickets</BreadcrumbLink>
            <ChevronRight size={14} style={{ marginLeft: '8px' }} />
          </BreadcrumbItem>
          <BreadcrumbItem active>Scanner</BreadcrumbItem>
        </BreadcrumbContainer>
        
        <Heading>Ticket Scanner</Heading>
        
        {/* Tabs */}
        <TabsContainer>
          <Tab 
            active={true}
            onClick={() => setActiveTab('camera')}
          >
            Camera Scanner
          </Tab>
        </TabsContainer>
        
        {/* Stats Cards */}
        <CardsContainer>
          <Card center>
            <IconContainer center>
              <Camera size={24} />
            </IconContainer>
            <CardTitle>Scan QR Code</CardTitle>
            <CardDescription>
              Position the QR code within the frame to scan
            </CardDescription>
            <Button primary onClick={startScanning}>
              Start Camera
            </Button>
          </Card>
          
          <Card>
            <IconContainer>
              <Calendar size={24} />
            </IconContainer>
            <CardTitle>Tech Conference 2023</CardTitle>
            <CardDescription>
              Currently scanning for this event
            </CardDescription>
            <ButtonGroup>
              <Button>Change Event</Button>
              <Button>View Details</Button>
            </ButtonGroup>
          </Card>
          
          <Card>
            <IconContainer>
              <UserCheck size={24} />
            </IconContainer>
            <CardValue>856/1248</CardValue>
            <CardTitle>Tickets scanned today</CardTitle>
            <Button primary>View Check-in Stats</Button>
          </Card>
        </CardsContainer>
        
        {/* Scanner Preview */}
        <SectionHeading>Scanner Preview</SectionHeading>
        <CameraContainer>
          {scanning ? (
            <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
              <Scanner
                onDecode={handleQRScan}
                onError={handleError}
                containerStyle={{
                  width: '100%',
                  height: '400px',
                  border: 'none',
                  borderRadius: '0',
                  overflow: 'hidden',
                }}
                viewFinderStyle={{
                  borderWidth: '3px',
                  borderColor: theme.colors.primary,
                  borderRadius: '12px',
                }}
              />
              <ButtonGroup mt="12px" style={{ justifyContent: 'center', padding: '12px' }}>
                <Button onClick={stopScanning}>Stop Scanning</Button>
                <Button>
                  <Upload size={16} style={{ marginRight: '6px' }} />
                  Upload Image
                </Button>
              </ButtonGroup>
            </div>
          ) : (
            <CameraPreview>
              <QRPlaceholder>
                <Camera size={48} color={theme.colors.secondary} />
              </QRPlaceholder>
              <CardDescription>
                Position QR code in the center of the frame
              </CardDescription>
              <ButtonGroup>
                <Button primary onClick={startScanning}>
                  Take Photo
                </Button>
                <Button>
                  <Upload size={16} style={{ marginRight: '6px' }} />
                  Upload Image
                </Button>
              </ButtonGroup>
            </CameraPreview>
          )}
        </CameraContainer>
        
        {/* Recent Scans */}
        <SectionHeading>Recent Scans</SectionHeading>
        <TableContainer>
          <Table>
            <TableHead>
              <tr>
                <th>Time</th>
                <th>Ticket ID</th>
                <th>Attendee</th>
                <th>Ticket Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </TableHead>
            <TableBody>
              {[...scannedResults, ...recentScans].slice(0, 5).map(scan => (
                <tr key={scan.id}>
                  <td>
                    <TimeCell>
                      <Clock size={14} />
                      {scan.time}
                    </TimeCell>
                  </td>
                  <td>{scan.ticketId}</td>
                  <td>{scan.attendee}</td>
                  <td>{scan.type}</td>
                  <td>
                    <Status valid={scan.status === 'valid'} used={scan.status === 'used'} invalid={scan.status === 'invalid'}>
                      {scan.status === 'valid' ? 'Valid' : scan.status === 'used' ? 'Already Used' : 'Invalid'}
                    </Status>
                  </td>
                  <td>
                    <IconButtonsContainer>
                      <IconButton>
                        <Info size={18} />
                      </IconButton>
                      <IconButton>
                        <MoreVertical size={18} />
                      </IconButton>
                    </IconButtonsContainer>
                  </td>
                </tr>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        {/* Export Options */}
        <ButtonGroup mt="24px">
          <Button>
            <Download size={16} style={{ marginRight: '6px' }} />
            Export Check-in Data
          </Button>
          <Button>
            <Printer size={16} style={{ marginRight: '6px' }} />
            Print Check-in Report
          </Button>
        </ButtonGroup>
      </MainContent>
    </AppContainer>
  );
};

export default TicketScanner;