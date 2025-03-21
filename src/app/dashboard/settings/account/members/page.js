"use client";
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import {  
  Shield, 
  UserPlus, 
  Users, 
  Edit,
  Trash,
  CheckCircle
} from 'lucide-react';
import SidebarNav from '@/app/Components/Sidebar';
// Theme from your provided code
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
    violet: '#7c3aed',
    violetLight: '#ede9fe',
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

// Add Dashboard layout components
const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${theme.colors.background};
`;

const SidebarContainer = styled.aside`
  width: 250px;
  background-color: ${theme.colors.white};
  border-right: 1px solid ${theme.colors.border};
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  transition: transform ${theme.transitions.default};
  box-shadow: ${theme.shadows.sm};

  @media (max-width: 991px) {
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
  }
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

// Add navbar components from dashboard
const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px;
  border-bottom: 1px solid ${theme.colors.border};
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.primary};
`;

const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.border};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;

  @media (min-width: 992px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.text};
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SidebarNavigation = styled.nav`
  flex: 1;
  padding: 16px;
`;

const SidebarSection = styled.div`
  margin-bottom: 24px;
`;

const SidebarSectionTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.secondary};
  margin-bottom: 12px;
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: ${props => props.active ? theme.colors.primary : theme.colors.text};
  background-color: ${props => props.active ? theme.colors.primaryLight : 'transparent'};
  border-radius: ${theme.borderRadius.md};
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all ${theme.transitions.default};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.primaryLight};
    color: ${theme.colors.primary};
  }
`;

const NavItemIcon = styled.div`
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-top: 1px solid ${theme.colors.border};
`;

const UserRole = styled.div`
  font-size: 13px;
  color: ${theme.colors.textMuted};
`;

// Layout Components
const AccountSettingsContainer = styled.div`
  padding: 24px;
  background-color: ${theme.colors.background};
  
  @media (max-width: 768px) {
    padding: 16px;
  }
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

const Heading = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: 24px;
`;

const SectionContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: 24px;
  box-shadow: ${theme.shadows.md};
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: 20px;
`;

const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

// Team Members Table
const TeamTable = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`;

const TableHead = styled.thead`
  border-bottom: 1px solid ${theme.colors.border};
`;

const TableRow = styled.tr`
  &:hover {
    background-color: ${theme.colors.light};
  }
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 12px 16px;
  font-weight: 500;
  color: ${theme.colors.secondary};
  font-size: 14px;
`;

const TableCell = styled.td`
  padding: 16px;
  border-bottom: 1px solid ${theme.colors.border};
  color: ${theme.colors.text};
  font-size: 14px;
  vertical-align: middle;
`;

const UserCell = styled.div`
  display: flex;
  align-items: center;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.circle};
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  margin-right: 12px;
`;

const UserInfo = styled.div``;

const UserName = styled.div`
  font-weight: 500;
  color: ${theme.colors.text};
`;

const UserEmail = styled.div`
  font-size: 13px;
  color: ${theme.colors.textMuted};
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: ${theme.borderRadius.md};
  font-size: 13px;
  font-weight: 500;
  
  ${props => props.status === 'active' && css`
    background-color: ${theme.colors.successLight};
    color: ${theme.colors.success};
  `}
  
  ${props => props.status === 'pending' && css`
    background-color: ${theme.colors.warningLight};
    color: ${theme.colors.warning};
  `}
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${theme.borderRadius.md};
  background: none;
  border: 1px solid ${theme.colors.border};
  color: ${theme.colors.secondary};
  cursor: pointer;
  transition: all ${theme.transitions.default};
  
  &:hover {
    background-color: ${theme.colors.light};
    color: ${theme.colors.text};
  }
`;

// Team Settings Components
const SettingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid ${theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
`;

const SettingInfo = styled.div`
  display: flex;
  align-items: flex-start;
`;

const SettingIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.violetLight};
  color: ${theme.colors.violet};
  margin-right: 16px;
`;

const SettingContent = styled.div``;

const SettingTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${theme.colors.text};
  margin-bottom: 4px;
`;

const SettingDescription = styled.div`
  font-size: 13px;
  color: ${theme.colors.textMuted};
`;

// Toggle switch
const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 46px;
  height: 24px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + span {
    background-color: ${theme.colors.primary};
  }
  
  &:checked + span:before {
    transform: translateX(22px);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.border};
  transition: ${theme.transitions.default};
  border-radius: 34px;
  
  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: ${theme.transitions.default};
    border-radius: 50%;
  }
`;

const Select = styled.select`
  padding: 10px 12px;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  font-size: 14px;
  background-color: white;
  min-width: 120px;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

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
    border: none;
    
    &:hover {
      background-color: ${theme.colors.primaryHover};
    }
  `}
  
  ${props => props.secondary && css`
    background-color: white;
    color: ${theme.colors.secondary};
    border: 1px solid ${theme.colors.border};
    
    &:hover {
      background-color: ${theme.colors.light};
    }
  `}
  
  ${props => props.violet && css`
    background-color: ${theme.colors.violet};
    color: white;
    border: none;
    
    &:hover {
      background-color: ${theme.colors.primaryHover};
    }
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

const TeamManagementPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [require2FA, setRequire2FA] = useState(false);
  const [autoApprove, setAutoApprove] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Keep only team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@techevents.com',
      role: 'Admin',
      status: 'active',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'm.chen@techevents.com',
      role: 'Event Manager',
      status: 'active',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 3,
      name: 'Jessica Lee',
      email: 'j.lee@techevents.com',
      role: 'Content Editor',
      status: 'active',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 4,
      name: 'David Wilson',
      email: 'd.wilson@techevents.com',
      role: 'Analytics',
      status: 'pending',
      avatar: '/api/placeholder/40/40'
    }
  ];
  
  return (
    <AppContainer>
        <SidebarNav />
      {/* Main Content */}
      <MainContent>
        <BreadcrumbContainer>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/settings">Settings</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/settings/account">Account</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem active>Team Members</BreadcrumbItem>
        </BreadcrumbContainer>
        
        <Heading>Team Members</Heading>
        
        <SectionContainer>
          <ActionButtonContainer>
            <SectionTitle>Team Members</SectionTitle>
            <Button violet>
              <UserPlus size={16} style={{ marginRight: '8px' }} />
              Invite Member
            </Button>
          </ActionButtonContainer>
          
          <TeamTable>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>User</TableHeader>
                  <TableHeader>Email</TableHeader>
                  <TableHeader>Role</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Actions</TableHeader>
                </TableRow>
              </TableHead>
              <tbody>
                {teamMembers.map(member => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <UserCell>
                        <UserAvatar>
                          <Image
                            src={member.avatar}
                            alt={member.name}
                            width={40}
                            height={40}
                            style={{ objectFit: 'cover' }}
                          />
                        </UserAvatar>
                        <UserName>{member.name}</UserName>
                      </UserCell>
                    </TableCell>
                    <TableCell>{member.email}</TableCell>
                    <TableCell>{member.role}</TableCell>
                    <TableCell>
                      <StatusBadge status={member.status}>
                        {member.status === 'active' ? (
                          <>
                            <CheckCircle size={14} style={{ marginRight: '4px' }} />
                            Active
                          </>
                        ) : (
                          'Pending'
                        )}
                      </StatusBadge>
                    </TableCell>
                    <TableCell>
                      <ActionButtons>
                        <IconButton>
                          <Edit size={16} />
                        </IconButton>
                        <IconButton>
                          <Trash size={16} />
                        </IconButton>
                      </ActionButtons>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </TeamTable>
        </SectionContainer>
        
        <SectionContainer>
          <SectionTitle>Team Settings</SectionTitle>
          
          <SettingItem>
            <SettingInfo>
              <SettingIconContainer>
                <Shield size={20} />
              </SettingIconContainer>
              <SettingContent>
                <SettingTitle>Require 2FA for all team members</SettingTitle>
                <SettingDescription>Enforce two-factor authentication for security</SettingDescription>
              </SettingContent>
            </SettingInfo>
            <ToggleContainer>
              <ToggleInput 
                type="checkbox" 
                checked={require2FA}
                onChange={() => setRequire2FA(!require2FA)}
              />
              <ToggleSlider />
            </ToggleContainer>
          </SettingItem>
          
          <SettingItem>
            <SettingInfo>
              <SettingIconContainer>
                <UserPlus size={20} />
              </SettingIconContainer>
              <SettingContent>
                <SettingTitle>Auto-approve new members</SettingTitle>
                <SettingDescription>Automatically approve invited team members</SettingDescription>
              </SettingContent>
            </SettingInfo>
            <ToggleContainer>
              <ToggleInput 
                type="checkbox" 
                checked={autoApprove}
                onChange={() => setAutoApprove(!autoApprove)}
              />
              <ToggleSlider />
            </ToggleContainer>
          </SettingItem>
          
          <SettingItem>
            <SettingInfo>
              <SettingIconContainer>
                <Users size={20} />
              </SettingIconContainer>
              <SettingContent>
                <SettingTitle>Default role for new members</SettingTitle>
                <SettingDescription>Content Editor</SettingDescription>
              </SettingContent>
            </SettingInfo>
            <Select>
              <option>Select</option>
              <option>Admin</option>
              <option>Event Manager</option>
              <option selected>Content Editor</option>
              <option>Analytics</option>
            </Select>
          </SettingItem>
          
          <ButtonGroup>
            <Button primary>Save Changes</Button>
            <Button secondary>Cancel</Button>
          </ButtonGroup>
        </SectionContainer>
      </MainContent>
    </AppContainer>
  );
};

export default TeamManagementPage;