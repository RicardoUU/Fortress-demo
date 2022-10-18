import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, test } from 'vitest';
import Button from '..';

describe('Button', () => {
  test('Button component renders correctly', () => {
    const component = renderer.create(
      <Button />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('The greetee prop works', () => {
    const component = renderer.create(
      <Button />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})