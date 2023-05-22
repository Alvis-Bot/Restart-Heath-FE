import { Controller, useFormContext } from 'react-hook-form'
import { FormControlLabel, RadioGroup, RadioGroupProps, Stack } from '@mui/material'
import React from 'react'
import { GenderEnum } from '../custom/GenderOption'
import GenderOption from "@/components/custom/GenderOption";


export default function RHFTGroupRadio({ name, ...other }: RadioGroupProps) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name!}
      control={control}
      render={({ field, fieldState, formState }) => (
        <RadioGroup value={field} defaultValue={field.value} onChange={field.onChange} {...other}>
          <Stack direction='row' width={`100%`} justifyContent={`space-between`} alignItems={`center`} spacing={2}>
            <FormControlLabel
              sx={{ width: '100%' }}
              value={GenderEnum.MALE}
              control={
                <GenderOption
                  gender={GenderEnum.MALE}
                  onClick={() => field.onChange(GenderEnum.MALE)}
                  check={field.value === GenderEnum.MALE}
                />
              }
              label={``}
            />
            <FormControlLabel
              sx={{ width: '100%' }}
              value={GenderEnum.FEMALE}
              control={
                <GenderOption
                  gender={GenderEnum.FEMALE}
                  onClick={() => field.onChange(GenderEnum.FEMALE)}
                  check={field.value === GenderEnum.FEMALE}
                />
              }
              label={``}
            />
          </Stack>
        </RadioGroup>
      )}
    />
  )
}
