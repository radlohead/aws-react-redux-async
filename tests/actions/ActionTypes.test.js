import * as React from 'react';
import * as Jest from 'jest';
import * as types from '../../src/actions/ActionTypes';

it('DAILYLOOK', () => {
    expect(types.DAILYLOOK).toEqual('DAILYLOOK');
});