import { Formik } from "formik";

import close from "../../images/icons.svg";

import {
  ButtonAction,
  ButtonCancel,
  ButtonCloseWrap,
  ButtonWrapper,
  ErrorMessage,
  Form,
  InputTime,
  InputTitle,
  Label,
  RadioField,
  RadioLabel,
  RadioSpan,
  RadioWrapper,
  TimeWrapper,
} from "./FeedbackForm.styled";

export const TaskForm = ({ onClose, action }) => {
  return (
    <Formik>
      <Form>
        <Label>
          Title
          <InputTitle type="text" name="title" placeholder="Enter text" />
          <ErrorMessage name="title" component="div" />
        </Label>

        <TimeWrapper>
          <Label>
            Start
            <InputTime type="time" name="start" />
            <ErrorMessage name="start" component="div" />
          </Label>
          <Label>
            End
            <InputTime type="time" name="end" />
            <ErrorMessage name="end" component="div" />
          </Label>
        </TimeWrapper>

        <RadioWrapper role="group" aria-labelledby="my-radio-group">
          <RadioLabel>
            <RadioField type="radio" name="priority" value="low" />
            <RadioSpan value="low" />
            Low
          </RadioLabel>
          <RadioLabel>
            <RadioField type="radio" name="priority" value="medium" />
            <RadioSpan value="medium" />
            Medium
          </RadioLabel>
          <RadioLabel>
            <RadioField type="radio" name="priority" value="high" />
            <RadioSpan value="high" />
            High
          </RadioLabel>
        </RadioWrapper>

        <ButtonWrapper>
          <ButtonAction type="submit">
            {action === "edit" ? "Edit" : "Add"}
          </ButtonAction>
          <ButtonCancel type="button" onClick={onClose}>
            Cancel
          </ButtonCancel>
        </ButtonWrapper>

        <ButtonCloseWrap
          type="button"
          aria-label="close button"
          onClick={onClose}
        >
          <svg width="24" height="24">
            <use href={`${close}#x-close`} />
          </svg>
        </ButtonCloseWrap>
      </Form>
    </Formik>
  );
};
