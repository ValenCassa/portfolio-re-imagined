import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { prettyDOM } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Components
import AnimatedSection from '../../components/Layout/AnimatedSection'
import BackLink from '../../components/Layout/BackLink'
import { HeroContainer, BluredContainer } from '../../components/Layout/Containers'
import Meta from '../../components/Layout/Meta'

// Could not test Post and Work components since they use react-markdown.

jest.mock('next/head', () => {
    return {
      __esModule: true,
      default: ({ children }) => {
        return <>{children}</>;
      },
    };
  });

describe('Testing layout components', () => {
    const Test = () => {
        return (
            <div>Testing</div>
        )
    }
    test('<AnimatedSection /> takes the children', () => {
        const component = render(
            <AnimatedSection>
                <Test />
            </AnimatedSection>
        )

        expect(component.container).toHaveTextContent('Testing')
    })

    test('<BackLink /> displays both link both link and the title correctly', () => {
        const component = render(
            <BackLink href={'https://testing.com'} title={'This is test'} previous={'Testing Link'}/>
        )

        const link = component.container.querySelector('a')

        expect(component.container).toHaveTextContent('This is test')
        expect(component.container).toHaveTextContent('Testing Link')
        expect(link).toBeTruthy()
    })

    test('<HeroContainer /> displays the children and takes the id', () => {
        const component = render(
            <HeroContainer id={'Test'}>
                <Test />
            </HeroContainer>
        )

        const id = component.container.querySelector('#Test')
        
        expect(component.container).toHaveTextContent('Testing')
        expect(id).toBeTruthy()

    })

    test('<BluredContainer /> displays children', () => {
        const component = render(
            <BluredContainer>
                <Test />
            </BluredContainer>
        )

        expect(component.container).toHaveTextContent('Testing')
    })

    test('<Meta /> works as expected', async () => {

        const image = new File(['hey'], 'testing.png', { type: 'image/png' })

        const { debug } = render(<Meta title={'Testing'} description={'Testing desc'} image={image} />,
        { container: document.head })

        debug() // I'm doing this because it seems Jest cannot handle testing OpenGraph's meta tags
    })

})