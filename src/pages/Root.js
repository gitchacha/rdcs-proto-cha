import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { stores } from '../store';
import FrameLocalNavigationBar from './FrameLocalNavigationBar';
import FrameWorkSheet from './FrameWorkSheet';

const Root = () => {
    return (
        <Provider  {...stores}>
            <BrowserRouter>
                <FrameLocalNavigationBar />
                <FrameWorkSheet />
            </BrowserRouter>
        </Provider>
    );
};

export default Root; 