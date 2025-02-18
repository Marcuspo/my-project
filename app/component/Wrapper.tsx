"use client"
import React from "react"
import { Wrapper } from "@googlemaps/react-wrapper"

export const GoogleMapsWrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  // Ideally we want the apiKey to be fetch from an environment variable
  const apiKey = "AIzaSyDoevml772J99aCxXcahUvPJZdpAEj8Mew"

  if (!apiKey) {
    return <div>Cannot display the map: google maps api key missing</div>
  }

  return (
    <Wrapper version="beta" libraries={["marker", "maps"]} apiKey={apiKey}>
      {children}
    </Wrapper>
  )
}
