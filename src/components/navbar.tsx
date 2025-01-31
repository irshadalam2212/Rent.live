import Button from '@mui/material/Button';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-3 bg-white">
            <h1 className="text-xl text-[#3B85DB] cursor-pointer">Rent<span className="text-[#AEAEB5]">.live</span></h1>
            <div className='flex gap-8 items-center'>
                <div className="uppercase text-black cursor-pointer">
                    Browse Host
                </div>
                <Button
                    className="uppercase"
                    variant="outlined">
                    log in / sign up
                </Button>
            </div>
        </div>
    )
}

export default Navbar