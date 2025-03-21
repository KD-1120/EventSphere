"use client";

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import {
  HelpCircle,
  Calendar,
  MapPin,
  FileText,
  Palette,
  Image as ImageIcon,
  List,
  ClipboardList,
  Tag,
  DollarSign,
  Users,
  CreditCard,
  Globe,
  Eye,
  Clock,
  Share2,
  Maximize2,
  CreditCard as PaymentIcon
} from 'lucide-react';
import Link from 'next/link';

// Theme definition (using the green palette from your existing code)
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
    lightGreen: '#e0f7f4'
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
const GuideContainer = styled(Container)`
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.sm};
  max-width: 800px;
  margin: 0 auto;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing.lg};
  }
`;

const PageHeader = styled.header`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.sm};
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
`;

const PageTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.h1};
  font-weight: 700;
  color: ${props => props.theme.colors.dark};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const LastUpdated = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const IntroText = styled.p`
  font-size: ${props => props.theme.fontSizes.body};
  line-height: 1.6;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const StepSection = styled.section`
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const StepHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const StepNumber = styled.div`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  margin-right: ${props => props.theme.spacing.sm};
`;

const StepTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.h2};
  font-weight: 600;
  color: ${props => props.theme.colors.dark};
  margin: 0;
`;

const StepContent = styled.div`
  padding-left: 40px;
`;

const FormField = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
  padding-left: ${props => props.theme.spacing.sm};
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: ${props => props.theme.colors.border};
  }
`;

const FieldName = styled.h3`
  font-size: ${props => props.theme.fontSizes.h3};
  font-weight: 600;
  color: ${props => props.theme.colors.dark};
  margin-bottom: ${props => props.theme.spacing.xs};
  display: flex;
  align-items: center;
`;

const FieldDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.secondary};
  margin: 0;
  line-height: 1.5;
`;

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.lightGreen};
  color: ${props => props.theme.colors.primary};
  margin-right: ${props => props.theme.spacing.xs};
`;

const TipsSection = styled.section`
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const TipsTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.h2};
  font-weight: 600;
  color: ${props => props.theme.colors.dark};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const TipCard = styled.div`
  background-color: ${props => props.theme.colors.light};
  border-radius: 8px;
  padding: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.md};
  border-left: 3px solid ${props => props.theme.colors.primary};
`;

const TipNumber = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const TipTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.h3};
  font-weight: 600;
  color: ${props => props.theme.colors.dark};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const TipContent = styled.p`
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.secondary};
  margin: 0;
  line-height: 1.5;
`;

const RelatedGuidesSection = styled.section`
  margin-top: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const RelatedGuidesTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.h2};
  font-weight: 600;
  color: ${props => props.theme.colors.dark};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const GuideCard = styled(Card)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.sm};
  height: 100%;
  border: 1px solid ${props => props.theme.colors.border};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const GuideIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.lightGreen};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const GuideCardBody = styled(Card.Body)`
  padding: ${props => props.theme.spacing.md};
`;

const GuideTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.h3};
  font-weight: 600;
  color: ${props => props.theme.colors.dark};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const GuideDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.md};
  line-height: 1.5;
`;

const ActionButton = styled(Button)`
  background-color: ${props => props.theme.colors.primary};
  border-color: ${props => props.theme.colors.primary};
  font-weight: 500;
  padding: 0.5rem 1rem;
  font-size: ${props => props.theme.fontSizes.small};
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryLight};
    border-color: ${props => props.theme.colors.primaryLight};
  }
`;

const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
  text-decoration: none;
  margin-top: ${props => props.theme.spacing.lg};
  
  &:hover {
    text-decoration: underline;
  }
`;

const EventCreationGuide = () => {
  return (
    <ThemeProvider theme={theme}>
      <GuideContainer>
        <PageHeader>
          <Breadcrumb>
            <BreadcrumbLink href="resources">Resources & Guides</BreadcrumbLink>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbLink href="/resources/guides">How to Create Your First Event</BreadcrumbLink>
          </Breadcrumb>
          <PageTitle>How to Create Your First Event</PageTitle>
          <LastUpdated>Last updated: June 15, 2023 • 8 min read</LastUpdated>
          <IntroText>
            This comprehensive guide will walk you through the process of creating your first event on EventBrite. From initial setup to publishing your event page.
          </IntroText>
        </PageHeader>

        <StepSection>
          <StepHeader>
            <StepNumber>1</StepNumber>
            <StepTitle>Getting Started</StepTitle>
          </StepHeader>
          <StepContent>
            <FieldDescription>
              Navigate to the Events tab in your dashboard and click the <bold>Create New Event</bold> button in the top right corner. You`&apos;`ll be prompted to select an event type.
            </FieldDescription>
          </StepContent>
        </StepSection>

        <StepSection>
          <StepHeader>
            <StepNumber>2</StepNumber>
            <StepTitle>Basic Event Information</StepTitle>
          </StepHeader>
          <StepContent>
            <FieldDescription style={{ marginBottom: '1rem' }}>
              Fill in the essential details about your event:
            </FieldDescription>
            
            <FormField>
              <FieldName>
                <IconWrapper><Calendar size={16} /></IconWrapper>
                Event Name
              </FieldName>
              <FieldDescription>
                Choose a clear, descriptive name that effectively communicates your event
              </FieldDescription>
            </FormField>
            
            <FormField>
              <FieldName>
                <IconWrapper><Clock size={16} /></IconWrapper>
                Date and Time
              </FieldName>
              <FieldDescription>
                Set start and end date/time, including time zone information
              </FieldDescription>
            </FormField>
            
            <FormField>
              <FieldName>
                <IconWrapper><MapPin size={16} /></IconWrapper>
                Location
              </FieldName>
              <FieldDescription>
                Physical address or virtual meeting link details
              </FieldDescription>
            </FormField>
            
            <FormField>
              <FieldName>
                <IconWrapper><FileText size={16} /></IconWrapper>
                Event Description
              </FieldName>
              <FieldDescription>
                Add detailed information about activities, speakers, or topics
              </FieldDescription>
            </FormField>
          </StepContent>
        </StepSection>

        <StepSection>
          <StepHeader>
            <StepNumber>3</StepNumber>
            <StepTitle>Customizing Your Event Page</StepTitle>
          </StepHeader>
          <StepContent>
            <FieldDescription style={{ marginBottom: '1rem' }}>
              After entering basic information, you`&apos;`ll be directed to the event customization section where you can:
            </FieldDescription>
            
            <FormField>
              <FieldName>
                <IconWrapper><Palette size={16} /></IconWrapper>
                Select a Theme
              </FieldName>
              <FieldDescription>
                Choose a pre-made design template or create a custom look
              </FieldDescription>
            </FormField>
            
            <FormField>
              <FieldName>
                <IconWrapper><ImageIcon size={16} /></IconWrapper>
                Upload Images
              </FieldName>
              <FieldDescription>
                Add event header image, logo, and speaker photos
              </FieldDescription>
            </FormField>
            
            <FormField>
              <FieldName>
                <IconWrapper><List size={16} /></IconWrapper>
                Add Agenda
              </FieldName>
              <FieldDescription>
                Create schedule with timeline, session details, and speakers
              </FieldDescription>
            </FormField>
            
            <FormField>
              <FieldName>
                <IconWrapper><ClipboardList size={16} /></IconWrapper>
                Customize Registration Form
              </FieldName>
              <FieldDescription>
                Add custom fields to collect attendee information
              </FieldDescription>
            </FormField>
          </StepContent>
        </StepSection>

        <StepSection>
          <StepHeader>
            <StepNumber>4</StepNumber>
            <StepTitle>Setting Up Ticketing</StepTitle>
          </StepHeader>
          <StepContent>
            <FieldDescription style={{ marginBottom: '1rem' }}>
              Configure your event`&apos;`s ticketing options:
            </FieldDescription>
            
            <FormField>
              <FieldName>
                <IconWrapper><Tag size={16} /></IconWrapper>
                Ticket Types
              </FieldName>
              <FieldDescription>
                Create different tiers (General, VIP, Early Bird, Discount, etc.)
              </FieldDescription>
            </FormField>
            
            <FormField>
              <FieldName>
                <IconWrapper><DollarSign size={16} /></IconWrapper>
                Pricing
              </FieldName>
              <FieldDescription>
                Set pricing or make the event free
              </FieldDescription>
            </FormField>
            
            <FormField>
              <FieldName>
                <IconWrapper><Users size={16} /></IconWrapper>
                Capacity
              </FieldName>
              <FieldDescription>
                Set total attendee limits or specific ticket limits
              </FieldDescription>
            </FormField>
            
            <FormField>
              <FieldName>
                <IconWrapper><CreditCard size={16} /></IconWrapper>
                Payment Processing
              </FieldName>
              <FieldDescription>
                Connect payment gateway and configure options
              </FieldDescription>
            </FormField>
          </StepContent>
        </StepSection>

        <StepSection>
          <StepHeader>
            <StepNumber>5</StepNumber>
            <StepTitle>Publishing Your Event</StepTitle>
          </StepHeader>
          <StepContent>
            <FieldDescription style={{ marginBottom: '1rem' }}>
              Once you`&apos;`ve completed all necessary sections, review your event details and click <em>Publish</em> to make your event live. You`&apos;`ll receive a unique URL that you can share with potential attendees.
            </FieldDescription>
          </StepContent>
        </StepSection>

        <TipsSection>
          <TipsTitle>Pro Tips</TipsTitle>
          
          <TipCard>
            <TipNumber>TIP #1</TipNumber>
            <TipTitle>Preview Before Publishing</TipTitle>
            <TipContent>
              Always use the preview function to see exactly how your event page will look before it goes live to ensure it appears as intended.
            </TipContent>
          </TipCard>
          
          <TipCard>
            <TipNumber>TIP #2</TipNumber>
            <TipTitle>Set Up Early Bird Pricing</TipTitle>
            <TipContent>
              Use time-limited discount tiers to encourage early registrations and build momentum for your event.
            </TipContent>
          </TipCard>
          
          <TipCard>
            <TipNumber>TIP #3</TipNumber>
            <TipTitle>Integrate Social Sharing</TipTitle>
            <TipContent>
              Enable social sharing buttons on your event page to leverage the networks of attendees to spread the word about your event.
            </TipContent>
          </TipCard>
        </TipsSection>

        <RelatedGuidesSection>
          <RelatedGuidesTitle>Related Guides</RelatedGuidesTitle>
          <Row>
            <Col md={6} className="mb-4">
              <GuideCard>
                <GuideCardBody>
                  <GuideIconWrapper>
                    <Maximize2 size={20} />
                  </GuideIconWrapper>
                  <GuideTitle>Customizing Your Event Website</GuideTitle>
                  <GuideDescription>
                    Advanced tips on using our theme editor to create your ideal event website.
                  </GuideDescription>
                  <ActionButton>Read Guide</ActionButton>
                </GuideCardBody>
              </GuideCard>
            </Col>
            <Col md={6} className="mb-4">
              <GuideCard>
                <GuideCardBody>
                  <GuideIconWrapper>
                    <PaymentIcon size={20} />
                  </GuideIconWrapper>
                  <GuideTitle>Setting Up Ticketing & Payments</GuideTitle>
                  <GuideDescription>
                    Detailed guide on creating effective ticketing options.
                  </GuideDescription>
                  <ActionButton>Read Guide</ActionButton>
                </GuideCardBody>
              </GuideCard>
            </Col>
          </Row>
        </RelatedGuidesSection>

        <BackLink href="#">
          <HelpCircle size={16} style={{ marginRight: '4px' }} />
          Back to Resources
        </BackLink>
      </GuideContainer>
    </ThemeProvider>
  );
};

export default EventCreationGuide;