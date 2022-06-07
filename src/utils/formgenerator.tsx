// import Input from "../components/UI/Input/input";
import { changeHandler, handleBlur, showPassword } from "./changehandler";

const formGenerator = (formType, setFormUpdate, setFormValid) => {
  const formArr = [];
  for (let key in formType) {
    formArr.push({
      id: key,
      config: formType[key],
    });
  }

  const form = formArr.map(({ id, config }) => (
    <Input
      key={id}
      value={config.value}
      type={config.type}
      isValid={config.isValid}
      elementType={config.elementType}
      placeholder={config.placeholder}
      svg={config.svg}
      view={config.view}
      label={config.label}
      forgot={config.forgot}
      info={config.info}
      showpassword={(evt) => showPassword(evt, id, formType, setFormUpdate)}
      onchange={(evt) =>
        changeHandler(evt, id, formType, setFormUpdate, setFormValid)
      }
      onblur={() => handleBlur(id, formType, setFormUpdate)}
      blur={config.blur}
    />
  ));
  return form;
};

export default formGenerator;
