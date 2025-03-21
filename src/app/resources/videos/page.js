"use client";

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
  ChevronRight,
  Play,
  ListVideo,
  BarChart3,
  Zap,
  LayoutGrid,
  ArrowLeft,
  Download,
  FileText
} from 'lucide-react';
import Link from 'next/link';

// Theme definition using the green palette from your existing code
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
    lightGreen: '#e0f7f4',
    purple: '#6366f1'
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
    h2: '1.5rem',
    h1: '2rem'
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
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};

// Styled Components
const TutorialContainer = styled(Container)`
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.sm};
  max-width: 1000px;
  margin: 0 auto;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing.lg};
  }
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const BreadcrumbLink = styled.a`
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
  }
`;

const BreadcrumbSeparator = styled.span`
  margin: 0 ${props => props.theme.spacing.xs};
  display: flex;
  align-items: center;
`;

const PageTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.h1};
  font-weight: 700;
  color: ${props => props.theme.colors.dark};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const PageSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.lead};
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const VideoCard = styled.div`
  background-color: ${props => props.theme.colors.light};
  border-radius: 12px;
  padding: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const VideoPlayerBox = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.cardBg};
  border-radius: 8px;
  padding: ${props => props.theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing.md};
  min-height: 200px;
`;

const VideoTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.h2};
  font-weight: 600;
  color: ${props => props.theme.colors.dark};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const VideoDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.secondary};
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.h2};
  font-weight: 600;
  color: ${props => props.theme.colors.dark};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ChapterContainer = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const ChapterItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing.sm};
  border-radius: 8px;
  margin-bottom: ${props => props.theme.spacing.xs};
  background-color: ${props => props.theme.colors.light};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.lightGreen};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-color: ${props => props.variant === 'purple' 
    ? props.theme.colors.purple 
    : props.theme.colors.lightGreen};
  color: ${props => props.variant === 'purple' 
    ? props.theme.colors.white 
    : props.theme.colors.primary};
  margin-right: ${props => props.theme.spacing.sm};
`;

const ChapterContent = styled.div`
  flex: 1;
`;

const ChapterTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: 600;
  color: ${props => props.theme.colors.dark};
  margin: 0;
`;

const ChapterTime = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.secondary};
  margin: 0;
`;

const RelatedCard = styled.div`
  background-color: ${props => props.theme.colors.light};
  border-radius: 12px;
  padding: ${props => props.theme.spacing.md};
  height: 100%;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const RelatedTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.h3};
  font-weight: 600;
  color: ${props => props.theme.colors.dark};
  margin: ${props => props.theme.spacing.sm} 0;
`;

const RelatedDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ButtonLink = styled(Button)`
  background-color: ${props => props.variant === 'outline' 
    ? 'transparent' 
    : props.theme.colors.purple};
  border-color: ${props => props.variant === 'outline' 
    ? props.theme.colors.border 
    : props.theme.colors.purple};
  color: ${props => props.variant === 'outline' 
    ? props.theme.colors.secondary 
    : props.theme.colors.white};
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: ${props => props.variant === 'outline' 
      ? props.theme.colors.cardBg 
      : props.theme.colors.primary};
    border-color: ${props => props.variant === 'outline' 
      ? props.theme.colors.border 
      : props.theme.colors.primary};
  }
`;

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
  margin-top: ${props => props.theme.spacing.lg};
`;

const EventDashboardOverview = () => {
  // Chapter data
  const chapters = [
    { 
      title: 'Introduction to Dashboard', 
      time: '0:00 - 1:45',
      icon: <Play size={18} />
    },
    { 
      title: 'Navigation and Menu Overview', 
      time: '1:46 - 3:20',
      icon: <ListVideo size={18} />
    },
    { 
      title: 'Event Analytics and Reporting', 
      time: '3:21 - 5:15',
      icon: <BarChart3 size={18} />
    },
    { 
      title: 'Quick Actions and Shortcuts', 
      time: '5:16 - 7:30',
      icon: <Zap size={18} />
    },
    { 
      title: 'Customizing Your Dashboard', 
      time: '7:31 - 9:45',
      icon: <LayoutGrid size={18} />
    }
  ];

  // Related resources data
  const relatedResources = [
    {
      title: 'Advanced Ticketing Features',
      description: 'Learn about tiered pricing, group discounts, and early bird offers.',
      icon: <Play size={18} />
    },
    {
      title: 'Attendee Management',
      description: 'How to track registrations, send communications, and manage check-ins.',
      icon: <Play size={18} />
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <TutorialContainer>
        <Breadcrumb>
          <BreadcrumbLink href="/resources">Resources & Guides</BreadcrumbLink>
          <BreadcrumbSeparator><ChevronRight size={14} /></BreadcrumbSeparator>
          <BreadcrumbLink href="#">Video Tutorials</BreadcrumbLink>
          <BreadcrumbSeparator><ChevronRight size={14} /></BreadcrumbSeparator>
          <span>Event Dashboard Overview</span>
        </Breadcrumb>
        
        <PageTitle>Event Dashboard Overview</PageTitle>
        <PageSubtitle>Quick tour of all dashboard features and navigation</PageSubtitle>
        
        <VideoCard>
          <VideoPlayerBox>
            <IconWrapper variant="purple" style={{ width: '60px', height: '60px', borderRadius: '50%' }}>
              <Play size={24} />
            </IconWrapper>
          </VideoPlayerBox>
          
          <VideoTitle>Video Player</VideoTitle>
          <VideoDescription>
            This video provides a comprehensive overview of the EventFlow dashboard, 
            showing you how to navigate between different sections and use key features efficiently.
          </VideoDescription>
        </VideoCard>
        
        <ChapterContainer>
          <SectionTitle>Video Chapters</SectionTitle>
          
          {chapters.map((chapter, index) => (
            <ChapterItem key={index}>
              <IconWrapper>
                {chapter.icon}
              </IconWrapper>
              <ChapterContent>
                <ChapterTitle>{chapter.title}</ChapterTitle>
                <ChapterTime>{chapter.time}</ChapterTime>
              </ChapterContent>
            </ChapterItem>
          ))}
        </ChapterContainer>
        
        <SectionTitle>Related Resources</SectionTitle>
        <Row>
          {relatedResources.map((resource, index) => (
            <Col md={6} className="mb-4" key={index}>
              <RelatedCard>
                <IconWrapper variant="purple">
                  {resource.icon}
                </IconWrapper>
                <RelatedTitle>{resource.title}</RelatedTitle>
                <RelatedDescription>{resource.description}</RelatedDescription>
                <ButtonLink variant="purple">Watch Video</ButtonLink>
              </RelatedCard>
            </Col>
          ))}
        </Row>
        
        <Footer>
          <ButtonLink variant="outline" href="/resources">
            <ArrowLeft size={16} style={{ marginRight: '6px' }} />
            Back to Resources
          </ButtonLink>
          <ButtonLink variant="outline">
            <Download size={16} style={{ marginRight: '6px' }} />
            Download Transcript
          </ButtonLink>
        </Footer>
      </TutorialContainer>
    </ThemeProvider>
  );
};

export default EventDashboardOverview;