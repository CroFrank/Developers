interface FormRowPropsTypes {
    type: string
    name: string
    labelText: string
    defaultValue?: string
}

export default function FormRow({
    type,
    name,
    labelText,
    defaultValue
}: FormRowPropsTypes) {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                className="form-input"
                defaultValue={defaultValue}
                required
            />
        </div>
    )
}
