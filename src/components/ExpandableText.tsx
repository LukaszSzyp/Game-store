import { Button, Typography } from "@mui/material"
import { useState } from "react"

interface Props {
  children: string
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false)
  const limit = 300

  if (!children) return null

  if (children.length <= limit) return <Typography>{children}</Typography>

  const summary = expanded ? children : children.substring(0, limit) + "..."

  return (
    <Typography p={2}>
      {summary}
      <Button
        variant="outlined"
        color="primary"
        size="small"
        style={{ color: "inherit" }}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read more"}
      </Button>
    </Typography>
  )
}

export default ExpandableText
