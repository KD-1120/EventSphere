"use client";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Calendar, ShoppingBag, Image, BookOpen, Briefcase, PenTool, Music, Heart, Award } from 'lucide-react';
import Link from 'next/link';

// Styled Components
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

const CardWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s, box-shadow 0.3s;
  margin-bottom: 30px;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 194, 168, 0.1);
  }
`;

const CardImageContainer = styled.div`
  overflow: hidden;
  height: 200px;
  background-color: #f8f9fa;
  position: relative;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CardDescription = styled.p`
  color: #6c757d;
  margin-bottom: 5px;
  font-size: 0.9rem;
`;

const ViewButton = styled.a`
  display: block;
  text-align: center;
  padding: 10px;
  margin-top: 15px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  text-decoration: none;
  color: #00c2a8;
  transition: background-color 0.2s, color 0.2s;
  
  &:hover {
    background-color: #00c2a8;
    color: white;
    border-color: #00c2a8;
  }
`;

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #00c2a8;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background-color: #e0f7f4;
  border-radius: 8px; 
  margin-right: 1em;
`;

// Template Card Component
const TemplateCard = ({ title, description1, description2, imageUrl, icon: Icon, link }) => {
  return (
    <Col xs={12} md={6} lg={4}>
      <CardWrapper>
        <CardImageContainer>
          <CardImage src={imageUrl} alt={title} />
        </CardImageContainer>
        <CardContent>
          <CardTitle>
            <IconWrapper>{Icon && <Icon size={24} style={{verticalAlign: 'middle'}} />}</IconWrapper>
            {title}
          </CardTitle>
          <CardDescription>{description1}</CardDescription>
          <CardDescription>{description2}</CardDescription>
          <ViewButton href={link} as="a">View Template</ViewButton>
        </CardContent>
      </CardWrapper>
    </Col>
  );
};

// Main Component
const TemplateGallery = () => {
  const templates = [
    {
      title: "BrightSpace",
      description1: "Clean and modern interface",
      description2: "Ideal for various projects",
      imageUrl: "/images/template1.jpg",
      icon: Heart,
      link: "/templates/template-library"
    },
    {
      title: "VisionFlow",
      description1: "Sleek and professional",
      description2: "Highly adaptable layout",
      imageUrl: "/images/template2.jpg",
      icon: Briefcase,
      link: "/templates/template-library"
    },
    {
      title: "PixelCraft",
      description1: "Stylish and creative",
      description2: "Perfect for visual storytelling",
      imageUrl: "/images/template3.jpg",
      icon: ShoppingBag,
      link: "/templates/template-library"
    },
    {
      title: "ColorBurst",
      description1: "Bold and eye-catching design",
      description2: "Great for vibrant projects",
      imageUrl: "/images/template4.jpg",
      icon: PenTool,
      link: "/templates/template-library"
    },
    {
      title: "EchoWave",
      description1: "Smooth and dynamic layout",
      description2: "Ideal for multimedia content",
      imageUrl: "/images/template5.jpg",
      icon: Music,
      link: "/templates/template-library"
    },
    {
      title: "FrameFocus",
      description1: "Minimalist and sleek",
      description2: "Showcase your best work",
      imageUrl: "/images/template6.jpg",
      icon: Image,
      link: "/templates/template-library"
    },
    {
      title: "InspireWrite",
      description1: "Refined and structured",
      description2: "Tailored for content creators",
      imageUrl: "/images/template7.jpg",
      icon: BookOpen,
      link: "/templates/template-library"
    },
    {
      title: "Prestige",
      description1: "Elegant and timeless",
      description2: "Sophisticated design elements",
      imageUrl: "/images/template8.jpg",
      icon: Award,
      link: "/templates/template-library"
    },
    {
      title: "SeasonFlow",
      description1: "Versatile and adaptable",
      description2: "Ideal for seasonal themes",
      imageUrl: "/images/template9.jpg",
      icon: Calendar,
      link: "/templates/template-library"
    }
  ];

  return (
    <Container className="py-5">
      <PageHeader>Create & Customize</PageHeader>
      <PageSubtitle>Find the perfect template for your next event and make it your own with ease.</PageSubtitle>
      
      <Row>
        {templates.map((template, index) => (
          <TemplateCard
            key={index}
            title={template.title}
            description1={template.description1}
            description2={template.description2}
            imageUrl={template.imageUrl}
            icon={template.icon}
            link={template.link}
          />
        ))}
      </Row>
    </Container>
  );
};

export default TemplateGallery;
