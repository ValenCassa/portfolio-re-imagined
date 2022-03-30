import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { prettyDOM } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Components
import PostCard from '../../components/PostCard/PostCard'
import { FeaturedWorkCard } from '../../components/WorkCard/WorkCard'

const fn = jest.fn()

describe('Testing Cards', () => {
    test('<PostCard /> takes the values and displays them correctly', () => {
        const post = {
            date: 'Test Date',
            type: 'Test Type',
            title: 'Testing',
            content: 'This is testing',
            imagePath: 'image.png'
        }

        const component = render(
            <PostCard post={post} href={'https://valencassa.dev'} onDelete={fn} />
        )

        expect(component.container).toHaveTextContent('Testing')

        // Check if delete icon exists
        component.rerender(
            <PostCard post={post} href={'https://valencassa.dev'} onDelete={fn} deleteable={true}/>
        )
        const deleteIcon = component.container.querySelector('svg')
        expect(deleteIcon).toBeTruthy()
    })

    test('<WorkCard /> takes the values and displays them correctly', () => {
        const component = render(
            <FeaturedWorkCard date={'Testing Date'} title={'Testing'} stack={['Testing']} href={'https://valencassa.dev'} onDelete={fn} />
        )

        expect(component.container).toHaveTextContent('Testing')

        // Check if delete icon exists

        component.rerender(
            <FeaturedWorkCard date={'Testing Date'} title={'Testing'} stack={['Testing']} href={'https://valencassa.dev'} onDelete={fn} deleteable={true} />
        )
        const deleteIcon = component.container.querySelector('svg')
        expect(deleteIcon).toBeTruthy()
    })
})