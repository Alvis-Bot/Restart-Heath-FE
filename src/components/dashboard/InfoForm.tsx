import React, {useCallback, useEffect, useState} from "react";
import * as Yup from "yup";
import {Link as RouterLink} from "react-router-dom";
// form
import {SubmitHandler, useForm, UseFormReturn} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
// @mui
import {FormControlLabel, Radio, IconButton, InputAdornment, Link, RadioGroup, Stack, styled} from "@mui/material";
import {LoadingButton} from "@mui/lab";
// components
// import FormProvider, { RHFTextField } from "../../components/hook-form";
import {ArrowRight, Eye, EyeSlash} from "phosphor-react";
// import { LoginUser } from "../../redux/slices/auth";
import FormProvider, {RHFTextField} from "../../components/hook-form";
import {CheckCircleIcon} from "@heroicons/react/24/solid";
import ButtonNext from "~/components/ButtonNext";
import RHFTGroupRadio from "~/components/hook-form/RHFTGroupRadio";
import {GenderEnum} from "~/components/custom/GenderOption";
import useWebSocket, { ReadyState } from 'react-use-websocket';

// ----------------------------------------------------------------------

export interface IInfoForm {
  mssv: string;
  fullName: string;
  class: string;
  gender: string;
}



export default function InfoForm() {
  // const dispatch = useAppDispatch();
  const [socketUrl, setSocketUrl] = useState('ws://localhost:3005');
  const [messageHistory, setMessageHistory] = useState([]);
  const { sendMessage , sendJsonMessage, lastMessage, readyState } = useWebSocket(socketUrl);





  const InfoSchema = Yup.object().shape({
    mssv: Yup.string().required("MSSV không được để trống"),
    fullName: Yup.string().required("Họ và tên không được để trống"),
    class: Yup.string().required("Lớp không được để trống"),

  });




  const defaultValues = {
    mssv: "",
    fullName: "",
    class: "",
    gender : GenderEnum.MALE
  }


  const methods: UseFormReturn<IInfoForm> = useForm<IInfoForm>({
    defaultValues,
    resolver: yupResolver(InfoSchema),
  });

  const {
    handleSubmit,
    setValue,
    formState: {errors},
  } = methods;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue("gender" , event.target.value)
  };
  const onSubmit: SubmitHandler<IInfoForm> = data => {
    console.log(data);
    sendJsonMessage({
      event : "info",
      data : {
        ...data
      }
    })
    // dispatch(loginUser(data))
  }

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {/*{!!errors.afterSubmit && (*/}
        {/*    <Alert severity="error">{errors.email.message}</Alert>*/}
        {/*)}*/}

       <RHFTGroupRadio name={`gender`} onChange={handleChange}  />
        <RHFTextField sx={{
          backgroundColor : "#fff",
          borderRadius : "8px"
        }} name="mssv" label="MSSV" type={`text`}/>
        <RHFTextField name="fullName" label="Họ và tên" type={`text`}/>
      <RHFTextField name="class" label="Lớp" type={`text`}/>
      </Stack>

      <ButtonNext onClick={() => {}} loading={false} disabled={readyState !== ReadyState.OPEN} />
    </FormProvider>
  );
}
