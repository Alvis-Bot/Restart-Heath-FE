import {Stack} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import {ArrowRight} from "phosphor-react";
import React, {FC} from "react";


interface IButtonNextProps {
  onClick: () => void
  loading: boolean
  disabled: boolean
}


const ButtonNext: FC<IButtonNextProps> = ({loading , onClick , disabled}) => {
    return (
      <Stack
        mt={5}
        direction={`row`}
        justifyContent={`flex-end`}
      >
        <LoadingButton
          disabled={disabled}
          type={`submit`}
          onClick={onClick}
          color="inherit"
          size="large"
          variant="contained"
          loading={loading}
          sx={{
            width : 'max-content',
            borderRadius: '50%',
            padding : "20px",
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
            "&:hover": {
              bgcolor: "text.primary",
              color: (theme) =>
                theme.palette.mode === "light" ? "common.white" : "grey.800",
            },
          }}
        >
          <ArrowRight size={32} weight="bold" color={`#fff`} />
        </LoadingButton>
      </Stack>
    )
}

export default ButtonNext