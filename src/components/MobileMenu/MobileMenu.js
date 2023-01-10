/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal>
      <ModalContent aria-label="Navigation Menu">
        <CloseButton id="close" strokeWidth="2" onClick={onDismiss}>
          Dismiss menu
        </CloseButton>
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </ModalContent>
    </Modal>
  );
};

const Modal = styled(DialogOverlay)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsla(220, 5%, 40%, 0.8);
`;

const ModalContent = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 32px;
`;

const CloseButton = styled(Icon)`
  align-self: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  gap: 22px;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  & a {
    font-size: ${18 / 16}rem;
    font-weight: 600;
    color: ${COLORS.gray[900]};
    text-transform: uppercase;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;

  & a {
    color: ${COLORS.gray[500]};
    text-decoration: none;
  }
`;

export default MobileMenu;
