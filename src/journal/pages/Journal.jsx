import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { JournalStyles } from "../layout/JournalStyles"
import { NothigSelectedView, NoteView } from "../views"

export const Journal = () => {
  return (
    <JournalStyles>
      <NothigSelectedView />

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: .9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />

      </IconButton>
    </JournalStyles>
  )
}
