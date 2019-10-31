import React from 'react';
import renderer from 'react-test-renderer';

import Actions from './Actions';
import Placeholder from './Placeholder';
import SubContent from './SubContent';
import TextOnly from './TextOnly';


describe('Page Snapshot Tests', function () {
    it('Actions Matches', () => {
        const tree = renderer.create(
            <Actions />
        ).toJSON();
        console.log("tree", tree)
        expect(tree).toMatchSnapshot();
    });
    it('Placeholder Matches', () => {
        const tree = renderer.create(
            <Placeholder />
        ).toJSON();
        console.log("tree", tree)
        expect(tree).toMatchSnapshot();
    });
    it('SubContent Matches', () => {
        const tree = renderer.create(
            <SubContent />
        ).toJSON();
        console.log("tree", tree)
        expect(tree).toMatchSnapshot();
    });
    it('TextOnly Matches', () => {
        const tree = renderer.create(
            <TextOnly />
        ).toJSON();
        console.log("tree", tree)
        expect(tree).toMatchSnapshot();
    });
});