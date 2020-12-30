import React from 'react'
import './Products.css'
import p1 from './photos/frotterimgs/img1.jpeg'
import p2 from './photos/frotterimgs/img2.jpeg'
import p3 from './photos/frotterimgs/img3.jpeg'
import p4 from './photos/frotterimgs/img4.jpeg'
import p5 from './photos/frotterimgs/img5.jpeg'
import p6 from './photos/frotterimgs/img6.jpeg'
import p7 from './photos/frotterimgs/img7.jpeg'
import p8 from './photos/frotterimgs/img8.jpeg'
import Button from '@material-ui/core/Button';
import EachProduct from './EachProduct'
import { ListItem } from '@material-ui/core'

function Products() {
    return (
        <div className='products'>
            <h1>Our Products</h1>
            <EachProduct
                    src={p1}
                    name="Lorem ipsum"
                    description=" Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                    subHeading="Features:"
                    line1="4-20mA input or 0-10Vdc input OR user specified input"
                    line2="On line 2 point calibration as per user’s requirement"
                    line3="High low alarm relay output and LED display"
                    line4="Compact size: DIN 48 x 96 x 120mm (H x L x D)"
                />
                  <EachProduct
                    src={p2}
                    name="Lorem ipsum"
                    description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                    subHeading="Features:"
                    line1="User configurable from milliseconds to Hours"
                    line2="User configurable On Delay / Off delay timer"
                    line3="User configurable one shot / cyclic timer"
                    line4="User configurable Power On / Trigger start"
                />
                <EachProduct
                    src={p3}
                    name="Lorem ipsum"
                    description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                    subHeading="Features:"
                    line1="User configurable from milliseconds to Hours"
                    line2="User configurable On Delay / Off delay timer"
                    line3="User configurable one shot / cyclic timer"
                    line4="User configurable Power On / Trigger start"
                />
                <EachProduct
                    src={p4}
                    name="Lorem ipsum"
                    description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                    subHeading="Features:"
                    line1="commonly used in the graphic, print,"
                    line2="commonly used in the graphic, print,"
                    line3="commonly used in the graphic, print,"
                    line4="commonly used in the graphic, print,"
                />
                <EachProduct
                    src={p5}
                    name="Lorem ipsum"
                    description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                    subHeading="Features:"
                    line1="commonly used in the graphic, print,"
                    line2="User configurable On Delay / Off delay timer"
                    line3="commonly used in the graphic, print,"
                    line4="User configurable Power On / Trigger start"
                />
        </div>
    )
}

export default Products
