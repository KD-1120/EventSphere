"use client";
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import {  
  Users, 
  UserCheck,
  Star,
  XCircle,
  Plus,
  UploadCloud,
  Mail,
  Download,
  MoreVertical
} from 'lucide-react';
import SidebarNav from '@/app/Components/Sidebar';

// Theme
const theme = {
  colors: {
    primary: '#00a692',
    primaryHover: '#00c2a8',
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
  margin-right: 12px;
  margin-bottom: 12px;
  
  ${props => props.primary && css`
    background-color: ${theme.colors.primary};
    color: white;
    border: 1px solid ${theme.colors.primary};
    
    &:hover {
      background-color: ${theme.colors.primaryHover};
    }
  `}
  
  ${props => !props.primary && css`
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
  flex-wrap: wrap;
  margin: 24px 0;
`;

// Search
const SearchContainer = styled.div`
  margin-bottom: 24px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 14px;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.white};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.primaryLight};
  }
  
  &::placeholder {
    color: ${theme.colors.textMuted};
  }
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

const AttendeeName = styled.div`
  display: flex;
  align-items: center;
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

const BadgeStatus = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: ${theme.borderRadius.md};
  font-size: 12px;
  font-weight: 500;
  
  ${props => props.variant === 'checked-in' && css`
    background-color: ${theme.colors.successLight};
    color: ${theme.colors.success};
  `}
  
  ${props => props.variant === 'registered' && css`
    background-color: ${theme.colors.primaryLight};
    color: ${theme.colors.primary};
  `}
  
  ${props => props.variant === 'no-show' && css`
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
  gap: 8px;
`;

const AttendeeManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Sample data
  const stats = [
    { id: 1, icon: <Users size={20} />, value: "623", label: "Total Attendees", action: "View Details" },
    { id: 2, icon: <UserCheck size={20} />, value: "478", label: "Checked-in", action: "Check-in Data" },
    { id: 3, icon: <XCircle size={20} />, value: "145", label: "No-shows", action: "Send Reminder" },
    { id: 4, icon: <Star size={20} />, value: "42", label: "VIP Attendees", action: "VIP Management" }
  ];
  
  const attendees = [
    { 
      id: 1, 
      name: "Sarah Johnson", 
      email: "sarah.j@example.com",
      event: "Tech Conference",
      ticketType: "VIP",
      status: "checked-in" 
    },
    { 
      id: 2, 
      name: "Michael Chen", 
      email: "m.chen@example.com",
      event: "Tech Conference",
      ticketType: "Standard",
      status: "checked-in" 
    },
    { 
      id: 3, 
      name: "Emma Davis", 
      email: "emma.d@example.com",
      event: "Marketing Workshop",
      ticketType: "Early Bird",
      status: "registered" 
    },
    { 
      id: 4, 
      name: "James Wilson", 
      email: "j.wilson@example.com",
      event: "Product Launch",
      ticketType: "General",
      status: "no-show" 
    },
    { 
      id: 5, 
      name: "Olivia Martinez", 
      email: "o.martinez@example.com",
      event: "Tech Conference",
      ticketType: "VIP",
      status: "checked-in" 
    }
  ];

  // Filter attendees based on search term
  const filteredAttendees = attendees.filter(attendee => 
    attendee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    attendee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    attendee.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
    attendee.ticketType.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <BreadcrumbItem active>Attendees</BreadcrumbItem>
        </BreadcrumbContainer>
        
        <Heading>Attendees Management</Heading>
        
        {/* Stats Cards */}
        <StatsGrid>
          {stats.map(stat => (
            <StatCard key={stat.id}>
              <StatIconContainer>
                {stat.icon}
              </StatIconContainer>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
              <ActionButton>{stat.action}</ActionButton>
            </StatCard>
          ))}
        </StatsGrid>
        
        {/* Action Buttons */}
        <ActionButtonsContainer>
          <ActionButton primary>
            <Plus size={16} style={{ marginRight: '8px' }} />
            Add Attendee
          </ActionButton>
          
          <ActionButton>
            <UploadCloud size={16} style={{ marginRight: '8px' }} />
            Import CSV
          </ActionButton>
          
          <ActionButton>
            <Mail size={16} style={{ marginRight: '8px' }} />
            Send Group Email
          </ActionButton>
          
          <ActionButton>
            <Download size={16} style={{ marginRight: '8px' }} />
            Export Data
          </ActionButton>
        </ActionButtonsContainer>
        
        {/* Search */}
        <SearchContainer>
          <SectionHeading>Search Attendees</SectionHeading>
          <SearchInput 
            type="text" 
            placeholder="Search by name, email, or ticket ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
        
        {/* Attendees Table */}
        <SectionHeading>Attendee List</SectionHeading>
        <TableContainer>
          <Table>
            <TableHead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Event</th>
                <th>Ticket Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </TableHead>
            <TableBody>
              {filteredAttendees.map(attendee => (
                <tr key={attendee.id}>
                  <td>
                    <AttendeeName>
                      <InitialAvatar>
                        {attendee.name.charAt(0)}
                      </InitialAvatar>
                      {attendee.name}
                    </AttendeeName>
                  </td>
                  <td>{attendee.email}</td>
                  <td>{attendee.event}</td>
                  <td>{attendee.ticketType}</td>
                  <td>
                    <BadgeStatus variant={attendee.status}>
                      {attendee.status === 'checked-in' ? 'Checked-in' : 
                       attendee.status === 'registered' ? 'Registered' : 'No-show'}
                    </BadgeStatus>
                  </td>
                  <td>
                    <ActionIconsContainer>
                      <ActionIconButton>
                        <Download size={16} />
                      </ActionIconButton>
                      <ActionIconButton>
                        <Mail size={16} />
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
      </MainContent>
    </AppContainer>
  );
};

export default AttendeeManagement;