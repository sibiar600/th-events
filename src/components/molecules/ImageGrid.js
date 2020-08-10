import React from 'react'
import ImageTall from '../atoms/ImageTall'

export const ImageGrid = (props) => {
    return (
        <div>
            <ImageTall imageURL={'https://source.unsplash.com/900x1600/?tokyo,people'} title={'Yuri, 41'} />
            <ImageTall imageURL={'https://source.unsplash.com/900x1600/?tokyo,people'} title={'Nozomi, 34'} />
            <ImageTall imageURL={'https://source.unsplash.com/900x1600/?tokyo,people'} title={'Yu, 32'} />
        </div>
    )
}
