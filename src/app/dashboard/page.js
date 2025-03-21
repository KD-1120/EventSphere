"use client";
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { 
  Calendar, 
  Ticket, 
  Users, 
  BarChart2, 
  Layout,
  Plus, 
  QrCode, 
  PieChart, 
  Grid, 
  Edit, 
  MoreVertical,
} from 'lucide-react';
import SidebarNav from '../Components/Sidebar';

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
  margin-top: ${props => props.mt || '0'};
`;
// Dashboard components
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
  transition: transform ${theme.transitions.default}, box-shadow ${theme.transitions.default};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const StatIconContainer = styled.div`
  width: 48px;
  height: 48px;
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

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  color: ${theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

// Action buttons
const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  display: flex;
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

const ActionButtonIcon = styled.span`
  display: flex;
  margin-right: 8px;
`;

// Layout grid
const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

// Card component
const Card = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  overflow: hidden;
  height: 100%; // Make cards the same height
`;

const CardBody = styled.div`
  padding: ${props => props.noPadding ? '0' : '24px'};
`;

// Table styling
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

const EventDate = styled.div`
  font-size: 12px;
  color: ${theme.colors.textMuted};
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: ${theme.borderRadius.sm};
  font-size: 12px;
  font-weight: 500;
  
  ${props => props.status === 'active' && css`
    background-color: ${theme.colors.successLight};
    color: ${theme.colors.success};
  `}
  
  ${props => props.status === 'draft' && css`
    background-color: ${theme.colors.warningLight};
    color: ${theme.colors.warning};
  `}
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

const ActionIconsContainer = styled.div`
  display: flex;
  gap: 4px;
`;

// Check-in item styling
const CheckInList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CheckInItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
`;

const InitialAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.circle};
  background-color: ${theme.colors.primaryLight};
  color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  margin-right: 12px;
  flex-shrink: 0;
`;

const CheckInInfo = styled.div`
  flex: 1;
`;

const CheckInName = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${theme.colors.text};
`;

const CheckInRole = styled.div`
  font-size: 12px;
  color: ${theme.colors.textMuted};
`;

// Main component
const EventFlowDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Sample data
  const stats = [
    { id: 1, icon: <Calendar size={20} />, value: "12", label: "Active Events", link: "View All" },
    { id: 2, icon: <Ticket size={20} />, value: "1,248", label: "Tickets Sold", link: "Manage" },
    { id: 3, icon: <Users size={20} />, value: "856", label: "Registered Attendees", link: "Details" },
    { id: 4, icon: <BarChart2 size={20} />, value: "8", label: "Active Polls", link: "View Results" }
  ];
  
  const events = [
    { id: 1, name: "Tech Conference", date: "Oct 15", year: "2023", attendees: "450/500", status: "active" },
    { id: 2, name: "Product Launch", date: "Oct 22", attendees: "128/200", status: "active" },
    { id: 3, name: "Marketing Workshop", date: "Nov 5", attendees: "45/100", status: "draft" }
  ];
  
  const checkIns = [
    { id: 1, name: "Sarah Johnson", role: "Tech Conference - VIP" },
    { id: 2, name: "Michael Chen", role: "Tech Conference - Speaker" },
    { id: 3, name: "Emma Davis", role: "Tech Conference - Standard" },
    { id: 4, name: "Robert Wilson", role: "Tech Conference - Standard" },
    { id: 5, name: "Diana Lee", role: "Tech Conference - VIP" }
  ];

  return (
    <AppContainer>
      {/* Sidebar */}
      <SidebarNav />
      {/* Main Content */}
      <MainContent>
        <Heading>Dashboard Overview</Heading>
        
        {/* Stats Cards */}
        <StatsGrid>
          {stats.map(stat => (
            <StatCard key={stat.id}>
              <StatIconContainer>
                {stat.icon}
              </StatIconContainer>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
              <LinkButton href="#">{stat.link}</LinkButton>
            </StatCard>
          ))}
        </StatsGrid>
        
        {/* Quick Actions */}
        <SectionHeading>Quick Actions</SectionHeading>
        <ActionButtonsContainer>
          <ActionButton primary>
            <ActionButtonIcon><Plus size={16} /></ActionButtonIcon>
            Create New Event
          </ActionButton>
          
          <ActionButton>
            <ActionButtonIcon><QrCode size={16} /></ActionButtonIcon>
            Scan QR Ticket
          </ActionButton>
          
          <ActionButton>
            <ActionButtonIcon><PieChart size={16} /></ActionButtonIcon>
            Create Poll
          </ActionButton>
          
          <ActionButton>
            <ActionButtonIcon><Layout size={16} /></ActionButtonIcon>
            Website Templates
          </ActionButton>
        </ActionButtonsContainer>
        
        {/* Content Grid */}
        <LayoutGrid>
          {/* Upcoming Events */}
          <div>
            <SectionHeading>Upcoming Events</SectionHeading>
            <Card>
              <CardBody noPadding>
                <Table>
                  <TableHead>
                    <tr>
                      <th>Event Name</th>
                      <th>Date</th>
                      <th>Attendees</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </TableHead>
                  <TableBody>
                    {events.map(event => (
                      <tr key={event.id}>
                        <td>
                          <TableEventInfo>
                            <EventIcon>
                              <Calendar size={18} />
                            </EventIcon>
                            <EventDetails>
                              <EventName>{event.name}</EventName>
                              {event.year && <EventDate>{event.year}</EventDate>}
                            </EventDetails>
                          </TableEventInfo>
                        </td>
                        <td>{event.date}</td>
                        <td>{event.attendees}</td>
                        <td>
                          <StatusBadge status={event.status}>
                            {event.status === 'active' ? 'Active' : 'Draft'}
                          </StatusBadge>
                        </td>
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
              </CardBody>
            </Card>
          </div>
          
          {/* Recent Check-ins */}
          <div>
            <SectionHeading>Recent Check-ins</SectionHeading>
            <Card>
              <CardBody>
                <CheckInList>
                  {checkIns.map(checkIn => (
                    <CheckInItem key={checkIn.id}>
                      <InitialAvatar>
                        {checkIn.name.charAt(0)}
                      </InitialAvatar>
                      <CheckInInfo>
                        <CheckInName>{checkIn.name}</CheckInName>
                        <CheckInRole>{checkIn.role}</CheckInRole>
                      </CheckInInfo>
                      <ActionIconButton>
                        <MoreVertical size={16} />
                      </ActionIconButton>
                    </CheckInItem>
                  ))}
                </CheckInList>
              </CardBody>
            </Card>
          </div>
        </LayoutGrid>
      </MainContent>
    </AppContainer>
  );
};

export default EventFlowDashboard;