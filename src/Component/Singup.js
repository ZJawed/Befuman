import React, { useState } from "react"
import image from "./image/Image.png"
import smallimg from "./image/Befuman_logo 1.png"
import "./SingStyle.css"
import CssBasline from "@mui/material/CssBaseline"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';





const Singup = () => {


    const [user, setUser] = useState({

        name: "",
        email: "",
        company: "",
        password: "",


    })

    const handleChange = e => {

        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }


    return (
        <>
            <CssBasline />
            <section className="singup" >

                <div className="paragraph" >
                    <Typography variant="h4" className="typo_h4" > Sign Up</Typography>
                    <Typography variant="p" className="typo_h5"    >Welcome to Befuman to explore the <br /> new things.</Typography>
                </div>
                <Grid>
                    <form className="register-form " id="register-form">

                        <div className="text">
                            <TextField InputProps={{ startAdornment: (<AccountCircle />), }} name="name" value={user.name} style={{ m: "1", width: "25ch" }} size="small" type="text" id="outlined-basic" label="Name" variant="outlined" onChange={handleChange} />

                        </div>

                        <div className="email">

                            <TextField InputProps={{ startAdornment: (<EmailIcon/>), }} value={user.email} name="email" style={{ m: "1", width: "25ch" }} size="small" id="email" label="Work Email" type="email" onChange={handleChange} />

                        </div>


                        <div className="Company">

                            <TextField InputProps={{ startAdornment: (< BusinessIcon />), }} name="company" value={user.company} style={{ m: "1", width: "25ch" }} size="small" id="outlined-basic" label="Company Name" variant="outlined" onChange={handleChange} />


                        </div>


                        <div className="Password">


                            <TextField value={user.password} InputProps={{ startAdornment: (<HttpsIcon/>), }} name="password" style={{ m: "1", width: "25ch" }} size="small" label="Password" type="password" onChange={handleChange} autoComplete="current-password"
                            />




                        </div>

                        <div className="form-button"   >


                            <Stack spacing={2} direction="row">

                                <Button type="submit" name="signup " value="Sign Up" className="btn btn-primary btn-lg" onChange={handleChange} variant="contained">Sing Up</Button>

                            </Stack>




                        </div>

                    </form>



                    <div classNmae="signups-image">

                        <figure>

                            <img className="signup-image" src={image} alt="singupimage" />

                        </figure>
                        <Grid />
                    </div>




                    <div classNmae="logos-image">

                        <figure>


                            <img className="logo-image" src={smallimg} alt="logoimage" />
                        </figure>

                        <div className="Already"  >
                            <form action="cilck">
                                <label htmlFor="clicked">





                                    <Typography variant="p" >    Already have an account?    <a href="https://accounts.google.com/signin/v2/identifier?faa=1&rip=1&continue=https%3A%2F%2Faccounts.google.com%2Fgsi%2Fselect%3Fclient_id%3D49625052041-kgt0hghf445lmcmhijv46b715m2mpbct.apps.googleusercontent.com%26ux_mode%3Dpopup%26ui_mode%3Dcard%26as%3D7sV%252B8H9vgW5z0n9L3pDTGA%26channel_id%3D824443f0b98328604b1e92a18bac64f2c202494a6a93ed2694ab3baee58ab0f0%26origin%3Dhttps%3A%2F%2Ftwitter.com&flowName=GlifWebSignIn&flowEntry=ServiceLogin">Loging</a>   </Typography>
                                </label>
                            </form>

                        </div>








                    </div>


                </Grid>
            </section>




        </>

    )



}


export default Singup