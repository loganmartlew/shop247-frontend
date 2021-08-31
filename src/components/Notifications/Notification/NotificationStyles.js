import styled from 'styled-components';
import { NotificationType } from '../../../contexts/NotificationContext';

export const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: min(30ch, 40vw);
  border-radius: 0.5em;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 3px 10px 1px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  animation: ${({ exit }) => (exit ? 'SlideRight' : 'SlideLeft')} 0.3s;
  animation-fill-mode: forwards;

  background-color: ${({ theme, type }) => {
    switch (type) {
      case NotificationType.ERROR: {
        return theme.colors.danger.hsl();
      }
      case NotificationType.WARN: {
        return theme.colors.warn.hsl();
      }
      default: {
        return theme.colors.success.hsl();
      }
    }
  }};

  @keyframes SlideLeft {
    0% {
      margin-left: 130%;
    }

    100% {
      margin-left: 0;
    }
  }

  @keyframes SlideRight {
    0% {
      margin-left: 0;
    }

    100% {
      margin-left: 130%;
    }
  }
`;

export const Message = styled.p`
  display: block;
  flex-grow: 1;
  justify-content: center;
  padding: 1em 1.3em;
`;

export const ProgressBar = styled.div`
  height: 0.6em;

  background-color: ${({ theme, type }) => {
    switch (type) {
      case NotificationType.ERROR: {
        return theme.colors.danger.lighten(0.3).hsl();
      }
      case NotificationType.WARN: {
        return theme.colors.warn.lighten(0.3).hsl();
      }
      default: {
        return theme.colors.success.lighten(0.3).hsl();
      }
    }
  }};
`;
