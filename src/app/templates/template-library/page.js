"use client";
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { ChevronRight, Image as ImageIcon, Users, Palette, Type } from 'lucide-react';
import Image from 'next/image';

// Styled Components
const PreviewContainer = styled(Container)`
  padding: 2rem;
  max-width: 1400px;
`;

const PreviewCol = styled(Col)`
  height: calc(150vh - 100px);
  overflow-y: auto;
  padding: 1.5rem;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const DetailsCol = styled(Col)`
  padding: 1.5rem;
`;

const TemplateTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const TemplateDescription = styled.p`
  font-size: 0.8rem;
  color: #555;
  margin-bottom: 1.5rem;
`;

const UseTemplateButton = styled(Button)`
  background-color: #00c2a8;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.8rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color:rgb(1, 138, 119);
    transform: translateY(-2px);
  }
`;

const AvatarGroup = styled.div`
  display: inline-flex;
  margin-left: 1rem;
  align-items: center;
`;

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -8px;
  border: 2px solid white;
  background-size: cover;
  background-position: center;
  position: relative;
  
  &:first-child {
    margin-left: 0;
  }
`;

const AvatarCount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -8px;
  border: 2px solid white;
  font-size: 0.55rem;
  font-weight: 700;
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const RequirementItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const IconWrapper = styled.div`
  margin-right: 0.75rem;
  color: #00c2a8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RequirementText = styled.div`
  display: flex;
  flex-direction: column;
`;

const RequirementLabel = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

const RequirementValue = styled.span`
  font-size: 0.85rem;
  color: #666;
`;

const BlocksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Block = styled.div`
  background-color: #f0f0f0;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8rem;
  color: #555;
`;

// Example event card component to match the design
const EventCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

const EventHeader = styled.div`
  padding: 1rem;
  background-color: ${props => props.color || '#f0f0f0'};
  color: ${props => props.textColor || '#333'};
  position: relative;
`;

const EventTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const EventDescription = styled.p`
  font-size: 0.85rem;
  margin-bottom: 0;
`;

const EventImage = styled.div`
  height: 180px;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const EventFooter = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: #555;
`;

const EventPrice = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
`;

const LocationCard = styled.div`
  background: ${props => props.bgColor || '#e8f0fe'};
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LocationName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const LocationDetail = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 0;
`;

// Template Preview Component
const TemplatePreview = ({ template }) => {
  // This would typically come from props
  const templateData = {
    title: "BrightSpace",
    description: "Clean and modern interface. Ideal for various projects",
    usersCount: 25,
    requirements: {
      logo: {
        label: "Event Logo",
        value: "Minimum 300×300px, PNG or SVG"
      },
      Image: {
        label: "Image(s) for landing page",
        value: "JPG, WEBP, PNG or SVG"
      },
      details: {
        label: "Event Details",
        value: "Name, date, location, description"
      },
      speaker: {
        label: "Speaker Information",
        value: "Optional but recommended"
      }
    },
    design: {
      colors: "Blue, white, light gray",
      typography: "Inter, Poppins, Open Sans"
    },
    blocks: ["Hero", "Schedule", "Speakers", "Registration"]
  };

  return (
    <PreviewContainer fluid>
      <Row>
        <PreviewCol lg={9} md={8} sm={12}>
          {/* Template Preview - this is where your dynamic template would render */}
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Discover Events<br />Beyond Expectations</h2>
            
            <Row className="mb-4">
              <Col md={4}>
                <EventCard>
                  <EventHeader color="#e8f0fe" textColor="#0056b3">
                    <EventTitle>Explore Events Around the World</EventTitle>
                    <EventDescription>Browse our curated feed &amp; explore a diverse array of events happening around the world</EventDescription>
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                      <ChevronRight size={18} />
                    </div>
                  </EventHeader>
                  <div style={{ padding: '0.5rem 1rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                      {[1, 2, 3].map(i => (
                        <Avatar key={i} style={{ backgroundImage: `url(/api/placeholder/50/50)` }} />
                      ))}
                    </div>
                  </div>
                </EventCard>
              </Col>
              
              <Col md={4}>
                <EventCard>
                  <div style={{ padding: '0.75rem 1rem' }}>
                    <span style={{ fontSize: '0.8rem', color: '#777' }}>Riverfront Market</span>
                    <EventTitle>Free webinar</EventTitle>
                  </div>
                  <EventImage style={{ backgroundImage: 'url(/api/placeholder/400/200)' }} />
                  <EventFooter>
                    <div>
                      <div style={{ fontSize: '0.75rem' }}>4 AM</div>
                      <div style={{ fontSize: '0.75rem' }}>Dec 14</div>
                    </div>
                    <EventPrice>$0</EventPrice>
                  </EventFooter>
                </EventCard>
              </Col>
              
              <Col md={4}>
                <EventCard>
                  <div style={{ padding: '0.75rem 1rem' }}>
                    <span style={{ fontSize: '0.8rem', color: '#777' }}>Mission St Festival</span>
                    <EventTitle>Climate Bridge</EventTitle>
                  </div>
                  <EventImage style={{ backgroundImage: 'url(/api/placeholder/400/200)' }} />
                  <EventFooter>
                    <div>
                      <div style={{ fontSize: '0.75rem' }}>6 AM</div>
                      <div style={{ fontSize: '0.75rem' }}>Apr 20</div>
                    </div>
                    <EventPrice>$69</EventPrice>
                  </EventFooter>
                </EventCard>
              </Col>
            </Row>
            
            <Row className="mb-5">
              <Col md={8}>
                <EventCard>
                  <EventHeader color="#fff5f0" textColor="#A05900">
                    <EventTitle>Local Events Taking Place Near You</EventTitle>
                    <EventDescription>Stay connected to the world around you with our curated list of nearby events</EventDescription>
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                      <ChevronRight size={18} />
                    </div>
                  </EventHeader>
                  <div style={{ padding: '0.5rem 1rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                      {[1, 2, 3].map(i => (
                        <Avatar key={i} style={{ backgroundImage: `url(/api/placeholder/50/50)` }} />
                      ))}
                    </div>
                  </div>
                </EventCard>
              </Col>
              
              <Col md={4}>
                <div>
                  <EventCard>
                    <div style={{ padding: '0.75rem 1rem' }}>
                      <span style={{ fontSize: '0.8rem', color: '#777' }}>Riverfront Market</span>
                      <EventTitle>Epic Adventures</EventTitle>
                    </div>
                    <EventImage style={{ backgroundImage: 'url(/api/placeholder/400/200)' }} />
                    <EventFooter>
                      <div>
                        <div style={{ fontSize: '0.75rem' }}>2 PM</div>
                        <div style={{ fontSize: '0.75rem' }}>Apr 17</div>
                      </div>
                      <EventPrice>$69</EventPrice>
                    </EventFooter>
                  </EventCard>
                </div>
              </Col>
            </Row>
            
            <h2 style={{ marginBottom: '1.5rem' }}>Popular Cities for<br />Your Next Move</h2>
            
            <Row className="mb-4">
              <Col md={6}>
                <LocationCard bgColor="#e8f0fe">
                  <div>
                    <LocationName>New york</LocationName>
                    <LocationDetail>Metropolitan area</LocationDetail>
                  </div>
                  <ChevronRight size={18} />
                </LocationCard>
              </Col>
              
              <Col md={6}>
                <LocationCard bgColor="#fff8e0">
                  <div>
                    <LocationName>Liverpool</LocationName>
                    <LocationDetail>Royal Albert Dock</LocationDetail>
                  </div>
                  <ChevronRight size={18} />
                </LocationCard>
              </Col>
            </Row>
            
            <Row>
              <Col md={6}>
                <LocationCard bgColor="#e8ffe8">
                  <div>
                    <LocationName>Manchester</LocationName>
                    <LocationDetail>Old Trafford Stadium</LocationDetail>
                  </div>
                  <ChevronRight size={18} />
                </LocationCard>
              </Col>
              
              <Col md={6}>
                <LocationCard bgColor="#e8f0fe">
                  <div>
                    <LocationName>Glasgow</LocationName>
                    <LocationDetail>The Riverside Museum</LocationDetail>
                  </div>
                  <ChevronRight size={18} />
                </LocationCard>
              </Col>
            </Row>
          </div>
        </PreviewCol>
        
        <DetailsCol lg={3} md={4} sm={12}>
          <TemplateTitle>{templateData.title}</TemplateTitle>
          <TemplateDescription>{templateData.description}</TemplateDescription>
          
          <div className="d-flex align-items-center">
            <UseTemplateButton>Use Template</UseTemplateButton>
            <AvatarGroup>
              {[1, 2, 3, 4].map(i => (
                <Avatar key={i} style={{ backgroundImage: `url(/api/placeholder/50/50)` }} />
              ))}
              <AvatarCount>+{templateData.usersCount - 4}</AvatarCount>
            </AvatarGroup>
          </div>
          
          <SectionTitle>Requirements</SectionTitle>
          
          <RequirementItem>
            <IconWrapper>
              <ImageIcon size={20} />
            </IconWrapper>
            <RequirementText>
              <RequirementLabel>{templateData.requirements.logo.label}</RequirementLabel>
              <RequirementValue>{templateData.requirements.logo.value}</RequirementValue>
            </RequirementText>
          </RequirementItem>
          <RequirementItem>
            <IconWrapper>
              <ImageIcon size={20} />
            </IconWrapper>
          <RequirementText>
              <RequirementLabel>{templateData.requirements.Image.label}</RequirementLabel>
              <RequirementValue>{templateData.requirements.Image.value}</RequirementValue>
            </RequirementText>
          </RequirementItem> 

          <RequirementItem>
            <IconWrapper>
              <Users size={20} />
            </IconWrapper>
            <RequirementText>
              <RequirementLabel>{templateData.requirements.details.label}</RequirementLabel>
              <RequirementValue>{templateData.requirements.details.value}</RequirementValue>
            </RequirementText>
          </RequirementItem>
          
          <RequirementItem>
            <IconWrapper>
              <Users size={20} />
            </IconWrapper>
            <RequirementText>
              <RequirementLabel>{templateData.requirements.speaker.label}</RequirementLabel>
              <RequirementValue>{templateData.requirements.speaker.value}</RequirementValue>
            </RequirementText>
          </RequirementItem>
          
          <SectionTitle>Design Specifications</SectionTitle>
          
          <RequirementItem>
            <IconWrapper>
              <Palette size={20} />
            </IconWrapper>
            <RequirementText>
              <RequirementLabel>Color Scheme</RequirementLabel>
              <RequirementValue>{templateData.design.colors}</RequirementValue>
            </RequirementText>
          </RequirementItem>
          
          <RequirementItem>
            <IconWrapper>
              <Type size={20} />
            </IconWrapper>
            <RequirementText>
              <RequirementLabel>Typography</RequirementLabel>
              <RequirementValue>{templateData.design.typography}</RequirementValue>
            </RequirementText>
          </RequirementItem>
          
          <SectionTitle>Available Blocks</SectionTitle>
          <BlocksContainer>
            {templateData.blocks.map((block, index) => (
              <Block key={index}>{block}</Block>
            ))}
          </BlocksContainer>
        </DetailsCol>
      </Row>
    </PreviewContainer>
  );
};

export default TemplatePreview;