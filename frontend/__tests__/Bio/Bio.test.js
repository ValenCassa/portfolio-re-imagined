import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { BioYear } from '../../components/Bio/Bio'

test('BioYear renders succesfully', () => {
    const component = render(
        <BioYear year={'2001'}> 
            Unit Testing
        </BioYear>
    )

    expect(component.container).toHaveTextContent('2001')
    expect(component.container).toHaveTextContent('Unit Testing')
})