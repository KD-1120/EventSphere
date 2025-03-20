"use client";
import React from "react";
import {Button } from 'react-bootstrap';
import styled from "styled-components";
import {useRouter} from 'next/navigation';

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  cursor: pointer;
  color:rgb(0, 157, 136);
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

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

const LoginButton = styled(Button)`
  background-color: transparent;
  border: none;
  text-decoration: none;
  color: rgb(0, 157, 136);
  padding: 0.5rem 1rem;
  font-weight: 500;
  &:hover {
    background-color: rgba(0, 194, 168, 0.1);
    color: #00a692;
  }
`;
export default function Navigation() {
  const router = useRouter();
    return(
<>
    <NavbarWrapper>
        <Logo onClick={()=> router.push("/")}>EventSphere🟡</Logo>
        <NavLinks>
          <NavLink href="#features">✦ Features</NavLink>
          <NavLink href="#pricing">$ Pricing</NavLink>
          <NavLink href="#templates">⊞ Templates</NavLink>
          <NavLink href="#resources">⧉ Resources</NavLink>
        </NavLinks>
        <NavButtons>
          <LoginButton variant="link">Login</LoginButton>
          <GetStartedButton>Explore</GetStartedButton>
        </NavButtons>
    </NavbarWrapper>
</>
    );
}