import React from 'react';


export default (props) => {

    const {
        cancel,
        errors, // errorDisplay da aggiungere
        submit,
        submitButtonText,
        elements,
    } = props;

    function handleSubmit(event) {
        event.preventDefault();
        submit();
    };

    function handleCancel(event) {
        event.preventDefault();
        cancel();
    };

    return (
        <div>
            <form onSubmit={handleSubmit} >
                {elements()}
                <div>
                    <button className="button" type="submit">{submitButtonText}</button>
                    <button className="button button-secondary" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );

}
