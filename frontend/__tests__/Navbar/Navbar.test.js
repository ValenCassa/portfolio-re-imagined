import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { prettyDOM } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Components
import DropdownMenu from '../../components/Navbar/resources/DropdownMenu'


describe('Testing Navbar components', () => {
    const TestChildren = () => {
        return (
            <div>Testing</div>
        )
    }


    test('<DropdownMenu /> works as expected', async () => {
        const component = render(
            <DropdownMenu icon={'Icon'} >
                <TestChildren />
            </DropdownMenu>
        )

        // When clicked, id is active, if not clicked it does not exists

        const button = component.container.querySelector('button')
        expect(component.container.querySelector('#active')).not.toBeTruthy()
        await waitFor(() => userEvent.click(button))
        const active = component.container.querySelector('#active')
        expect(active).toBeTruthy()

        // Renders Icon and children

        expect(component.container).toHaveTextContent('Icon')
        expect(component.container).toHaveTextContent('Testing')
    })


})