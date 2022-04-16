import {Wrapper} from "./style";
import {Form, FormGroup, FormTitle, Input, Label, SubmitButton} from "../style";
import {useId, useState} from "react";
import {useDispatch} from "react-redux";
import {addPoll} from "../../../core/redux/actions/pollActions";
import { v4 as uuidv4 } from 'uuid';
import Toast from "../../Toast";

const AddNewLinkForm = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({})
    const [toastMessage, setToastMessage] = useState("")

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e?.target?.name] : e?.target?.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const now = new Date().getTime();
        const payload = {
            ...formData,
            id: uuidv4(),
            point: 0,
            createdDate: now,
            lastUpdate: now
        }
        dispatch(addPoll(payload))
        setToastMessage(`${payload?.name} added`)
        setFormData({})

    }

    return (
        <>
            <Wrapper>
                <FormTitle>Add New Link</FormTitle>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <FormGroup>
                        <Label htmlFor="name">Link Name:</Label>
                        <Input onInput={(e) => handleOnChange(e)} value={formData?.name || ""}  name="name" placeholder="e.g. Alphabet" type="text" required />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="link">Link Name:</Label>
                        <Input onInput={(e) => handleOnChange(e)} name="link" placeholder="e.g. Alphabet" value={formData?.link || ""} type="url" required />
                    </FormGroup>
                    <FormGroup>
                        <SubmitButton>ADD</SubmitButton>
                    </FormGroup>
                </Form>
            </Wrapper>
            {
                toastMessage && <Toast message={toastMessage} handleDismiss={() => setToastMessage("")} />
            }
        </>
    );
};

export default AddNewLinkForm;
