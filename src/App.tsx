import React, { createContext, PureComponent } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import InfoPanel from './components/InfoPanel';
import Main from './components/Main';
import MinimapPanel from './components/MinimapPanel';
import TimelinePanel from './components/TimelinePanel';
import themeConfig from './config/theme';
import rootReducer from './reducers';

const store = createStore(rootReducer);

class App extends PureComponent {
  public render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={themeConfig}>
          <AppContainer>
            <Header showLayoutPanel={false} />
            <Main />
            <InfoPanel expanded={false} />
            <MinimapPanel />
            <TimelinePanel />
          </AppContainer>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;

const AppContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
`;
