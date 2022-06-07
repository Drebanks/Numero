import Cancel from "../assets/images/authentication/eye_cancel.svg";
import Eye from "../assets/images/authentication/see.svg";
export const changeHandler = (
  event,
  elementID,
  formType,
  setFormUpdate,
  validForm
) => {
  const { target } = event;
  let passwordValue = formType["password"] ? formType["password"].value : null;
  let isValid = true;
  isValid =
    formType[elementID].validation(event.target.value, passwordValue) &&
    isValid;
  const updatedFormElement = {
    ...formType[elementID],
    value: target.value,
    isValid: isValid,
  };
  const updatedForm = {
    ...formType,
    [elementID]: updatedFormElement,
  };

  let formIsValid = true;
  for (let elementID in updatedForm) {
    formIsValid = updatedForm[elementID].isValid && formIsValid;
  }
  validForm(formIsValid);
  setFormUpdate(updatedForm);
};

export const handleBlur = (elementID, formType, updateFunction) => {
  const updatedFormElement = {
    ...formType[elementID],
    blur: true,
  };

  const updatedForm = {
    ...formType,
    [elementID]: updatedFormElement,
  };
  return updateFunction(updatedForm);
};

export const showPassword = (evt, elementID, formType, formUpdateFunc) => {
  evt.stopPropagation();
  const updatedFormElement = {
    ...formType[elementID],
    show: !formType[elementID].show,
    type: formType[elementID].show ? "text" : "password",
    view: formType[elementID].show ? Cancel : Eye,
  };

  const updatedForm = {
    ...formType,
    [elementID]: updatedFormElement,
  };

  formUpdateFunc(updatedForm);
};
