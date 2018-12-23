import Icon from 'antd/lib/icon';
import Menu from 'antd/lib/menu';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import IScene from '../../interfaces/Scene';
import { IStyledProps } from '../../interfaces/StyledProps';

interface IProps {
  recentScenes: IScene[];
  checkedItems: {
    infoPanel?: boolean;
    minimapPanel?: boolean;
    timelinePanel?: boolean;
    subgraph?: boolean;
    nodeLabel?: boolean;
    tip?: boolean;
    count?: boolean;
  };
}

class Menus extends PureComponent<IProps> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <Wrapper>
        <Menu mode="horizontal">
          <Menu.SubMenu title="场景">
            <Menu.Item key="saveScene">
              <Label>保存</Label>
              <ShortCut>Ctrl+S</ShortCut>
            </Menu.Item>
            <Menu.Item key="clearScene">
              <Label>清空</Label>
              <ShortCut>Ctrl+D</ShortCut>
            </Menu.Item>
            <Menu.SubMenu title="历史场景">
              {this.props.recentScenes.map(scene => (
                <Menu.Item key={scene.id}>{scene.name}</Menu.Item>
              ))}
            </Menu.SubMenu>
          </Menu.SubMenu>
          <Menu.Item key="toggleLayoutPanel">布局</Menu.Item>
          <Menu.Item key="analyze">分析</Menu.Item>
          <Menu.SubMenu title="显示">
            <Menu.Item key="toggleInfoPanel">
              <Icon type={this.props.checkedItems.infoPanel ? 'check' : ''} />
              <Label>属性面板</Label>
            </Menu.Item>
            <Menu.Item key="toggleMinimapPanel">
              <Icon
                type={this.props.checkedItems.minimapPanel ? 'check' : ''}
              />
              <Label>导航图</Label>
            </Menu.Item>
            <Menu.Item key="toggleTimelinePanel">
              <Icon
                type={this.props.checkedItems.timelinePanel ? 'check' : ''}
              />
              <Label>时间线</Label>
            </Menu.Item>
            <Menu.SubMenu
              title={
                <span>
                  <Icon type="" />
                  节点显示
                </span>
              }
            >
              <Menu.Item key="highlightSubgraph">
                <Icon type={this.props.checkedItems.subgraph ? 'check' : ''} />
                <Label>高亮子图</Label>
              </Menu.Item>
              <Menu.Item key="toggleNodeLabel">
                <Icon type={this.props.checkedItems.nodeLabel ? 'check' : ''} />
                <Label>关系标签</Label>
              </Menu.Item>
              <Menu.Item key="toggleTip">
                <Icon type={this.props.checkedItems.tip ? 'check' : ''} />
                <Label>节点显示</Label>
              </Menu.Item>
              <Menu.Item key="toggleCount">
                <Icon type={this.props.checkedItems.count ? 'check' : ''} />
                <Label>高亮子图</Label>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
        </Menu>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: inline-block;
  .ant-menu {
    display: inline-block;
    background: ${props => (props as IStyledProps).theme.headerBgColor};
    color: white;
    line-height: ${props =>
      (props as IStyledProps).theme.headerHeight - 1 + 'px'};
  }
`;
const Label = styled.span``;
const ShortCut = styled.span`
  position: absolute;
  right: 20px;
  color: #aaa;
`;

export default Menus;
