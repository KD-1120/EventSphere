"use client";
import React, { useState, useEffect } from 'react';
import { TinaMarkdown, useTina } from "tinacms/dist/react";
import { TinaCMS, TinaProvider } from "tinacms";
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Sparkles, Settings, Layout, Save, Eye, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Styled Components
const BuilderContainer = styled(Container)`
  padding: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const BuilderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
`;

const ActionButton = styled(Button)`
  margin-left: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
`;

const SaveButton = styled(ActionButton)`
  background-color: #00c2a8;
  border: none;
  
  &:hover {
    background-color: #00a18d;
  }
`;

const PreviewButton = styled(ActionButton)`
  background-color: white;
  border: 1px solid #dee2e6;
  color: #333;
  
  &:hover {
    background-color: #f8f9fa;
    color: #333;
    border-color: #dee2e6;
  }
`;

const BackButton = styled(ActionButton)`
  background-color: white;
  border: 1px solid #dee2e6;
  color: #333;
  
  &:hover {
    background-color: #f8f9fa;
    color: #333;
    border-color: #dee2e6;
  }
`;

const BuilderContent = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const SidebarPanel = styled.div`
  width: 300px;
  background-color: #f9f9f9;
  border-right: 1px solid #e0e0e0;
  overflow-y: auto;
  padding: 1.5rem;
`;

const MainPanel = styled.div`
  flex: 1;
  overflow-y: auto;
  background-color: #f0f0f0;
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

const TemplatePreviewWrapper = styled.div`
  background-color: white;
  width: 100%;
  max-width: 1200px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
`;

const TemplateSelector = styled.div`
  margin-bottom: 2rem;
`;

const TemplateOption = styled.div`
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 0.8rem;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  border: 2px solid ${props => props.selected ? '#00c2a8' : 'transparent'};
  
  &:hover {
    border-color: ${props => props.selected ? '#00c2a8' : '#e0e0e0'};
  }
`;

const TemplateThumb = styled.div`
  height: 120px;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  background-image: url(${props => props.imageUrl || '/api/placeholder/300/120'});
  background-size: cover;
  background-position: center;
`;

const TemplateName = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0.5rem 0 0.2rem;
`;

const TemplateDesc = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin: 0;
`;

// Main Component
const WebsiteBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('brightspace');
  const [viewMode, setViewMode] = useState('edit'); // 'edit' or 'preview'
  
  const templates = [
    {
      id: 'brightspace',
      name: 'BrightSpace',
      description: 'Clean and modern interface',
      imageUrl: '/images/template1.jpg',
    },
    {
      id: 'visionflow',
      name: 'VisionFlow',
      description: 'Sleek and professional',
      imageUrl: '/images/template2.jpg',
    },
    {
      id: 'pixelcraft',
      name: 'PixelCraft',
      description: 'Stylish and creative',
      imageUrl: '/images/template3.jpg',
    }
  ];

  const cms = new TinaCMS({
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || 'dummy-client-id',
    branch: process.env.NEXT_PUBLIC_TINA_BRANCH || 'main',
    token: process.env.NEXT_PUBLIC_TINA_TOKEN,
    mediaStore: async () => {
      // You would implement your media handling here
      return {
        // Media store methods
      };
    },
  });

  return (
    <TinaProvider cms={cms}>
      <BuilderContainer fluid>
        <BuilderHeader>
          <HeaderTitle>
            <Sparkles size={22} style={{ marginRight: '10px', color: '#00c2a8' }} />
            Website Builder
          </HeaderTitle>
          <div>
            <Link href="/templates" passHref>
              <BackButton as="a">
                <ArrowLeft size={18} />
                Back to Templates
              </BackButton>
            </Link>
            <PreviewButton onClick={() => setViewMode(viewMode === 'edit' ? 'preview' : 'edit')}>
              <Eye size={18} />
              {viewMode === 'edit' ? 'Preview' : 'Edit'}
            </PreviewButton>
            <SaveButton>
              <Save size={18} />
              Save Changes
            </SaveButton>
          </div>
        </BuilderHeader>
        <BuilderContent>
          {viewMode === 'edit' && (
            <SidebarPanel>
              <SectionTitle>Choose Template</SectionTitle>
              <TemplateSelector>
                {templates.map((template) => (
                  <TemplateOption 
                    key={template.id}
                    selected={selectedTemplate === template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                  >
                    <TemplateThumb imageUrl={template.imageUrl} />
                    <TemplateName>{template.name}</TemplateName>
                    <TemplateDesc>{template.description}</TemplateDesc>
                  </TemplateOption>
                ))}
              </TemplateSelector>
              
              <SectionTitle>Content Settings</SectionTitle>
              {/* TinaCMS form fields would be rendered here */}
              <div>
                {/* This would be populated with TinaCMS fields */}
                <p style={{ fontSize: '0.8rem', color: '#666' }}>
                  Edit your website content using the form fields provided by TinaCMS.
                </p>
              </div>
            </SidebarPanel>
          )}
          <MainPanel>
            <TemplatePreviewWrapper>
              {/* Here we would render the selected template with TinaCMS data */}
              <div style={{ padding: '2rem' }}>
                <h2>Template Preview: {templates.find(t => t.id === selectedTemplate)?.name}</h2>
                <p>This area would display the selected template with your content edits.</p>
                {/* Template preview would go here */}
              </div>
            </TemplatePreviewWrapper>
          </MainPanel>
        </BuilderContent>
      </BuilderContainer>
    </TinaProvider>
  );
};

export default WebsiteBuilder;