interface FormRowPropsTypes {
    type: string
    name: string
    defaultValue: string
    labelText: string
}

export default function FormRow({
    type,
    name,
    defaultValue,
    labelText,
}: FormRowPropsTypes) {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText}
            </label>
            <input
                type={type}
                id="name"
                name={name}
                className="form-input"
                defaultValue={defaultValue}
                required
            />
        </div>
    )
}
