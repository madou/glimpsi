import styled, { css } from 'styled-components';

export const slider = css`
  overflow: visible;
  margin: 10px 20px;
  flex-basis: 100%;

  .rheostat-background {
    background-color: #fcfcfc;
    border: 1px solid #d8d8d8;
    position: relative;
    height: 15px;
    top: 0px;
    width: 100%;
  }

  .rheostat-progress {
    background-color: #abc4e8;
    position: absolute;
    height: 13px;
    top: 1px;
  }

  .rheostat-handle {
    background-color: #fff;
    border: 1px solid #d8d8d8;
    border-radius: 20%;
    height: 24px;
    outline: none;
    z-index: 2;
    width: 24px;
    margin-left: -12px;
    top: -5px;
  }

  .rheostat-handle:before,
  .rheostat-handle:after {
    content: '';
    display: block;
    position: absolute;
    background-color: #dadfe8;
    top: 7px;
    height: 10px;
    width: 1px;
  }

  .rheostat-handle:before {
    left: 10px;
  }

  .rheostat-handle:after {
    left: 13px;
  }
`;

export const Root = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
`;
