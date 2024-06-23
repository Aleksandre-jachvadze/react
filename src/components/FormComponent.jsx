import React from "react";
import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ErrorIcon from "../assets/icon-error.svg";
import { useForm } from "react-hook-form";

const FormComponent = () => {
  // Form Error Handling

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const info = (info) => {
    console.log(info);
  };

  // Custom Variable
  const inputStyles = {
    fontWeight: "700",
    color: "hsl(249, 10%, 26%) ",
    outline: "none",
    fontFamily: "Poppins",
  };

  const adornment = (
    <InputAdornment position="end">
      <img src={ErrorIcon} />
    </InputAdornment>
  );

  const errorsStyles = {
    fontSize: "16px",
    fontStyle: "italic",
    lineHeight: 0.1,
    color: "hsl(0, 100%, 74%) ",
    fontFamily: "Poppins",
    textAlign: "end",
  };

  return (
    <Stack maxWidth={"600px"} spacing={3}>
      <Button
        size="large"
        sx={{
          backgroundColor: "hsl(248, 32%, 49%)",
          paddingBlock: "15px",
          textTransform: "none",
          boxShadow: "2px 5px 4px 2px rgba(0,0,0,0.18)",
          borderRadius: "10px",
          color: "white",
          fontFamily: "Poppins",
          fontWeight: "400",
          flexWrap: "wrap",
          ":hover": {
            backgroundColor: "hsla(248, 32%, 49%,0.89)",
          },
        }}
      >
        <span style={{ fontWeight: "600", marginRight: "3px" }}>
          Try it free 7 days
        </span>
        then $20/mo. thereafter
      </Button>
      {/* Form */}
      <Stack
        component={"form"}
        spacing={2.5}
        padding={4}
        sx={{
          backgroundColor: "white",
          boxShadow: "2px 12px 4px 2px rgba(0,0,0,0.18)",
          borderRadius: "10px",
        }}
        onSubmit={handleSubmit(info)}
      >
        <TextField
          type="text"
          InputProps={{
            style: { ...inputStyles },
            endAdornment: !!errors?.FName ? adornment : null,
          }}
          {...register("FName", { required: "First Name cannot be empty" })}
          error={!!errors?.FName}
          placeholder={!!errors?.FName ? null : "First Name"}
        />
        {!!errors?.FName ? (
          <Typography {...errorsStyles}>{errors?.FName.message}</Typography>
        ) : null}

        <TextField
          type="text"
          InputProps={{
            style: { ...inputStyles },
            endAdornment: !!errors?.LName ? adornment : null,
          }}
          {...register("LName", { required: "Last Name cannot be empty" })}
          error={!!errors?.LName}
          placeholder={!!errors?.LName ? null : "Last Name"}
        />
        {!!errors?.LName ? (
          <Typography {...errorsStyles}>{errors?.LName.message}</Typography>
        ) : null}
        <TextField
          InputProps={{
            style: { ...inputStyles },
            endAdornment: !!errors?.email ? adornment : null,
          }}
          {...register("email", {
            required: "email cannot be empty",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Looks like this is not an email",
            },
          })}
          error={!!errors?.email}
          placeholder={!!errors?.email ? null : "Email Address"}
        />
        {!!errors?.email ? (
          <Typography {...errorsStyles}>{errors?.email.message}</Typography>
        ) : null}
        <TextField
          type="password"
          InputProps={{
            style: { ...inputStyles },
            endAdornment: !!errors?.password ? adornment : null,
          }}
          {...register("password", { required: "Password cannot be empty" })}
          error={!!errors?.password}
          placeholder={!!errors?.password ? null : "Password"}
        />
        {!!errors?.password ? (
          <Typography {...errorsStyles}>{errors?.password.message}</Typography>
        ) : null}

        <Button
          size="large"
          fullWidth
          type="submit"
          sx={{
            backgroundColor: "hsl(154, 59%, 51%)",
            color: "white",
            fontFamily: "Poppins",
            paddingBlock: "15px",
            borderRadius: "5px",
            boxShadow: "2px 2px 4px 2px rgba(0,0,0,0.18)",
            ":hover": {
              backgroundColor: "hsla(154, 59%, 51%,0.9)",
            },
          }}
        >
          Claim your free trial{" "}
        </Button>
        <Typography
          fontSize={14}
          textAlign={"center"}
          fontFamily={"Poppins"}
          fontWeight={500}
          color={"hsl(246, 25%, 77%)"}
        >
          By clicking the button, you are agreeing to our{" "}
          <span style={{ color: "hsl(0, 100%, 74%) ", fontWeight: "600" }}>
            Terms and Services
          </span>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FormComponent;
