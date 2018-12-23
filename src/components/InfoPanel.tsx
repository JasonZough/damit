import Icon from 'antd/lib/icon';
import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import { IStyledProps } from '../interfaces/StyledProps';

interface IProps {
  expanded: boolean;
}

class InfoPanel extends PureComponent<IProps> {
  public render() {
    return (
      <InfoPanelContainer expanded={this.props.expanded}>
        <Header>
          {this.props.expanded && <Title>属性面板</Title>}
          <Arrow>
            <Icon type={this.props.expanded ? 'double-right' : 'double-left'} />
          </Arrow>
        </Header>
        <Main expanded={this.props.expanded}>
          {!this.props.expanded && <Title vertical={true}>属性面板</Title>}
        </Main>
      </InfoPanelContainer>
    );
  }
}

const InfoPanelContainer = styled.div`
  position: absolute;
  right: 0;
  top: ${(props: IStyledProps) => props.theme.headerHeight + 'px'};
  bottom: 0;
  box-shadow: -2px 2px 10px #ddd;
  background: white;
  width: ${(props: IStyledProps) =>
    props.expanded
      ? props.theme.infoPanelExpandedWidth + 'px'
      : props.theme.infoPanelCollapsedWidth + 'px'};
`;

interface IExpandable {
  expanded: boolean;
}

const Header = styled.header`
  background: #e5e5e5;
  padding: 8px;
  overflow: hidden;
`;

const verticalTitleStyles = css`
  margin-top: 10px;
  letter-spacing: 4px;
  margin-left: 0px;
  vertical-align: middle;
  writing-mode: tb;
  cursor: default;
`;
const Title = styled.span<{ vertical?: boolean }>`
  letter-spacing: 1px;
  ${props => props.vertical && verticalTitleStyles}
`;

const Arrow = styled.span`
  float: right;
  font-weight: bold;
  cursor: pointer;
`;

const collapsedMainStyle = css`
  text-align: center;
`;
const Main = styled.main<IExpandable>`
  ${props => !props.expanded && collapsedMainStyle}
`;

export default InfoPanel;
