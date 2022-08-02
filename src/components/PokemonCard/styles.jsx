import { styled } from '@stitches/react'

import Image from 'next/image'

export const Button = styled('button', {})

export const Img = styled(Image, {
  backgroundColor: '#bcbbbbb8',
  borderRadius: '4px'
})

export const PokeName = styled('h2', {
  fontSize: '14px',
  textTransform: 'capitalize'
})
