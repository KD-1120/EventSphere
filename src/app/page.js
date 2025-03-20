"use client";
// pages/index.js
import Head from 'next/head';
import { useRouter } from "next/navigation";
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { 
  Calendar, 
  Ticket, 
  Vote, 
  Link, 
  BarChart2, 
  Smartphone,
  FileText,
  Image,
  Share2,
  PieChart
} from 'lucide-react';

const GetStartedButton = styled(Button)`
  background-color: rgb(0, 157, 136);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  &:hover {
    background-color: #00a692;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80vh;
  padding: 4rem 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  color: #666;
`;

const FeaturesSection = styled.section`
  padding: 4rem 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
`;

const FeatureCard = styled.div`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  height: 100%;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${props => props.bgColor || '#e0f7f4'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    color: ${props => props.iconColor || '#00c2a8'};
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FeatureText = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
`;

const LearnMoreButton = styled(Button)`
  background-color: rgb(0, 157, 136);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  &:hover {
    background-color: #00a692;
  }
`;

const HowItWorksSection = styled.section`
  padding: 4rem 1rem;
  background-color: #f9f9f9;
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 2rem;
`;

const StepNumber = styled.div`
  font-weight: bold;
  margin-right: 1rem;
`;

const StepContent = styled.div``;

const StepTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const StepText = styled.p`
  color: #666;
  margin: 0;
`;

const StepIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${props => props.bgColor || '#e0f7f4'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  
  svg {
    color: ${props => props.iconColor || '#00c2a8'};
  }
`;

const TestimonialsSection = styled.section`
  padding: 4rem 1rem;
`;

const TestimonialCard = styled.div`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  height: 100%;
`;

const TestimonialQuote = styled.div`
  color: #00c2a8;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const TestimonialRole = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const TestimonialName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const TestimonialText = styled.p`
  color: #666;
  font-style: italic;
`;

const CtaSection = styled.section`
  padding: 4rem 1rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const CtaTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CtaText = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
`;

const CtaButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const ScheduleDemoButton = styled(Button)`
  background-color: transparent;
  border: 1px solid rgb(0, 157, 136);
  color: rgb(0, 157, 136);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  &:hover {
    background-color: rgb(0, 157, 136);
    color: #fff;
  }
`;

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>EventSphere🟡 | Create stunning event pages in minutes</title>
        <meta name="description" content="EventSphere🟡 helps you create beautiful event pages, sell tickets, and engage attendees with custom shareable links." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection>
        <Container>
          <HeroTitle>Create stunning event pages in minutes</HeroTitle>
          <HeroText>
            EventSphere helps you create beautiful event pages, sell tickets, and engage attendees with custom shareable links.
          </HeroText>
          <GetStartedButton size="lg">Start Free Trial</GetStartedButton>
        </Container>
      </HeroSection>

      <FeaturesSection id="features">
        <Container>
          <SectionTitle>Key Features</SectionTitle>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <FeatureCard>
                <FeatureIcon>
                  <Calendar size={24} />
                </FeatureIcon>
                <FeatureTitle>Custom Event Pages</FeatureTitle>
                <FeatureText>
                  Create branded event pages with your own domain, colors, and design elements.
                </FeatureText>
                <LearnMoreButton onClick={() => router.push("/custom-events")}>Learn More</LearnMoreButton>
              </FeatureCard>
            </Col>
            
            <Col md={6} lg={4}>
              <FeatureCard>
                <FeatureIcon>
                  <Ticket size={24} />
                </FeatureIcon>
                <FeatureTitle>Ticket Management</FeatureTitle>
                <FeatureText>
                  Sell tickets, manage attendees, and track sales in real-time.
                </FeatureText>
                <LearnMoreButton onClick={() => router.push("/ticket-management")}>Learn More</LearnMoreButton>
              </FeatureCard>
            </Col>
            
            <Col md={6} lg={4}>
              <FeatureCard>
                <FeatureIcon>
                  <Vote size={24} />
                </FeatureIcon>
                <FeatureTitle>Interactive Voting</FeatureTitle>
                <FeatureText>
                  Engage your audience with live polls, Q&A sessions, and voting features.
                </FeatureText>
                <LearnMoreButton onClick={() => router.push("/interactive-voting")}>Learn More</LearnMoreButton>
              </FeatureCard>
            </Col>
            
            <Col md={6} lg={4}>
              <FeatureCard>
                <FeatureIcon>
                  <Link size={24} />
                </FeatureIcon>
                <FeatureTitle>Custom Links</FeatureTitle>
                <FeatureText>
                  Create memorable, branded links for your events that are easy to share.
                </FeatureText>
                <LearnMoreButton onClick={() => router.push("/custom-links")}>Learn More</LearnMoreButton>
              </FeatureCard>
            </Col>
            
            <Col md={6} lg={4}>
              <FeatureCard>
                <FeatureIcon>
                  <BarChart2 size={24} />
                </FeatureIcon>
                <FeatureTitle>Analytics Dashboard</FeatureTitle>
                <FeatureText>
                  Track visitor engagement, ticket sales, and attendee demographics.
                </FeatureText>
                <LearnMoreButton onClick={() => router.push("/analytics-dashboard")}>Learn More</LearnMoreButton>
              </FeatureCard>
            </Col>
            
            <Col md={6} lg={4}>
              <FeatureCard>
                <FeatureIcon>
                  <Smartphone size={24} />
                </FeatureIcon>
                <FeatureTitle>Mobile Optimized</FeatureTitle>
                <FeatureText>
                  All event pages work perfectly on any device, from desktop to mobile.
                </FeatureText>
                <LearnMoreButton onClick={() => router.push("/mobile-optimized")}>Learn More</LearnMoreButton>
              </FeatureCard>
            </Col>
          </Row>
        </Container>
      </FeaturesSection>

      <HowItWorksSection>
        <Container>
          <SectionTitle>How It Works</SectionTitle>
          <Row className="g-4">
            <Col md={3}>
              <StepContainer>
                <StepIcon>
                  <FileText size={20} />
                </StepIcon>
                <StepContent>
                  <StepNumber>1. Create Your Event</StepNumber>
                  <StepText>Choose from templates or start from scratch</StepText>
                </StepContent>
              </StepContainer>
            </Col>
            <Col md={3}>
              <StepContainer>
                <StepIcon>
                  <Image size={20} />
                </StepIcon>
                <StepContent>
                  <StepNumber>2. Customize Your Page</StepNumber>
                  <StepText>Add details, images, and set up ticketing</StepText>
                </StepContent>
              </StepContainer>
            </Col>
            <Col md={3}>
              <StepContainer>
                <StepIcon>
                  <Share2 size={20} />
                </StepIcon>
                <StepContent>
                  <StepNumber>3. Share Your Link</StepNumber>
                  <StepText>Distribute your custom URL across channels</StepText>
                </StepContent>
              </StepContainer>
            </Col>
            <Col md={3}>
              <StepContainer>
                <StepIcon>
                  <PieChart size={20} />
                </StepIcon>
                <StepContent>
                  <StepNumber>4. Manage Your Event</StepNumber>
                  <StepText>Track sales, attendees, and engagement</StepText>
                </StepContent>
              </StepContainer>
            </Col>
          </Row>
        </Container>
      </HowItWorksSection>

        <TestimonialsSection>
    <Container>
      <SectionTitle>Why EventSphere?</SectionTitle>
      <Row className="g-4">
        <Col md={4}>
          <TestimonialCard>
            <TestimonialQuote>"</TestimonialQuote>
            <TestimonialText>
              "We're building EventSphere to revolutionize event management with real-time insights, seamless ticketing, and audience engagement tools. Join us on this journey!"
            </TestimonialText>
          </TestimonialCard>
        </Col>

        <Col md={4}>
          <TestimonialCard>
            <TestimonialQuote>"</TestimonialQuote>
            <TestimonialText>
              "Be among the first to experience EventSphere! We're looking for event organizers to test our platform and provide feedback."
            </TestimonialText>
          </TestimonialCard>
        </Col>

        <Col md={4}>
          <TestimonialCard>
            <TestimonialQuote>"</TestimonialQuote>
            <TestimonialText>
              "Did you know 78% of event organizers struggle with real-time audience engagement? EventSphere is here to change that!"
            </TestimonialText>
          </TestimonialCard>
        </Col>
      </Row>
    </Container>
  </TestimonialsSection>

      <CtaSection>
        <Container>
          <CtaTitle>Ready to create your first event?</CtaTitle>
          <CtaText>Join us as we build EventSphere—a platform designed to empower event organizers from day one!</CtaText>
          <CtaButtons>
            <GetStartedButton size="lg">Start Free Trial</GetStartedButton>
            <ScheduleDemoButton size="lg">Schedule Demo</ScheduleDemoButton>
          </CtaButtons>
        </Container>
      </CtaSection>
    </>
  );
}