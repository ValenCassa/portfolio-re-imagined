import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { prettyDOM } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Components
import DateSelector from '../../components/CreateTool/resources/DateSelector'
import Dropzone from '../../components/CreateTool/resources/Dropzone'
import GroupData from '../../components/CreateTool/resources/GroupData'
import InputField from '../../components/CreateTool/resources/InputField'
import MultiSelect from '../../components/CreateTool/resources/MultiSelect'
import Preview from '../../components/CreateTool/resources/Preview'
import SubmitButton from '../../components/CreateTool/resources/SubmitButton'

/* Didn't run tests on Select as it is the same as MultiSelect. 
Same happens with TextArea, it's really similar to Inputfield
I also could not test the Markdown component (nor the components that use it), I've seen on StackOverflow
and GitHub that errors for testing purposes are not fixed yet
*/

describe('Test resources components of <CreateUpdate />', () => {
    let data
    beforeEach(() => {
        data = {
            stack: [],
            platform: [],
            featured: false,
            website: '',
            title: '',
            date: 'Select a date',
            image: null,
            content: '',
            featuredTech: '',
            repository: '',
        }
    })

    const setData = (info) => {
        data = info
    }

    test(`<DateSelector /> shows 'Select a date' at first and the formatedDate when selected`, async () => {
        let date = new Date()

        const setDate = (value) => {
            date = value
        }
        
        const component = render(
            <DateSelector data={data} date={date} setDate={setDate} setData={setData} formatedDate={data.date}/>
        )


        expect(component.container).toHaveTextContent('Select a date')

        const selectedDate = component.getByLabelText('March 20, 2022').closest('button')
        fireEvent.click(selectedDate)


        component.rerender(<DateSelector data={data} date={date} setDate={setDate} setData={setData} formatedDate={data.date}/>)
        const reRendered = component.getByText('20 March 2022')

        expect(reRendered).toBeTruthy()

    })

    test('<Dropzone /> takes the file', () => {
        let file = new File(['hey'], 'testing.png', { type: 'image/png' })
        const setFile = (files) => {
            file = files
        }

        const component = render(
            <Dropzone setFile={setFile} setData={setData} file={file} data={data} />
        )

        const section = component.container.querySelector('.dropzone')

        expect(section).toHaveStyle({
            backgroundImage: `url(${file})`
        })
    })

    test('<GroupData /> works as expected', () => {
        const RightComponent = () => {
            return (
                <div>Right</div>
            )
        }
        const LeftComponent = () => {
            return (
                <div>Left</div>
            )
        }

        const component = render (
            <GroupData leftItem={<LeftComponent />} rightItem={<RightComponent />} />
        )

        expect(component.container).toHaveTextContent('Right')
        expect(component.container).toHaveTextContent('Left')
    })

    test('<InputField /> works as expected', async () => {


        const component = render(
            <InputField value={undefined} onChange={undefined} title={'Testing'} />
        )

        const input = component.getByRole('textbox')
        
        await waitFor(() => userEvent.type(input, 'This is a test'))

        expect(input).toHaveValue('This is a test')

    })

    test('<MultiSelect /> takes selected values and can add and delete options', async () => {
        const options = [
            { value: 'Testing', label: 'Testing' },
            { value: 'Testing 2', label: 'Testing 2' },
        ]

        const setState = (value, e) => {
            data = { ...data, platform: value.map(v => v.value) }
        }

        const component = render(
            <MultiSelect title={'Testing Title'} options={options} setState={setState} />
        )
        // Add option
        const inputContainer = component.container.querySelector('.react-select__input-container')
        await waitFor(() => userEvent.click(inputContainer))
        await waitFor(() => userEvent.type(inputContainer, 'TestOption'))
        const addButton = component.container.querySelector('#react-select-value-select-option-2')
        await waitFor(() => userEvent.click(addButton))
        const multiValue = component.container.querySelector('.react-select__multi-value')
        expect(multiValue).toHaveTextContent('TestOption')

        // Delete option
        const deleteButton = component.getByLabelText('Remove TestOption')
        await waitFor(() => userEvent.click(deleteButton))
        expect(component.container).not.toHaveTextContent('TestOption')
        
        
        // Select existing option
        const openButton = component.container.querySelector('.react-select__indicator')
        await waitFor(() => userEvent.click(openButton))
        const selectedOption = component.container.querySelector('#react-select-value-select-option-0')
        await waitFor(() => userEvent.click(selectedOption))
        expect(component.container).toHaveTextContent('Testing')    
    })

    test('Preview displays children', () => {
        const Mock = () => {
            return (
                <div>Testing</div>
            )
        }

        const component = render(
            <Preview>
                <Mock />
            </Preview>
        )

        expect(component.container).toHaveTextContent('Testing')
    })


    test('<SubmitButton /> displays message correctly', async () => {
        let submitted
        let condition

        const component = render(
            <SubmitButton testId={'svg'} title={'Create Work'} submitted={submitted} condition={condition} />
        )

        expect(component.container).toHaveTextContent('Complete missing fields')

        // Check if loader works
        submitted = true
        component.rerender(
            <SubmitButton testId={'svg'} title={'Create Work'} submitted={submitted} condition={condition} />
        )
        const loader = component.container.querySelector('svg')
        expect(loader).toBeTruthy()

        // Check not missing fields and update title
        condition = true
        submitted = false
        component.rerender(
            <SubmitButton testId={'svg'} title={'Update Work'} submitted={submitted} condition={condition} />
        )
        expect(component.container).toHaveTextContent('Update')
    })
    
})