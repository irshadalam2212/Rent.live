import { Button, TextField } from "@mui/material"


const SignIn = () => {
    return (
        <div className="flex items-center justify-center h-screen w-full">
            <div className="flex flex-col gap-3 w-96 bg-white px-4 py-6">
                <h1 className="text-4xl text-[#3B85DB] text-center cursor-pointer">Rent<span className="text-[#AEAEB5]">.live</span></h1>
                <h3 className="text-xl text-center">Sign Up</h3>
                <div className="flex flex-col gap-4 my-4">
                    <TextField
                        required
                        id="outlined-required"
                        label="Fullname"
                        size="small"
                        autoComplete="off"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        type="email"
                        size="small"
                        autoComplete="off"
                    />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        size="small"
                        autoComplete="off"
                    />
                </div>
                <Button variant="contained">Sign Up</Button>
                <Button variant="outlined">Sign In</Button>
            </div>
        </div>
    )
}

export default SignIn