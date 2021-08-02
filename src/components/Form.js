import { tsPropertySignature } from "@babel/types";
import React from "react";
import style from "./Form.module.css"
const Form=(props)=>{

const formSubmitHandler=(event)=>{


    props.onFormSubmit(event);

}
    
const FormInputChangeHandler=(event)=>{

    props.onInputChange(event);

}

return(
<form  onSubmit= {formSubmitHandler} className={style.form}>
        <input
          placeholder="Pasta"
          className={style.searchbar}
          onChange={FormInputChangeHandler}
        ></input>
        <button className={style.searchbtn} type="submit">
          Search recipes
        </button>
      </form>
)


}
export default Form;