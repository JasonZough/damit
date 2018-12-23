import Tooltip from 'antd/lib/tooltip';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import layouts from '../../config/layouts';
import ILayout from '../../interfaces/Layout';
import { IStyledProps } from '../../interfaces/StyledProps';

class LayoutPanel extends PureComponent {
  public render() {
    return (
      <LayoutPanelContainer>
        <LayoutList>
          {layouts.map(layout => (
            <Layout key={layout.value} layout={layout} />
          ))}
        </LayoutList>
      </LayoutPanelContainer>
    );
  }
}

const LayoutPanelContainer = styled.div`
  position: absolute;
  top: 100%;
  height: 155px;
  width: 100%;
  background: white;
  border-bottom: 1px solid #eee;
  box-shadow: 0 2px 4px #eee;
  z-index: 99;
`;

const LayoutList = styled.ul`
  height: 100%;
  overflow: hidden;
`;

const Layout = ({ layout }: { layout: ILayout }) => (
  <Tooltip title={layout.desc}>
    <LayoutEl>
      <Legend src={layout.legend} />
      <LayoutName>{layout.name}</LayoutName>
    </LayoutEl>
  </Tooltip>
);

const LayoutEl = styled.li`
  display: inline-block;
  height: 100%;
  cursor: pointer;
  padding: 0 20px;
  line-height: initial;
  text-align: center;
  &:hover {
    background: #eee;
  }
`;

const Legend = styled.img`
  border: 1px solid #ccc;
  margin: 10px 0;
  width: auto;
  ${LayoutEl}.active & {
    border-color: ${props => (props as IStyledProps).theme.mainColor};
  }
`;

const LayoutName = styled.p`
  color: #555;
  margin: 0;
`;

export default LayoutPanel;
