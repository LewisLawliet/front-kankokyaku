import Footer from './footer'
import Apropos from './apropos'
import { render } from '@testing-library/react'
//import { ThemeProvider } from '../../utils/context'

describe('Footer', () => {
    test('Should render without crashing', async () => {
        render(
            
                <Apropos />
         
        )
    })
})