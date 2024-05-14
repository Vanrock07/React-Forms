import { useForm } from "react-hook-form"


const RegisterForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const valSubmit = (data) => console.log(data);

    return (
        <div className='bg-dark vh-100'>
            <div className='container h-100'>
                <div className='row align-items-center h-100'>
                    <div className='col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-white'>
                        <div className='text-center'>Registro de usuarios

                            <form onSubmit={handleSubmit(valSubmit)}>
                                <div className="mb-3">
                                    <label className="fw-bold">Nombres</label>
                                    <input className="form-control" type="text" placeholder="Nombres"
                                        {...register("Nombres", {
                                            required: {
                                                value: true,
                                                message: "This field is required"
                                            },
                                            pattern: {
                                                value: /^[A-Za-z]+(?:-[A-Za-z]+)*$/,
                                                message: "Invalid First Name Format"
                                            },
                                        })} />
                                    {errors.Nombres && (<span className="text-danger">{errors.Nombres.message}</span>)}

                                </div>

                                <div className="mb-3">
                                    <label className="fw-bold">Apellidos</label>
                                    <input className="form-control" type="text" placeholder="Apellidos"
                                        {...register("Apellidos", {
                                            required: {
                                                value: true,
                                                message: "This field is required"
                                            },
                                            pattern: {
                                                value: /^[A-Za-z]+(?:-[A-Za-z]+)*$/,
                                                message: "Invalid Last Name Format (Only Letters)"
                                            },
                                        })} />
                                    {errors.Apellidos && (<span className="text-danger">{errors.Apellidos.message}</span>)}

                                </div>
                                <div className="mb-3">
                                    <label className="fw-bold">Email</label>
                                    <input className="form-control" type="text" placeholder="Email Address"
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
                                    <label className="fw-bold">Pais</label>
                                    <input className="form-control" type="text" placeholder="Pais"/>
                                    <select {...register('Pais')}> 
                                        <option value="Colombia">Colombia</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Perú">Perú</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="fw-bold">Telefono</label>
                                    <input className="form-control" type="number" placeholder="Phone Number"
                                        {...register("Telefono", {
                                            required: {
                                                value: true,
                                                message: "This field is required"
                                            },
                                        
                                        })} />
                                    {errors.Telefono && (<span className="text-danger">{errors.Telefono.message}</span>)}
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
                                    <button className="btn btn-primary">Registrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterForm