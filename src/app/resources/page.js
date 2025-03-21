"use client";

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
  FileText,
  Video,
  Layout,
  Settings,
  BarChart2,
  MessageSquare,
  Mail,
  Calculator,
  FileQuestion,
  Download
} from 'lucide-react';
import Link from 'next/link';

// Theme from your provided code
const theme = {
  colors: {
    primaryLight: '#00c2a8',
    primary: '#00a692',
    secondary: '#64748B',
    dark: '#1E293B',
    light: '#F8FAFC',
    white: '#FFFFFF',
    cardBg: '#F1F5F9',
    success: '#0CAF60',
    border: '#E2E8F0',
    purple: '#6366F1',
    purpleLight: '#EEF2FF'
  },
  fonts: {
    body: 'Inter, system-ui, -apple-system, sans-serif',
    heading: 'Inter, system-ui, -apple-system, sans-serif'
  },
  fontSizes: {
    small: '0.875rem',
    body: '1rem',
    lead: '1.125rem',
    h3: '1.25rem',
    h2: '1.75rem',
    h1: '2.25rem'
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem'
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
  }
};

// Styled Components
const PageSection = styled.section`
  padding: ${props => props.theme.spacing.xl} 0;
  background-color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.body};
`;

const MainHeading = styled.h1`
  font-size: ${props => props.theme.fontSizes.h1};
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.dark};
`;

const SubHeading = styled.h2`
  font-size: ${props => props.theme.fontSizes.h2};
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.dark};
`;

const SectionHeading = styled.h3`
  font-size: ${props => props.theme.fontSizes.h3};
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.dark};
`;

const LeadText = styled.p`
  font-size: ${props => props.theme.fontSizes.lead};
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const GuideCard = styled.div`
  background-color: ${props => props.theme.colors.purpleLight};
  border-radius: 12px;
  padding: ${props => props.theme.spacing.lg};
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const ResourceCard = styled.div`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing.md};
  border-radius: 8px;
  margin-bottom: ${props => props.theme.spacing.md};
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.light};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: #e0f7f4;
  color: ${props => props.theme.colors.primary};
  border-radius: 8px;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ResourceIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #e0f7f4;
  color: ${props => props.theme.colors.primary};
  border-radius: 8px;
  margin-right: ${props => props.theme.spacing.md};
  flex-shrink: 0;
`;

const CardTitle = styled.h4`
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.dark};
`;

const CardDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ActionButton = styled(Button)`
  background-color: ${props => props.primary ? props.theme.colors.primary : props.theme.colors.primaryLight};
  border: none;
  color: white;
  font-weight: 500;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.875rem;
  
  &:hover {
    background-color: ${props => props.primary ? props.theme.colors.primary : props.theme.colors.primaryLight}E6;
    color: ${props => props.primary ? props.theme.colors.white : props.theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const ResourceInfo = styled.div`
  flex-grow: 1;
`;

const ResourceTitle = styled.h4`
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: ${props => props.theme.colors.dark};
`;

const ResourceDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 0;
`;

const DownloadButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.secondary};
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const guides = [
  {
    icon: <FileText size={24} />,
    title: "How to Create Your First Event",
    description: "Step-by-step walkthrough to launch your event successfully.",
    link: "/resources/guides",
    buttonText: "Read Guide"
  },
  {
    icon: <Layout size={24} />,
    title: "Customizing Your Event Website",
    description: "Themes, branding, and layout options to make your event stand out.",
    link: "/resources/guides",
    buttonText: "Read Guide"
  },
  {
    icon: <Settings size={24} />,
    title: "Setting Up Ticketing & Payments",
    description: "Manage pricing, discount codes, and secure payment options.",
    link: "/resources/guides",
    buttonText: "Read Guide"
  },
  {
    icon: <MessageSquare size={24} />,
    title: "Enabling Polls & Q&A",
    description: "Boost engagement with interactive polls and real-time Q&A.",
    link: "/resources/guides",
    buttonText: "Read Guide"
  }
];

const videos = [
  {
    icon: <BarChart2 size={24} />,
    title: "Event Dashboard Overview",
    description: "Quick tour of all dashboard features and navigation.",
    buttonText: "Watch Video",
    link: "/resources/videos"
  },
  {
    icon: <Video size={24} />,
    title: "Advanced Ticketing Features",
    description: "Learn about tiered pricing, group discounts, and early bird offers.",
    buttonText: "Watch Video",
    link: "/resources/videos"
  },
  {
    icon: <Video size={24} />,
    title: "Attendee Management",
    description: "How to track registrations, send communications, and manage check-ins.",
    buttonText: "Watch Video",
    link: "/resources/videos"
  }
];

const ResourcesAndGuides = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageSection>
        <Container>
          <MainHeading>Resources & Guides</MainHeading>
          <LeadText>Learn how to create, customize, and manage your events effortlessly</LeadText>
          
          <Row className="mb-4">
            <Col>
              <ActionButton primary >Start Creating Your Event</ActionButton>
            </Col>
          </Row>
          
          <SectionHeading>Getting Started Guides</SectionHeading>
          <Row className="g-4 mb-5">
            {guides.map((guide, index) => (
              <Col key={index} md={6} lg={3}>
                <GuideCard>
                  <IconWrapper>{guide.icon}</IconWrapper>
                  <CardTitle>{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                  {guide.link ? (
                    <Link href={guide.link}>
                      <ActionButton>{guide.buttonText}</ActionButton>
                    </Link>
                  ) : (
                    <ActionButton>{guide.buttonText}</ActionButton>
                  )}
                </GuideCard>
              </Col>
            ))}
          </Row>
          
          <SectionHeading>Video Tutorials</SectionHeading>
          <Row className="g-4 mb-5">
            {videos.map((video, index) => (
              <Col key={index} md={4}>
                <GuideCard>
                  <IconWrapper>{video.icon}</IconWrapper>
                  <CardTitle>{video.title}</CardTitle>
                  <CardDescription>{video.description}</CardDescription>
                  <Link href={video.link}>
                    <ActionButton>{video.buttonText}</ActionButton>
                  </Link>
                </GuideCard>
              </Col>
            ))}
          </Row>
          
          <SectionHeading>Popular Resources</SectionHeading>
          <Row>
            <Col lg={8}>
              <ResourceCard>
                <ResourceIconWrapper>
                  <FileText size={20} />
                </ResourceIconWrapper>
                <ResourceInfo>
                  <ResourceTitle>Event Marketing Checklist</ResourceTitle>
                  <ResourceDescription>Comprehensive guide to promote your event effectively</ResourceDescription>
                </ResourceInfo>
                <DownloadButton>
                  <Download size={20} />
                </DownloadButton>
              </ResourceCard>
              
              <ResourceCard>
                <ResourceIconWrapper>
                  <Mail size={20} />
                </ResourceIconWrapper>
                <ResourceInfo>
                  <ResourceTitle>Email Templates for Event Communication</ResourceTitle>
                  <ResourceDescription>Ready-to-use templates for invitations, reminders, and follow-ups</ResourceDescription>
                </ResourceInfo>
                <DownloadButton>
                  <Download size={20} />
                </DownloadButton>
              </ResourceCard>
              
              <ResourceCard>
                <ResourceIconWrapper>
                  <Calculator size={20} />
                </ResourceIconWrapper>
                <ResourceInfo>
                  <ResourceTitle>Event Budget Calculator</ResourceTitle>
                  <ResourceDescription>Excel template to plan and track your event expenses</ResourceDescription>
                </ResourceInfo>
                <DownloadButton>
                  <Download size={20} />
                </DownloadButton>
              </ResourceCard>
              
              <ResourceCard>
                <ResourceIconWrapper>
                  <FileQuestion size={20} />
                </ResourceIconWrapper>
                <ResourceInfo>
                  <ResourceTitle>Post-Event Survey Questions</ResourceTitle>
                  <ResourceDescription>Gather valuable feedback from your attendees</ResourceDescription>
                </ResourceInfo>
                <DownloadButton>
                  <Download size={20} />
                </DownloadButton>
              </ResourceCard>
            </Col>
          </Row>
        </Container>
      </PageSection>
    </ThemeProvider>
  );
};

export default ResourcesAndGuides;