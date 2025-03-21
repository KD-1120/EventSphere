"use client";
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Ticket,
  QrCode,
  Plus,
  Edit,
  Grid, 
  BarChart2,
  Mail,
  MoreVertical
} from 'lucide-react';
import SidebarNav from '@/app/Components/Sidebar';

// Theme
const theme = {
  colors: {
    primary: '#00a692',
    primaryHover: '#4a4cc9',
    primaryLight: '#e0f7f4',
    secondary: '#6c757d',
    success: '#10b981',
    successLight: '#d1fae5',
    warning: '#f59e0b',
    warningLight: '#fef3c7',
    light: '#f8f9fa',
    dark: '#343a40',
    text: '#212529',
    textMuted: '#6c757d',
    border: '#e9ecef',
    background: '#f8f9fa',
    white: '#ffffff',
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
    content: '/';
    margin: 0 8px;
    color: ${theme.colors.border};
  }
`;

const BreadcrumbLink = styled.a`
  color: inherit;
  text-decoration: none;
  
  &:hover {
    color: ${theme.colors.primary};
  }
`;

// Stats Cards
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 32px;
  
  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const StatCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: 24px;
  box-shadow: ${theme.shadows.md};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StatIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.primaryLight};
  color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const StatValue = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: ${theme.colors.textMuted};
  margin-bottom: 16px;
`;

const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 10px 16px;
  border-radius: ${theme.borderRadius.md};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all ${theme.transitions.default};
  
  ${props => props.primary ? css`
    background-color: ${theme.colors.primary};
    color: white;
    border: 1px solid ${theme.colors.primary};
    
    &:hover {
      background-color: ${theme.colors.primaryHover};
    }
  ` : css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.secondary};
    border: 1px solid ${theme.colors.border};
    
    &:hover {
      background-color: ${theme.colors.light};
    }
  `}
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin: 24px 0;
  flex-wrap: wrap;
`;

// Table styling
const TableContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  overflow: hidden;
  margin-bottom: 32px;
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
    padding: 16px;
    font-size: 14px;
  }
`;

const TableEventInfo = styled.div`
  display: flex;
  align-items: center;
`;

const EventIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.secondary};
  margin-right: 12px;
`;

const EventDetails = styled.div``;

const EventName = styled.div`
  font-weight: 500;
  color: ${theme.colors.text};
`;


const ActionIconsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionIconButton = styled.button`
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

// Recent Activity Section
const ActivityContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  overflow: hidden;
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
`;

const ActivityAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.circle};
  overflow: hidden;
  position: relative;
  margin-right: 16px;
  flex-shrink: 0;
`;

const ActivityInfo = styled.div`
  flex: 1;
`;

const ActivityName = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${theme.colors.text};
`;

const ActivityDetails = styled.div`
  font-size: 13px;
  color: ${theme.colors.textMuted};
`;

const TicketManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Sample data
  const stats = [
    { id: 1, icon: <Ticket size={20} />, value: "1,248", label: "Total Tickets Sold", action: "View Details" },
    { id: 2, icon: <Calendar size={20} />, value: "$24,960", label: "Revenue Generated", action: "Sales Report" },
    { id: 3, icon: <QrCode size={20} />, value: "856", label: "Tickets Scanned", action: "Check-in Data" },
    { id: 4, icon: <Calendar size={20} />, value: "3", label: "Events with Tickets", action: "Manage Events" }
  ];
  
  const ticketSales = [
    { id: 1, event: "Tech Conference 2023", ticketType: "VIP", price: "$99", sold: "150/200", available: "50" },
    { id: 2, event: "Tech Conference 2023", ticketType: "Standard", price: "$49", sold: "300/350", available: "50" },
    { id: 3, event: "Product Launch", ticketType: "General", price: "$25", sold: "128/200", available: "72" },
    { id: 4, event: "Marketing Workshop", ticketType: "Early Bird", price: "$35", sold: "45/100", available: "55" }
  ];
  
  const recentActivity = [
    { 
      id: 1, 
      name: "Sarah Johnson", 
      action: "Purchased VIP Ticket - Tech Conference" 
    },
    { 
      id: 2, 
      name: "Michael Chen", 
      action: "Purchased Standard Ticket - Tech Conference" 
    },
    { 
      id: 3, 
      name: "Emma Davis", 
      action: "Purchased Early Bird Ticket - Marketing Workshop" 
    }
  ];

  return (
    <AppContainer>
      <SidebarNav />      
      {/* Main Content */}
      <MainContent>
        {/* Breadcrumb */}
        <BreadcrumbContainer>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem active>Tickets</BreadcrumbItem>
        </BreadcrumbContainer>
        
        <Heading>Ticket Management</Heading>
        
        {/* Stats Cards */}
        <StatsGrid>
          <StatCard>
            <StatIconContainer>
              <Ticket size={20} />
            </StatIconContainer>
            <StatValue>1,248</StatValue>
            <StatLabel>Total Tickets Sold</StatLabel>
            <ActionButton>View Details</ActionButton>
          </StatCard>
          
          <StatCard>
            <StatIconContainer>
              <Calendar size={20} />
            </StatIconContainer>
            <StatValue>$24,960</StatValue>
            <StatLabel>Revenue Generated</StatLabel>
            <ActionButton>Sales Report</ActionButton>
          </StatCard>
          
          <StatCard>
            <StatIconContainer>
              <QrCode size={20} />
            </StatIconContainer>
            <StatValue>856</StatValue>
            <StatLabel>Tickets Scanned</StatLabel>
            <ActionButton>Check-in Data</ActionButton>
          </StatCard>
          
          <StatCard>
            <StatIconContainer>
              <Calendar size={20} />
            </StatIconContainer>
            <StatValue>3</StatValue>
            <StatLabel>Events with Tickets</StatLabel>
            <ActionButton>Manage Events</ActionButton>
          </StatCard>
        </StatsGrid>
        
        {/* Action Buttons */}
        <ActionButtonsContainer>
          <ActionButton primary>
            <Plus size={16} style={{ marginRight: '8px' }} />
            Create Tickets
          </ActionButton>
          
          <ActionButton>
            <Ticket size={16} style={{ marginRight: '8px' }} />
            Send QR Tickets
          </ActionButton>
          
          <Link href="/dashboard/tickets/scan-ticket">
          <ActionButton>
            <QrCode size={16} style={{ marginRight: '8px' }} />
            Scan Ticket
          </ActionButton>
          </Link>
          
          <ActionButton>
            <BarChart2 size={16} style={{ marginRight: '8px' }} />
            Export Data
          </ActionButton>
        </ActionButtonsContainer>
        
        {/* Ticket Sales Table */}
        <SectionHeading>Ticket Sales by Event</SectionHeading>
        <TableContainer>
          <Table>
            <TableHead>
              <tr>
                <th>Event Name</th>
                <th>Ticket Type</th>
                <th>Price</th>
                <th>Sold</th>
                <th>Available</th>
                <th>Actions</th>
              </tr>
            </TableHead>
            <TableBody>
              {ticketSales.map(ticket => (
                <tr key={ticket.id}>
                  <td>
                    <TableEventInfo>
                      <EventIcon>
                        <Calendar size={18} />
                      </EventIcon>
                      <EventDetails>
                        <EventName>{ticket.event}</EventName>
                      </EventDetails>
                    </TableEventInfo>
                  </td>
                  <td>{ticket.ticketType}</td>
                  <td>{ticket.price}</td>
                  <td>{ticket.sold}</td>
                  <td>{ticket.available}</td>
                  <td>
                    <ActionIconsContainer>
                      <ActionIconButton>
                        <Edit size={16} />
                      </ActionIconButton>
                      <ActionIconButton>
                        <Grid size={16} />
                      </ActionIconButton>
                      <ActionIconButton>
                        <MoreVertical size={16} />
                      </ActionIconButton>
                    </ActionIconsContainer>
                  </td>
                </tr>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        {/* Recent Activity */}
        <SectionHeading>Recent Ticket Activity</SectionHeading>
        <ActivityContainer>
          {recentActivity.map(activity => (
            <ActivityItem key={activity.id}>
              <ActivityAvatar>
                <Image src="/api/placeholder/40/40" alt={activity.name} layout="fill" objectFit="cover" />
              </ActivityAvatar>
              <ActivityInfo>
                <ActivityName>{activity.name}</ActivityName>
                <ActivityDetails>{activity.action}</ActivityDetails>
              </ActivityInfo>
              <ActionIconsContainer>
                <ActionIconButton>
                  <Mail size={16} />
                </ActionIconButton>
                <ActionIconButton>
                  <MoreVertical size={16} />
                </ActionIconButton>
              </ActionIconsContainer>
            </ActivityItem>
          ))}
        </ActivityContainer>
      </MainContent>
    </AppContainer>
  );
};

export default TicketManagement;