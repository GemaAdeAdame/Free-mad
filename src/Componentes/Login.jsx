import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
/*import { red } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";*/
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
/*import Avatar from "@mui/material/Avatar";
import { fontFamily } from "@mui/system";*/
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


export const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{8,16}$/, // 8 a 16 digitos.
  email: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
  telefono: /^\+?(6\d{2}|7[1-9]\d{1})\d{6}$/, // 7 a 14 numeros.
};

export const signUpFields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    required: true,
    pattern: expresiones.name,
    helperText: "Por favor ponga un nombre",
    valid: (value) => expresiones.name.test(value),
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    pattern: expresiones.email,
    helperText: "El formato de email no es correcto",
    valid: (value) => expresiones.email.test(value),
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    type: "tel",
    required: true,
    pattern: expresiones.telefono,
    helperText: "Seleccione un número de teléfono que empiece por 6********",
    valid: (value) => expresiones.telefono.test(value),
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
    pattern: expresiones.password,
    helperText: "Selecciona una correcta contraseña entre 8 y 16 carácteres",
    valid: (value) => expresiones.password.test(value),
  },
];

const Loginvalidado = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues: {
      name: undefined,
      email: undefined,
      password: undefined,
      confirmPassword: undefined,
      phoneNumber: undefined,
    },
  });

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
    /*alert("Registrado/a correctamente✈️");*/
  };
  /*
  return (
    <div>
      <Box
        sx={{
          margin: "5vw 30vw",
        }}
      >
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {signUpFields.map((field) => (
            <Controller
              key={field.name}
              name={field.name}
              control={control}
              defaultValue=""
              rules={{
                required: field.required,
                pattern: field.pattern,
                validate: (value) => field.valid(value),
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  sx={{ width: "100%",
                    '& > input': {
                      backgroundColor:'#fff'
                    }
                  }}
                  onChange={onChange}
                  label={field.label}
                  variant="outlined"
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  value={value}
                  required
                  error={
                    !!errors[field.name] ||
                    (dirtyFields[field.name] && !field.valid(value))
                  }
                  helperText={
                    (dirtyFields[field.name] && !field.valid(value)) ||
                    !!errors[field.name] ? (
                      <Typography sx={{backgroundColor: '#17223b'}} variant="error">
                        {field.helperText}
                      </Typography>
                    ) : (
                      " "
                    )
                  }
                />
              )}
            />
          ))}
          <Controller
            name={"confirmPassword"}
            control={control}
            defaultValue=""
            rules={{
              required: true,
              validate: (value) => value === password,
            }}
            render={({ field: { onChange, value } }) => (
              <TextField
                sx={{ width: "100%" }}
                onChange={onChange}
                label={"Confirm Password"}
                variant="outlined"
                type={"password"}
                name={"confirmPassword"}
                id={"confirmPassword"}
                value={value}
                required
                error={
                  !!errors.confirmPassword ||
                  (dirtyFields.confirmPassword && value !== password)
                }
                helperText={
                  (dirtyFields.confirmPassword && value !== password) ||
                  !!errors.confirmPassword ? (
                    <Typography variant="error">
                      {"The answers don't match"}
                    </Typography>
                  ) : (
                    " "
                  )
                }
              />
            )}
          />
          <Button sx={{ width: "100%", backgroundColor: '#06D6A0', fontFamily: 'Poppins' }} variant="contained" type="submit">
            Sign Up
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Loginvalidado;*/
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#17223b",
          height: "100vh",
          padding: "5vh 10vh",
        }}
      >
        <h1 style={{ textAlign: "center", padding: "20px"}}>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {signUpFields.map((field) => (
            <Controller
              key={field.name}
              name={field.name}
              control={control}
              defaultValue=""
              rules={{
                required: field.required,
                pattern: field.pattern,
                validate: (value) => field.valid(value, password),
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  fullWidth
                  sx={{
                    marginBottom: "20px",
                    ".MuiInputBase-root": {
                      backgroundColor: "white",
                      borderRadius: "50px",
                      border: errors[field.name]
                        ? "3px solid red"
                        : "3px solid #06D6A0",
                    },
                    ".MuiInputBase-root > fieldset": {
                      border: "none",
                    },
                    ".MuiInputBase-root.Mui-focused": {
                      border: errors[field.name]
                        ? "3px solid red"
                        : "3px solid #FFD166",
                    },
                    ".MuiInputBase-input": {
                      color: "#000",
                      border: "none",
                    },
                    ".MuiInputBase-input:focus": {
                      color: "#000",
                      border: "none",
                    },
                    ".MuiFormLabel-root": {
                      color: errors[field.name] ? "red" : "#000",
                      marginLeft: "10px",
                      background: value ? "aliceblue" : "transparent",
                    },
                    ".MuiFormLabel-root.Mui-focused": {
                      color: "#000",
                      background: "aliceblue",
                    },
                  }}
                  onChange={onChange}
                  label={field.label}
                  variant="outlined"
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  value={value}
                  required
                  error={
                    !!errors[field.name] ||
                    (dirtyFields[field.name] && !field.valid(value, password))
                  }
                  helperText={
                    (dirtyFields[field.name] &&
                      !field.valid(value, password)) ||
                    !!errors[field.name] ? (
                      <Typography variant="error" sx={{ fontSize: "16px" }}>
                        {field.helperText}
                      </Typography>
                    ) : (
                      " "
                    )
                  }
                />
              )}
            />
          ))}
          <Button
            fullWidth
            sx={{
              backgroundColor: "#645CBB",
              color: "white",
              borderRadius: "50px",
              fontFamily: 'Poppins',
              fontSize: "15px",
              "&:hover": {
                backgroundColor: "#06D6A0",
              },
            }}
            type="submit"
          >
            Enviar
          </Button>
          <Stack sx={{ width: '100%' }} spacing={30}>
             <Alert variant="filled" severity="success">
             ¡Usuario/a registrada!
             </Alert>
           </Stack>
        </form>
      </Box>
    </div>
  );
};
export default Loginvalidado;





/*import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import background from "../images/fondoneon.jpg";


const Login = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, dirtyFields },
    watch,
  } = useForm({
    defaultValues:{
      name: undefined,
      email: undefined,
      password: undefined,
      confirmPassword: undefined,
    }
  });
  const customSubmit = (data) => {
    console.log(data);
    alert("¡Enviado correctamente✈️!");
  };

  const [colorInput, setColorInput] = useState("#fff7f7");
  useEffect(() => {
    let words = watch("prueba");
    if (words === "react") {
      setColorInput("#614ad3");
    }
  });
  
  const password = watch("password");

  const emailPattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
  return (
    <>
      <div style={{ backgroundImage: `url(${background})` }}></div>
      <h2 class="g-titulo">Login</h2>
      <form onSubmit={handleSubmit(customSubmit)} className="form-react" noValidate>
        <div className="form-control">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              pattern: emailPattern,
            }}
            render={({ field: { onChange, value } }) => (
              <TextField
                sx={{ width: "100%" }}
                onChange={onChange}
                label={"Email"}
                variant="outlined"
                type={"email"}
                value={value}
                required
                error={
                  !!errors["email"] ||
                  (dirtyFields["email"] && !emailPattern.exec(value))
                }
                helperText={
                  (dirtyFields["email"] && !emailPattern.exec(value)) ||
                  !!errors["email"] ? (
                    <small className="fail">El campo no puede estar vacío</small>
                  ) : (
                    " "
                  )
                }
              />
            )}
          />
          <Controller
            control={control}
            name="name"
            rules={{
              required: true,
              minLength: 3,
              maxLength: 15,
            }}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Nombre"
                onChange={onChange}
                value={value}
                type="text"
                required
              />
            )}
          />
          {errors.name?.type === "required" && (
            <small className="fail">El campo no puede estar vacío</small>
          )}
          {errors.name?.type === "maxLength" && (
            <small className="fail">El máximo de caracteres es 15</small> 
          )}
           {errors.name?.type === "minLength" && (
            <small className="fail">El mínimo de caracteres es 3</small>
           )}


           <Controller
            name={"confirmPassword"}
            control={control}
            defaultValue=""
            rules={{
              required: true,
              validate: (value) => value === password,
            }}
            render={({ field: { onChange, value } }) => (
              <TextField
                sx={{ width: "100%" }}
                onChange={onChange}
                label={"Confirm Password"}
                variant="outlined"
                type={"password"}
                name={"confirmPassword"}
                id={"confirmPassword"}
                value={value}
                required
                error={
                  !!errors.confirmPassword ||
                  (dirtyFields.confirmPassword && value !== password)
                }
                helperText={
                  (dirtyFields.confirmPassword && value !== password) ||
                  !!errors.confirmPassword ? (
                    <Typography variant="error">
                      {"The answers don't match"}
                    </Typography>
                  ) : (
                    " "
                  )
                }
              />
            )}
          />
        </div>
        <div className="form-control">
          <label>Años</label>
          <input
            type="number"
            {...register("age", {
              required: true,
              min: 18,
              max: 100,
            })}
          />
          {errors.age?.type === "required" && (
            <small className="fail">El campo no puede estar vacío</small>
          )}
          {errors.age?.type === "min" && (
            <small className="fail">La edad mínima es de 18 años</small>
          )}
          {errors.age?.type === "max" && (
            <small className="fail">La edad máxima es de 100 años</small>
          )}
        </div>
        <div className="form-control">
          <label>Ciudad</label>
          <input
            type="text"
            {...register("country", {
              required: {
                value: true,
                message: "Custom Message: Ingrese los datos",
              },
            })}
          />
          {errors.country && (
            <small className="fail">{errors.country.message}</small>
          )}
        </div>
        <div className="form-control">
          <input
            {...register("prueba")}
            style={{ backgroundColor: colorInput }}
          />
        </div>
        <Controller
          label="label"
          control={control}
          defaultValue=""
          name="checkbox"
          render={({ field: { onChange, value } }) => (
            <Checkbox
              value={value}
              label="checkbox"
              onChange={onChange}
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
          )}
        />

        <Button sx={{ width: "100%" }} variant="contained" type="submit">
            Sign Up
        </Button>
      </form>
    </>
  );
};

export default Login;*/
