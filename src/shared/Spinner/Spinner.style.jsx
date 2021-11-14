import { keyframes } from 'styled-components';
import tw, { styled } from 'twin.macro';

const skeletonAnimate = keyframes`
    0% {
      transform: rotate(0);
      opacity: 1
    }
    50% {
      opacity: .7
    }
    100% {
      transform: rotate(360deg);
      opacity: 1
    }
`;

/*
    Spinner Color
*/
const spinnerColor = '#10B981';

export const SpinnerLogo = styled.div`
  width: 48px;
  height: 48px;
  display: inline-block;
  box-sizing: border-box;
  position : relative;
  animation: ${skeletonAnimate} 1.5s linear infinite;
`;

export const Skeleton = styled.div`
  border-radius: 50%;
  border-top: solid 6px ${spinnerColor};
  border-right: solid 6px transparent;
  border-bottom: solid 6px transparent;
  border-left: solid 6px transparent;
  position : absolute;
  width: 48px;
  height: 48px;
  &:before {
    border-radius: 50%;
    content: " ";
    width: 48px;
    height: 48px;
    display: inline-block;
    box-sizing: border-box;
    border-top: solid 6px transparent;
    border-right: solid 6px transparent;
    border-bottom: solid 6px transparent;
    border-left: solid 6px ${spinnerColor};
    position: absolute;
    top: -6px;
    left: -6px;
    transform: rotateZ(-30deg)
  }
  &:after {
    border-radius: 50%;
    content: " ";
    width: 48px;
    height: 48px;
    display: inline-block;
    box-sizing: border-box;
    border-top: solid 6px transparent;
    border-right: solid 6px ${spinnerColor};
    border-bottom: solid 6px transparent;
    border-left: solid 6px transparent;
    position: absolute;
    top: -6px;
    right: -6px;
    transform: rotateZ(30deg)
  }
`;

export const SpinnerWrapper = styled.div`
  ${tw`
    w-full
    h-screen
    flex
    justify-center
    items-center
  `}
`;
