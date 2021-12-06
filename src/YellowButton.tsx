import React from "react";
import {styled} from "@stitches/react"

const Button = styled('button', {
  backgroundColor: 'yellow'
})

export default function YellowButton() {
  return (
    <Button>{'test'}</Button>
  )
}