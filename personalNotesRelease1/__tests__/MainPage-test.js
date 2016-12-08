import 'react-native';
import React from 'react';
import MainPage from '../app/components/MainPage';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <MainPage />
    );
});