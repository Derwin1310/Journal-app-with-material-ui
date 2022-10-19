import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal"
import { JournalStyles } from "../layout/JournalStyles"
import { NothigSelectedView, NoteView } from "../views"

export const Journal = () => {
  const dispatch = useDispatch()
  const { isSaving, active } = useSelector(state => state.journal)

  const onClickNewNote = () => {
    dispatch(startNewNote())
  }

  return (
    <JournalStyles>
      {active ? <NoteView /> : <NothigSelectedView />}

      <IconButton
        onClick={onClickNewNote}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: .9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
        disabled={isSaving}
      >
        <AddOutlined sx={{ fontSize: 30 }} />

      </IconButton>
    </JournalStyles>
  )
}
