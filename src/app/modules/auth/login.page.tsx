import Button from "@atomic/atm-button/button.component";

function LoginPage() {
    return (
        <>
        <div className='items-center justify-center h-screen flex flex-col w-full gap-3'>
            <h1>Faça login</h1>
            <Button variant='primary'>Login</Button>
            <Button variant='secondary'>Login</Button>
            <Button variant='primaryDestructive'>Login</Button>
        </div>
        </>
    )
}

export default LoginPage;