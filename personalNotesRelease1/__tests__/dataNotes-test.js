import 'react-native';
import React from 'react';
import DataNotes from '../app/components/DataNotes';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <DataNotes />
    ).toJSON()
    expect(tree).toMatchSnapshot()
});
