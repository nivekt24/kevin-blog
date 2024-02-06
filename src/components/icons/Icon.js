import React from "react"
import { IconExternal, IconGitHub, IconTwitter } from "../icons"

const Icon = ({ name }) => {
  switch (name) {
    case "External":
      return <IconExternal />
    case "GitHub":
      return <IconGitHub />
    case "Twitter":
      return <IconTwitter />
    default:
      return <IconExternal />
  }
}

export default Icon
