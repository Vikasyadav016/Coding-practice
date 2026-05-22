import useDynamicForm from "./useDynamicForm";
import './index.css'

const DynamicForm = () => {
    const { dynamicFormField, formField, errors, handleInputChange, handleSubmit }: any = useDynamicForm();

    return (
        <div className="dynamicform">
            <h1>Dynamic form with redux</h1>
            <div className="formcontainer">
                {dynamicFormField.map((field: any, index: number) => (
                    <div className="fieldlabelcard" key={index}>
                        <div className="label">
                            {field.label}{field.required && <span className="requiredField">*</span>}
                        </div>
                        <div className="input">
                            <input className="inputValue" type={field.type} value={formField[field.value]} name={field.name} onChange={handleInputChange} />
                        </div>
                        {
                            errors[field.name] && (
                                <div className="validationErrorMsg">
                                    {errors[field.name]}
                                </div>
                            )
                        }
                    </div>
                ))}
                <div className="buttonSection">
                    <div className="previewbutton">
                        <button className="previewbtn">Preview</button>
                    </div>
                    <div className="submitbutton">
                        <button className="submitbtn" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DynamicForm;
