import { Button, MenuItem, Select, TextField } from "@mui/material"
import Heading from "../components/heading"

const Addlisting = () => {
    return (
        <div className="flex items-center justify-center h-screen w-full bg-[url('/background.svg')]">
            <div className="flex flex-col gap-3 w-96 px-4 py-6">
                <Heading>List a space</Heading>
                <div className="flex flex-col gap-4 my-4">
                    <TextField
                        required
                        id="outlined-required"
                        label="Listing Name"
                        size="small"
                        autoComplete="off"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Location "
                        size="small"
                        autoComplete="off"
                    />
                    <Select
                        labelId="demo-simple-select-label"
                        size="small"
                        id="demo-simple-select"
                        // value={age}
                        label="Number of Bedrooms"
                        // onChange={handleChange}
                    >
                        <MenuItem value={10}>1 Bedroom</MenuItem>
                        <MenuItem value={20}>2 Bedroom</MenuItem>
                        <MenuItem value={30}>3 Bedroom</MenuItem>
                    </Select>
                </div>
                <Button variant="contained">Send Application</Button>
            </div>
        </div>
    )
}

export default Addlisting