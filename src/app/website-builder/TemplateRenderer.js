"use client";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Calendar, ShoppingBag, Image, BookOpen, Briefcase, PenTool, Music, Heart, Award, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Import styled components from your existing templates
const PageHeader = styled.h1`
  text-align: center;
  font-weight: 700;
  margin-bottom: 8px;
  font-size: 2.5rem;
`;

const PageSubtitle = styled.p`
  text-align: center;
  color: #6c757d;
  margin-bottom: 40px;
`;

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

// Component to render different template sections
const TemplateSection = ({ section }) => {
  switch (section._template) {
    case 'hero':
      return (
        <div className="mb-5">
          <h2 style={{ marginBottom: '1.5rem' }}>{section.heading}</h2>
          {section.subheading && <p>{section.subheading}</p>}
        </div>
      );
      
    case 'events':
      return (
        <div className="mb-5">
          <h2 style={{ marginBottom: '1.5rem' }}>{section.heading}</h2>
          <Row>
            {section.eventItems.map((event, index) => (
              <Col md={4} key={index}>
                <EventCard>
                  <div style={{ padding: '0.75rem 1rem' }}>
                    <span style={{ fontSize: '0.8rem', color: '#777' }}>{event.location}</span>
                    <EventTitle>{event.title}</EventTitle>
                  </div>
                  <EventImage style={{ backgroundImage: `url(${event.image})` }} />
                  <EventFooter>
                    <div>
                      <div style={{ fontSize: '0.75rem' }}>4 AM</div>
                      <div style={{ fontSize: '0.75rem' }}>{event.date}</div>
                    </div>
                    <EventPrice>{event.price}</EventPrice>
                  </EventFooter>
                </EventCard>
              </Col>
            ))}
          </Row>
        </div>
      );
      
    case 'locations':
      return (
        <div className="mb-5">
          <h2 style={{ marginBottom: '1.5rem' }}>{section.heading}</h2>
          <Row>
            {section.locationItems.map((location, index) => (
              <Col md={6} key={index} className="mb-3">
                <LocationCard bgColor={location.bgColor}>
                  <div>
                    <LocationName>{location.name}</LocationName>
                    <LocationDetail>{location.detail}</LocationDetail>
                  </div>
                  <ChevronRight size={18} />
                </LocationCard>
              </Col>
            ))}
          </Row>
        </div>
      );
      
    default:
      return <div>Unknown section type: {section._template}</div>;
  }
};

// Main template renderer component
const TemplateRenderer = ({ pageData, templateId }) => {
  if (!pageData) {
    return <div>Loading template data...</div>;
  }

  return (
    <Container className="py-5">
      <PageHeader>{pageData.title}</PageHeader>
      
      {pageData.sections && pageData.sections.map((section, index) => (
        <TemplateSection key={index} section={section} />
      ))}
    </Container>
  );
};

export default TemplateRenderer;