import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { color, font } from "../guideline.jsx";
import FnButton from "./Button.jsx";

function ToolContainer() {
  const ToolBar = styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `;

  return <ToolBar />;
}

function Wrapper() {
  const Wrap = styled.section`
    display: flex;
    flex-flow: column;
  `;

  return <Wrap />;
}

function ScreenFilter() {
  const Filter = styled.div`
    background: ${color.longDark.quarterFull};
    opacity: 0.75;
  `;
}

function PreviewOverlay() {
  const Preview = styled.section`
    border: none;
    outline: solid 2px ${color.teal.full};
  `;

  return (
    <Wrapper>
      <ToolContainer>
        <FnButton type="figma" />
        <FnButton type="fullscreen" />
      </ToolContainer>
      <Preview>
        <ScreenFilter>
          <video src="" preload="auto" loop muted>
            <FontAwesomeIcon icon="fa-regular fa-circle-play" opacity="0.75" />
          </video>
        </ScreenFilter>
      </Preview>
    </Wrapper>
  );
}
