import React, { useCallback, useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
// form
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// @mui
import {
  FormControlLabel,
  Radio,
  IconButton,
  InputAdornment,
  Link,
  RadioGroup,
  Stack,
  styled,
  TextField,
  TextFieldProps,
  OutlinedInputProps
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
// components
// import FormProvider, { RHFTextField } from "../../components/hook-form";
import { ArrowRight, Eye, EyeSlash } from 'phosphor-react'
// import { LoginUser } from "../../redux/slices/auth";

import { CheckCircleIcon } from '@heroicons/react/24/solid'


import { alpha } from '@mui/material/styles'
import {GenderEnum} from "@/components/custom/GenderOption";
import FormProvider, {RHFTextField} from "@/components/hook-form";
import RHFTGroupRadio from "@/components/hook-form/RHFTGroupRadio";
import ButtonNext from "@/components/ButtonNext";
import {useSocket} from "@/hooks/useSocket";

// ----------------------------------------------------------------------

export interface IInfoForm {
  mssv: string
  fullName: string
  class: string
  gender: string
}

export default function InfoForm() {
  // const dispatch = useAppDispatch();
  const socket = useSocket()




  const navigate = useNavigate()

  const InfoSchema = Yup.object().shape({
    mssv: Yup.string().required('MSSV không được để trống'),
    fullName: Yup.string().required('Họ và tên không được để trống'),
    class: Yup.string().required('Lớp không được để trống')
  })

  const defaultValues = {
    mssv: '',
    fullName: '',
    class: '',
    gender: GenderEnum.MALE
  }

  const methods: UseFormReturn<IInfoForm> = useForm<IInfoForm>({
    defaultValues,
    resolver: yupResolver(InfoSchema)
  })

  const {
    handleSubmit,
    setValue,
    formState: { errors }
  } = methods

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue('gender', event.target.value)
  }
  const onSubmit: SubmitHandler<IInfoForm> = async (data) => {
    console.log(data)
    socket.send(JSON.stringify({
      event: 'info',
      data: {
        ...data
      }
    }))
    navigate('/personal')
  }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {/*{!!errors.afterSubmit && (*/}
        {/*    <Alert severity="error">{errors.email.message}</Alert>*/}
        {/*)}*/}

        <RHFTGroupRadio name={`gender`} onChange={handleChange} />
        <RHFTextField label='MSSV' name={`mssv`}  style={{ marginTop: 11 }} />
        <RHFTextField label='Họ và tên' name={`fullName`} style={{ marginTop: 11 }} />
        <RHFTextField label='Lớp' name={`class`}  style={{ marginTop: 11 }} />
      </Stack>

      <ButtonNext
        onClick={() => {}}
        loading={false}
        disabled={
         socket.readyState !== socket.OPEN
        }
      />
    </FormProvider>
  )
}
