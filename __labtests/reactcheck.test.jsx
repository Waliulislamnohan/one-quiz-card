// * Production start
import '@testing-library/jest-dom'
import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import App from '/home/damner/code/src/App'

describe("suite", () => {
test('4 correct', () => {
	render(<App />)
	fireEvent.click(screen.getByText('Paris'))
	fireEvent.click(screen.getByText('Elon Musk'))
	fireEvent.click(screen.getByText('Apple'))
	fireEvent.click(screen.getByText('7'))
	expect(screen.getByText('You scored 4 out of', { exact: false }))
})

test('3 correct', () => {
	render(<App />)
	fireEvent.click(screen.getByText('Paris'))
	fireEvent.click(screen.getByText('Tony Stark'))
	fireEvent.click(screen.getByText('Apple'))
	fireEvent.click(screen.getByText('7'))
	expect(screen.getByText('You scored 3 out of', { exact: false }))
})

test('2 correct', () => {
	render(<App />)
	fireEvent.click(screen.getByText('Paris'))
	fireEvent.click(screen.getByText('Tony Stark'))
	fireEvent.click(screen.getByText('Apple'))
	fireEvent.click(screen.getByText('6'))
	expect(screen.getByText('You scored 2 out of', { exact: false }))
})

test('1 correct', () => {
	render(<App />)
	fireEvent.click(screen.getByText('New York'))
	fireEvent.click(screen.getByText('Tony Stark'))
	fireEvent.click(screen.getByText('Apple'))
	fireEvent.click(screen.getByText('1'))
	expect(screen.getByText('You scored 1 out of', { exact: false }))
})

test('1 correct', () => {
	render(<App />)
	fireEvent.click(screen.getByText('New York'))
	fireEvent.click(screen.getByText('Tony Stark'))
	fireEvent.click(screen.getByText('Intel'))
	fireEvent.click(screen.getByText('1'))
	expect(screen.getByText('You scored 0 out of', { exact: false }))
})
})