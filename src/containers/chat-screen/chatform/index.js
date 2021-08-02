import React from "react";
import { MyForm } from "../../../components";
import { IoIosPaperPlane } from "react-icons/io";

export default function ChatForm() {
  return (
    <MyForm>
      <MyForm.FormGroup className="form-group formInput__group">
        <MyForm.FormInput
          className="form-control forminput"
          placeholder="Type Message ..."
        />
        <MyForm.FormButton
          className="btn btn-success submitButton"
        >
          <IoIosPaperPlane />
        </MyForm.FormButton>
      </MyForm.FormGroup>
    </MyForm>
  );
}
