import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import DropdownFull from "./DropdownFull";
import CloseIcon from "../../Assets/SVGS/CloseIcon.js";

function ModalBasic({ setModalOpen, modalContent, setData }) {
  // DropDown Values coming from different pages, i.e: accounts, proxy etc
  const [dropDownValues, setDropDownValues] = useState(modalContent.formContent);

  const [invalidFields, setInvalidFields] = useState([]); //  Invalid DropDown Fields i.e : empty

  useEffect(() => {
    const invalidFields = checkForInvalidFields();
    if (invalidFields.length == 0) {
      setInvalidFields([]);
    }
  }, [dropDownValues]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(modalContent.schema), //schema coming from modal content to validate
  });

  const checkForInvalidFields = () => {
    let temp = [];
    dropDownValues.map((item) => {
      // if Selected===0
      if (!item.selected && item.selected === 0) {
        temp.push(item.formName);
      }
    });
    return temp;
  };

  const onSubmit = (data) => {
    const invalidFields = checkForInvalidFields();
    if (invalidFields.length > 0) {
      setInvalidFields(invalidFields);
      return;
    }

    const temp = dropDownValues.map((item) => ({ formName: item.formName, value: item.options.indexOf(item.selected) }));
    console.table(temp);
    // setData({ ...data });
  };

  return (
    <div className=' flex flex-col py-4 px-6 mobile:px-0 max-w-md w-full rounded-md shadow-lg mobile:shadow-none border mobile:border-none  h-auto '>
      {/* Add New Account */}
      <div className='flex  pb-1 justify-between items-center mb-2 text-slate-800 dark:text-slate-100 '>
        <span className='font-semibold '>Add New {modalContent.name}</span>
        <span
          onClick={() => {
            setModalOpen(false);
            reset();
          }}
          className='cursor-pointer flex items-center'
        >
          Close
          <span className=' ml-[2px]'>
            <CloseIcon />
          </span>
        </span>
      </div>

      {/* Forms */}
      <form id='form' className='flex flex-col gap-2 font-medium text-sm text-slate-800 dark:text-slate-100' onSubmit={handleSubmit(onSubmit)}>
        {modalContent.formContent.map((item) => {
          if (item.options) {
            return (
              <div key={item.formName}>
                <label className='block  mb-1' htmlFor={item.formName}>
                  {item.name} <span className='text-rose-500'>*</span>
                  {invalidFields.some((field) => field === item.formName) && <span className='text-rose-500'>Required Field</span>}
                </label>
                <DropdownFull
                  options={item.options}
                  /* dropDownValues is an array of objects which contains selected value and we can change that selected value */
                  selected={dropDownValues.find((dropItem) => dropItem.formName == item.formName).selected}
                  setSelected={setDropDownValues}
                  // dropDown Values used to map on dropDown and set Select Value
                  dropDownValues={dropDownValues}
                  // Formname passed for validation of setting dropDown value
                  formName={item.formName}
                />
              </div>
            );
          }

          return (
            <div key={item.formName}>
              <label className='block mb-1' htmlFor={item.formName}>
                {item.name} <span className='text-rose-500'>*</span> <span className='text-rose-500'>{errors[item.formName]?.message}</span>
              </label>
              <input
                type={item.password ? "password" : "text"}
                id={item.formName}
                className='form-input  w-full text-slate-600'
                {...register(item.formName)}
              />
            </div>
          );
        })}

        <button type='submit' form='form' className='mt-2 py-2 px-8 rounded-md flex bg-[#3056D3] text-white font-semibold justify-center self-center'>
          Create
        </button>
      </form>
    </div>
  );

  return null;
}

export default ModalBasic;
