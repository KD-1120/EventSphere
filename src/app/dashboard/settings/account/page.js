"use client";
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { 
  User, 
  Shield,
  Clock,
  Globe,
  CheckCircle,
  CalendarClock,
  Bell,
  Key
} from 'lucide-react';
import SidebarNav from '@/app/Components/Sidebar';

// Theme
const theme = {
  colors: {
    primary: '#00c2a8',
    primaryHover: '#00a692',
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

const SubHeading = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: 20px;
  margin-top: ${props => props.mt || '0'};
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

// Card Grid
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 32px;
  
  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const StatusCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: 24px;
  box-shadow: ${theme.shadows.md};
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 200px;
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardActions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: auto;
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.md};
  background-color: #e0f7f4;
  color: #00c2a8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const CardTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: 6px;
`;

const CardText = styled.div`
  font-size: 14px;
  color: ${theme.colors.textMuted};
  margin-bottom: ${props => props.mb || '12px'};
`;

// Form elements
const FormContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: 24px;
  box-shadow: ${theme.shadows.md};
  margin-bottom: 24px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: ${theme.colors.text};
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  font-size: 14px;
  transition: all ${theme.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.primaryLight};
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
    background-color: #00c2a8;
    color: white;
    border: none;
    
    &:hover {
      background-color: #00a692;
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
  
  ${props => props.sm && css`
    padding: 6px 12px;
    font-size: 13px;
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
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
    background-color: #00c2a8;
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

// Preferences Section
const PreferenceItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid ${theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
`;

const PreferenceInfo = styled.div`
  display: flex;
  align-items: flex-start;
`;

const PreferenceIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  color: ${theme.colors.secondary};
`;

const PreferenceContent = styled.div``;

const PreferenceTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${theme.colors.text};
  margin-bottom: 4px;
`;

const PreferenceDescription = styled.div`
  font-size: 13px;
  color: ${theme.colors.textMuted};
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

const AccountSettingsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <AppContainer>
        <SidebarNav />
      {/* Main Content */}
      <MainContent>
        <BreadcrumbContainer>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Settings</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem active>Account</BreadcrumbItem>
        </BreadcrumbContainer>
        
        <Heading>Account Settings</Heading>
        
        {/* Status Cards */}
        <CardGrid>
          <StatusCard>
            <CardContent>
              <IconContainer>
                <User size={20} />
              </IconContainer>
              <CardTitle>Profile Photo</CardTitle>
              <CardText mb="16px">Update your profile picture</CardText>
            </CardContent>
            <CardActions>
              <Button primary sm>Upload Photo</Button>
              <Button secondary sm>Remove</Button>
            </CardActions>
          </StatusCard>
          
          <StatusCard>
            <CardContent>
              <IconContainer color={theme.colors.primary} bg={theme.colors.primaryLight}>
                <CheckCircle size={20} />
              </IconContainer>
              <CardTitle>Add Members</CardTitle>
              <CardText >Add members to manage check-ins</CardText>
            </CardContent>
            <CardActions>
              <Link href="/dashboard/settings/account/members">
                <Button primary sm>Manage Members</Button>
              </Link>
            </CardActions>
          </StatusCard>
          
          <StatusCard>
            <CardContent>
              <IconContainer color={theme.colors.primary} bg={theme.colors.primaryLight}>
                <CalendarClock size={20} />
              </IconContainer>
              <CardTitle>12 Events</CardTitle>
              <CardText>Created in the last 12 months</CardText>
            </CardContent>
            <CardActions>
              <Button primary sm>View History</Button>
            </CardActions>
          </StatusCard>
          
          <StatusCard>
            <CardContent>
              <IconContainer color={theme.colors.primary} bg={theme.colors.primaryLight}>
                <Shield size={20} />
              </IconContainer>
              <CardTitle>Security</CardTitle>
              <CardText>Last login: Today, 10:45 AM</CardText>
            </CardContent>
            <CardActions>
              <Button primary sm>Security Settings</Button>
            </CardActions>
          </StatusCard>
        </CardGrid>
        
        {/* Personal Information */}
        <SubHeading>Personal Information</SubHeading>
        <FormContainer>
          <FormRow>
            <FormGroup>
              <FormLabel>Full Name</FormLabel>
              <Input type="text" defaultValue="Alex Morgan" />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Job Title</FormLabel>
              <Input type="text" defaultValue="Event Manager" />
            </FormGroup>
          </FormRow>
          
          <FormRow>
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <Input type="email" defaultValue="alex.morgan@eventflow.com" />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Phone</FormLabel>
              <Input type="tel" defaultValue="+1 (555) 123-4567" />
            </FormGroup>
          </FormRow>
        </FormContainer>
        
        {/* Preferences */}
        <SubHeading>Preferences</SubHeading>
        <FormContainer>
          <PreferenceItem>
            <PreferenceInfo>
              <PreferenceIconContainer>
                <Bell size={20} />
              </PreferenceIconContainer>
              <PreferenceContent>
                <PreferenceTitle>Email Notifications</PreferenceTitle>
                <PreferenceDescription>Receive updates about events and account activity</PreferenceDescription>
              </PreferenceContent>
            </PreferenceInfo>
            <ToggleContainer>
              <ToggleInput type="checkbox" defaultChecked />
              <ToggleSlider />
            </ToggleContainer>
          </PreferenceItem>
          
          <PreferenceItem>
            <PreferenceInfo>
              <PreferenceIconContainer>
                <Key size={20} />
              </PreferenceIconContainer>
              <PreferenceContent>
                <PreferenceTitle>Two-Factor Authentication</PreferenceTitle>
                <PreferenceDescription>Add an extra layer of security to your account</PreferenceDescription>
              </PreferenceContent>
            </PreferenceInfo>
            <ToggleContainer>
              <ToggleInput type="checkbox" />
              <ToggleSlider />
            </ToggleContainer>
          </PreferenceItem>
          
          <PreferenceItem>
            <PreferenceInfo>
              <PreferenceIconContainer>
                <Clock size={20} />
              </PreferenceIconContainer>
              <PreferenceContent>
                <PreferenceTitle>Time Zone</PreferenceTitle>
                <PreferenceDescription>Pacific Time (PT)</PreferenceDescription>
              </PreferenceContent>
            </PreferenceInfo>
            <Select>
              <option>Select</option>
              <option selected>Pacific Time (PT)</option>
              <option>Eastern Time (ET)</option>
              <option>Central Time (CT)</option>
              <option>Mountain Time (MT)</option>
            </Select>
          </PreferenceItem>
          
          <PreferenceItem>
            <PreferenceInfo>
              <PreferenceIconContainer>
                <Globe size={20} />
              </PreferenceIconContainer>
              <PreferenceContent>
                <PreferenceTitle>Language</PreferenceTitle>
                <PreferenceDescription>English (US)</PreferenceDescription>
              </PreferenceContent>
            </PreferenceInfo>
            <Select>
              <option>Select</option>
              <option selected>English (US)</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </Select>
          </PreferenceItem>
          
          <ButtonGroup>
            <Button primary>Save Changes</Button>
            <Button secondary>Cancel</Button>
          </ButtonGroup>
        </FormContainer>
      </MainContent>
    </AppContainer>
  );
};

export default AccountSettingsPage;