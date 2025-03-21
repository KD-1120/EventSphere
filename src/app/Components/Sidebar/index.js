"use client";
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Calendar, 
  Ticket, 
  Users, 
  BarChart2, 
  Layout, 
  User, 
  Link2, 
  HelpCircle, 
  Plus, 
  QrCode, 
  PieChart, 
  Grid, 
  Edit, 
  MoreVertical,
  Search,
  Bell,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

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

// Sidebar elements
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
  color: #00c2a8;
`;

const SidebarNavigation = styled.nav`
  flex: 1;
  padding: 16px 0;
  overflow-y: auto;
`;

const SidebarSection = styled.div`
  margin-bottom: 24px;
`;

const SidebarSectionTitle = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  color: ${theme.colors.textMuted};
  padding: 0 16px;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  color: ${theme.colors.secondary};
  text-decoration: none;
  font-size: 14px;
  transition: all ${theme.transitions.default};
  border-left: 3px solid transparent;
  
  &:hover {
    background-color: #e0f7f4;
    color: #00c2a8;
  }
  
  ${props => props.active && css`
    background-color: #e0f7f4;
    color: #00c2a8;
    font-weight: 500;
    border-left-color: #00c2a8;
  `}
`;

const NavItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: inherit;
`;

// User profile in sidebar
const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-top: 1px solid ${theme.colors.border};
  margin-top: auto;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.circle};
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
`;

const UserInfo = styled.div`
  margin-left: 12px;
  overflow: hidden;
`;

const UserName = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${theme.colors.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserRole = styled.div`
  font-size: 12px;
  color: ${theme.colors.textMuted};
`;

// Responsive header for mobile
const MobileHeader = styled.div`
  display: none;
  padding: 16px;
  background-color: ${theme.colors.white};
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid ${theme.colors.border};
  
  @media (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.secondary};
  cursor: pointer;
  display: flex;
  padding: 8px;
  border-radius: ${theme.borderRadius.md};
  
  &:hover {
    background-color: ${theme.colors.light};
  }
`;

// Create a wrapper component for navigation items
const NavigationItem = ({ href, icon, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link href={href} passHref legacyBehavior>
      <NavItem active={isActive}>
        <NavItemIcon>{icon}</NavItemIcon>
        {children}
      </NavItem>
    </Link>
  );
};

// Main component
const SidebarNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarOpen && event.target.closest('[data-sidebar]') === null) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <AppContainer>
      {/* Mobile Header */}
      <MobileHeader>
        <MobileMenuButton onClick={toggleSidebar}>
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </MobileMenuButton>
        <Logo>EventSphere🟡</Logo>
        <div className="d-flex">
          <MobileMenuButton>
            <Search size={20} />
          </MobileMenuButton>
          <MobileMenuButton>
            <Bell size={20} />
          </MobileMenuButton>
        </div>
      </MobileHeader>
      
      {/* Sidebar */}
      <SidebarContainer isOpen={sidebarOpen} data-sidebar>
        <SidebarHeader>
          <Logo>EventSphere🟡</Logo>
          <MobileMenuButton onClick={toggleSidebar} className="d-lg-none">
            <X size={20} />
          </MobileMenuButton>
        </SidebarHeader>
        
        <SidebarNavigation>
          <SidebarSection>
            <NavigationItem href="/dashboard" icon={<Calendar size={18} />}>
              Dashboard
            </NavigationItem>
            
            <NavigationItem href="/dashboard/events" icon={<Calendar size={18} />}>
              Events
            </NavigationItem>
            
            <NavigationItem href="/dashboard/tickets" icon={<Ticket size={18} />}>
              Tickets
            </NavigationItem>
            
            <NavigationItem href="/dashboard/polls" icon={<BarChart2 size={18} />}>
              Polls
            </NavigationItem>
            
            <NavigationItem href="/dashboard/attendees" icon={<Users size={18} />}>
              Attendees
            </NavigationItem>
            
            <NavigationItem href="/dashboard/website-builder" icon={<Layout size={18} />}>
              Website Builder
            </NavigationItem>
          </SidebarSection>
          
          <SidebarSection>
            <SidebarSectionTitle>Settings</SidebarSectionTitle>
            
            <NavigationItem href="/dashboard/settings/account" icon={<User size={18} />}>
              Account
            </NavigationItem>
            
            <NavigationItem href="/dashboard/settings/integrations" icon={<Link2 size={18} />}>
              Integrations
            </NavigationItem>
            
            <NavigationItem href="/dashboard/settings/help" icon={<HelpCircle size={18} />}>
              Help
            </NavigationItem>
          </SidebarSection>
        </SidebarNavigation>
        
        <UserProfileContainer>
          <UserAvatar>
            <Image
              src="/api/placeholder/40/40"
              alt="User"
              fill
              sizes="40px"
              style={{ objectFit: "cover" }}
            />
          </UserAvatar>
          <UserInfo>
            <UserName>Peter Theil</UserName>
            <UserRole>Event Manager</UserRole>
          </UserInfo>
          <MobileMenuButton>
            <ChevronDown size={16} />
          </MobileMenuButton>
        </UserProfileContainer>
      </SidebarContainer>
    </AppContainer>
  );
};

export default SidebarNav;