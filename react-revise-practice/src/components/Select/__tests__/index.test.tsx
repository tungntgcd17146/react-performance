/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen } from '@/utils/testUtils'
import { describe, expect, it, vi } from 'vitest'
import Tabs, { Props } from '..'

import { selectOption } from '@/constants/data'

const defaultProp = {
  options: selectOption,
  onChange: vi.fn()
} as Props

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  return render(<Tabs {...props} />)
}

describe('Tabs Test', () => {
  it('render select item default correctly', () => {
    setup()

    expect(screen.getByRole('combobox').textContent).toEqual(defaultProp.options[0].name)
  })

  it('render select item on dropdown correctly', async () => {
    setup()

    const selectInput = screen.getByRole('combobox')

    fireEvent.mouseDown(selectInput)

    expect(await screen.findByText(defaultProp.options[1].name as any)).toBeTruthy()
    expect(await screen.findByText(defaultProp.options[2].name as any)).toBeTruthy()
  })

  it('select item on dropdown call onChange correctly', async () => {
    setup()

    const selectInput = screen.getByRole('combobox')

    fireEvent.mouseDown(selectInput)

    const secondItem = await screen.findByText(defaultProp.options[1].name as any)

    fireEvent.click(secondItem)

    expect(defaultProp.onChange).toBeCalled()
  })
})
