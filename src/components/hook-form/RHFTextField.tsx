import { Controller, useFormContext } from 'react-hook-form'
import {OutlinedInputProps, styled, TextField, TextFieldProps} from '@mui/material'
import React from 'react'
import {alpha} from "@mui/material/styles";

export type CustomTextFieldProps = TextFieldProps & {
  name: string
  helperText?: string
}

const RedditTextField = styled((props: TextFieldProps) => (
  <TextField
    sx={{
      marginTop: `1.5rem !important`
    }}
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: 'transparent'
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main
    }
  }
}))
export default function RHFTextField({ name, helperText, ...other }: CustomTextFieldProps) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <RedditTextField
          {...field}
          fullWidth
          variant='filled'
          value={field.value || ''}
          error={!!error}
          helperText={error ? error.message : helperText}
          {...other}
        />
      )}
    />
  )
}
