import useDynamicForm from "./useDynamicForm";
import './index.css'

const DynamicForm = () => {
    const { dynamicFormField, formField, handleInputChange, handleSubmit }: any = useDynamicForm();

    return (
        <div className="dynamicform">
            <h1>Dynamic form with redux</h1>
            <div className="formcontainer">
                {dynamicFormField.map((field: any, index: number) => (
                    <div className="fieldlabelcard" key={index}>
                        <div className="label">
                            {field.label}
                        </div>
                        <div className="input">
                            <input type={field.type} value={formField[field.value]} name={field.name} onChange={handleInputChange} />
                        </div>
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
