import { useForm } from "react-hook-form"


const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div className='bg-dark vh-100'>
            <div className='container h-100'>
                <div className='row align-items-center h-100'>
                    <div className='col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-white'>
                        <div className='text-center'>Inicio de Sesion
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label className="fw-bold">Email</label>
                                    <input className="form-control" placeholder="Email Address"
                                        {...register("Email", {
                                            required: {
                                                value: true,
                                                message: "This field is required"
                                            },
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Invalid format email address"
                                            },
                                        })} />
                                    {errors.Email && (<span className="text-danger">{errors.Email.message}</span>)}

                                </div>

                                <div className="mb-3">
                                    <label className="fw-bold">Password</label>
                                    <input className="form-control" placeholder="Password"
                                        {...register("Password", {
                                            required: {
                                                value: true,
                                                message: "This field is required"
                                            },
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                                                message: "Invalid password format",
                                            },
                                        })} />
                                    {errors.Password && (<span className="text-danger">{errors.Password.message}</span>)}
                                </div>

                                <div className="d-flex flex-column mt-4">
                                    <button className="btn btn-primary">Iniciar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default LoginForm