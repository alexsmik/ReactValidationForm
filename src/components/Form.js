import React, {useState} from "react";
import Input from "./Input";

const Form = () => {
    // all values, fields in the form
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    // inputs params
    const inputs = [
        {
        id: 1,
        name: "username",
        type: "text",
        placeholder: "Пользователь",
        errorMessage:
        "Имя пользователя должно содержать 3 символа",
        label: "Пользователь",
        pattern: "^[A-Za-z0-9]{3,}$",
        required: true,
    },
    {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "Почта",
        errorMessage: "Неправильный адрес почты",
        label: "Почта",
        required: true,
    },
    {
        id: 3,
        name: "password",
        type: "password",
        placeholder: "Пароль",
        errorMessage:
        "Пароль должен быть 4 символа",
        label: "Ваш Пароль",
        pattern: `^[A-Za-z0-9]{4,}$`,
        required: true,
    },
    {
        id: 4,
        name: "confirmPassword",
        type: "password",
        placeholder: "Повторите пароль",
        errorMessage: "Пароли не совпадают",
        label: "Повторите пароль",
        pattern: values.password,
        required: true,
    },
    ];

    const handleSubmit = (e) => {
    e.preventDefault();
};

    const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
};
    return (
    <div className="app">
        <form onSubmit={handleSubmit}>
            <h1>Form Validation</h1>
            {inputs.map((input) => (
                <Input
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                />
            ))}
            <button>Отправить</button>
        </form>
    </div>
    );
};

export default Form;